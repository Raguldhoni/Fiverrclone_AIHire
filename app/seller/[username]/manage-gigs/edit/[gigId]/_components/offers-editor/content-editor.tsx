import React, { useState } from 'react';
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useAction } from "convex/react";
import { toast } from "sonner";
import { Form, Button } from 'react-bootstrap'; // Import Bootstrap components

interface ContentEditorProps {
    offer?: Doc<"offers">;
    gigId: Id<"gigs">;
    tier: "Basic" | "Standard" | "Premium";
}

export const ContentEditor = ({
    offer,
    gigId,
    tier
}: ContentEditorProps) => {
    const [title, setTitle] = useState<string>(offer?.title || "");
    const [description, setDescription] = useState<string>(offer?.description || "");
    const [price, setPrice] = useState<number>(offer?.price || 5);
    const [revisions, setRevisions] = useState<number>(offer?.revisions || 1);
    const [deliveryDays, setDeliveryDays] = useState<number>(offer?.delivery_days || 2);
    const addOffer = useAction(api.offers.add);

    const handleSave = async () => {
        try {
            await addOffer({
                gigId,
                title,
                description,
                tier,
                price,
                delivery_days: deliveryDays,
                revisions,
            });
            toast.success("Offer saved successfully");
        } catch (error) {
            console.error(error);
            toast.error("Failed to save offer");
        }
    }

    return (
        <Form className="space-y-4">
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="price">
                <Form.Label>Price (USD)</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                />
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="delivery">
                <Form.Label>Number of days for delivery</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter delivery days"
                    value={deliveryDays}
                    onChange={(e) => setDeliveryDays(parseInt(e.target.value))}
                />
            </Form.Group>

            <Form.Group controlId="revisions">
                <Form.Label>Number of revisions</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter revisions"
                    value={revisions}
                    onChange={(e) => setRevisions(parseInt(e.target.value))}
                />
            </Form.Group>

            <Button variant="primary" className="w-100" onClick={handleSave}>
                Save
            </Button>
        </Form>
    );
};

export default ContentEditor;
