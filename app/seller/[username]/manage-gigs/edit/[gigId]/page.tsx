"use client";

import { Button, Form, Row, Col, Container, Alert, Breadcrumb } from "react-bootstrap";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useUser } from "@clerk/nextjs"; // Use useUser instead of useAuth
import { useMutation, useQuery } from "convex/react";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Images } from "@/components/images";
import { TitleEditor } from "@/components/title-editor";
import { OffersEditor } from "./_components/offers-editor";
import { Description } from "@/components/description";

interface EditPageProps {
    params: {
        gigId: string;
    };
}

const Edit = ({ params }: EditPageProps) => {
    const { user } = useUser(); // Use useUser to get user information
    const username = user?.username;

    const gig = useQuery(api.gig.get, { id: params.gigId as Id<"gigs"> });
    const published = useQuery(api.gig.isPublished, { id: params.gigId as Id<"gigs"> });
    const { mutate: remove, pending: removePending } = useApiMutation(api.gig.remove);
    const { mutate: publish, pending: publishPending } = useApiMutation(api.gig.publish);
    const { mutate: unpublish, pending: unpublishPending } = useApiMutation(api.gig.unpublish);
    const router = useRouter();

    const generateUploadUrl = useMutation(api.gigMedia.generateUploadUrl);
    const imageInput = useRef<HTMLInputElement>(null);
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const sendImage = useMutation(api.gigMedia.sendImage);

    if (!username) {
        throw new Error("Unauthorized");
    }

    if (gig === undefined || published === undefined) {
        return null;
    }

    if (gig === null) {
        return <Alert variant="danger">Not found</Alert>;
    }

    async function handleSendImage(event: FormEvent) {
        event.preventDefault();
        if (gig === undefined) return;

        const nonNullableGig = gig as Doc<"gigs">;
        const postUrl = await generateUploadUrl();

        await Promise.all(selectedImages.map(async (image) => {
            const result = await fetch(postUrl, {
                method: "POST",
                headers: { "Content-Type": image.type },
                body: image,
            });

            const json = await result.json();

            if (!result.ok) {
                throw new Error(`Upload failed: ${JSON.stringify(json)}`);
            }
            const { storageId } = json;
            await sendImage({ storageId, format: "image", gigId: nonNullableGig._id }).catch(() => {
                toast.error("Maximum 5 files reached.");
            });
        }));

        setSelectedImages([]);
        imageInput.current!.value = "";
    }

    const onPublish = async () => {
        if (!published) {
            publish({ id: params.gigId as Id<"gigs"> }).catch(() => {
                toast.error("Failed to publish. Please ensure there are at least 1 image, 3 offers, and a description.");
            });
        } else {
            unpublish({ id: params.gigId as Id<"gigs"> });
        }
    };

    const onDelete = async () => {
        remove({ id: params.gigId as Id<"gigs"> });
        router.back();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement; // Cast to HTMLInputElement
        if (input.files) {
            setSelectedImages(Array.from(input.files));
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-start mb-3">
                <Breadcrumb className="ps-5">
                    <Breadcrumb.Item>
                        <Link href="/" passHref>
                            Home
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link href={`/seller/${username}/manage-gigs`} passHref>
                            Manage Gigs
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Edit Gig</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <Container className="mt-4">
                <Row className="mb-4">
                    <Col className="text-end">
                        <Button variant="primary" disabled={publishPending || unpublishPending} onClick={onPublish}>
                            {published ? "Unpublish" : "Publish"}
                        </Button>
                        <Link href={`/${gig.seller.username}/${gig._id}`} passHref>
                            <Button variant="secondary" disabled={removePending} className="ms-2">
                                Preview
                            </Button>
                        </Link>
                        <Button variant="danger" disabled={removePending} onClick={onDelete} className="ms-2">
                            Delete
                        </Button>
                    </Col>
                </Row>

                <TitleEditor id={gig._id} title={gig.title} />

                <Row>
                    <Col md={8}>
                        <Images images={gig.images} title={gig.title} allowDelete={true} />
                    </Col>
                </Row>

                <Form onSubmit={handleSendImage} className="mb-4">
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Add up to 5 images:</Form.Label>
                        <Form.Control
                            type="file"
                            multiple
                            accept="image/*"
                            ref={imageInput}
                            onChange={handleImageChange}
                            disabled={selectedImages.length !== 0}
                        />
                    </Form.Group>
                    <Button type="submit" disabled={selectedImages.length === 0}>
                        Upload Image
                    </Button>
                </Form>

                <Row className="mb-4">
                    <Col>
                        <p className="text-muted">👨‍🎨 Creator: Ragul Dhoni</p>
                    </Col>
                </Row>

                <OffersEditor gigId={gig._id} />

                <h2 className="mt-4">About this gig</h2>

                <Description
                    initialContent={gig.description}
                    editable={true}
                    className="mt-4"
                    gigId={gig._id}
                />
            </Container>
        </div>
    );
};

export default Edit;
