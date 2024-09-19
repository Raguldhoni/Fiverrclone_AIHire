"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, Button, Col } from "react-bootstrap";

interface AddReviewProps {
    gigId: Id<"gigs">;
    sellerId: Id<"users">;
}

const formSchema = z.object({
    comment: z.string().min(5, {
        message: "Comment must be at least 5 characters.",
    }),
    service_as_described: z.number().min(1, {
        message: "Service as described must be at least 1.",
    }).max(5, {
        message: "Service as described must be at most 5.",
    }),
    recommend_to_a_friend: z.number().min(1, {
        message: "Recommend to a friend must be at least 1.",
    }).max(5, {
        message: "Recommend to a friend must be at most 5.",
    }),
    communication_level: z.number().min(1, {
        message: "Communication level must be at least 1.",
    }).max(5, {
        message: "Communication level must be at most 5.",
    }),
});

export const AddReview = ({
    gigId,
    sellerId
}: AddReviewProps) => {
    const {
        mutate,
        pending
    } = useApiMutation(api.reviews.add);

    // Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            comment: "",
            service_as_described: 5, // Set default value as numeric so it doesn't give weird 'expected number got string' error
            recommend_to_a_friend: 5,
            communication_level: 5,
        },
    })

    // Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        // You can now use these values for mutation.
        mutate({
            gigId: gigId,
            sellerId: sellerId,
            comment: values.comment,
            service_as_described: values.service_as_described, // Parse as integer
            recommend_to_a_friend: values.recommend_to_a_friend, // Parse as integer
            communication_level: values.communication_level, // Parse as integer
        })
            .then(() => {
                // Handle success
            })
            .catch((error) => {
                // Handle error
            });
        form.reset();
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-neutral-700 mb-4">Add review</h1>
            <Form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Comment Field */}
                <Form.Group controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your comment"
                        {...form.register("comment")} 
                        isInvalid={!!form.formState.errors.comment}
                    />
                    <Form.Control.Feedback type="invalid">
                        {form.formState.errors.comment?.message}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        Leave review comment.
                    </Form.Text>
                </Form.Group>

                {/* Service as Described Field */}
                <Form.Group controlId="service_as_described" className="mt-3">
                    <Form.Label>Service As Described</Form.Label>
                    <Form.Control 
                        type="number" 
                        min="1" 
                        max="5" 
                        placeholder="Rate from 1 to 5" 
                        {...form.register("service_as_described", { valueAsNumber: true })}
                        isInvalid={!!form.formState.errors.service_as_described}
                    />
                    <Form.Control.Feedback type="invalid">
                        {form.formState.errors.service_as_described?.message}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        Rate how accurately the service was described.
                    </Form.Text>
                </Form.Group>

                {/* Recommend to a Friend Field */}
                <Form.Group controlId="recommend_to_a_friend" className="mt-3">
                    <Form.Label>Recommend to a Friend</Form.Label>
                    <Form.Control 
                        type="number" 
                        min="1" 
                        max="5" 
                        placeholder="Rate from 1 to 5" 
                        {...form.register("recommend_to_a_friend", { valueAsNumber: true })}
                        isInvalid={!!form.formState.errors.recommend_to_a_friend}
                    />
                    <Form.Control.Feedback type="invalid">
                        {form.formState.errors.recommend_to_a_friend?.message}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        Would you recommend our service to a friend?
                    </Form.Text>
                </Form.Group>

                {/* Communication Level Field */}
                <Form.Group controlId="communication_level" className="mt-3">
                    <Form.Label>Communication Level</Form.Label>
                    <Form.Control 
                        type="number" 
                        min="1" 
                        max="5" 
                        placeholder="Rate from 1 to 5" 
                        {...form.register("communication_level", { valueAsNumber: true })}
                        isInvalid={!!form.formState.errors.communication_level}
                    />
                    <Form.Control.Feedback type="invalid">
                        {form.formState.errors.communication_level?.message}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        Rate the level of communication received.
                    </Form.Text>
                </Form.Group>

                <Button type="submit" className="mt-4" disabled={pending}>
                    Submit
                </Button>
            </Form>
        </>
    );
};
