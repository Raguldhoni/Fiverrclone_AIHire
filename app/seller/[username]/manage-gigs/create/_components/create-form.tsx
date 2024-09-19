"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "react-bootstrap"
import { toast } from "sonner"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { useState } from "react"
import { Doc, Id } from "@/convex/_generated/dataModel"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { useRouter } from "next/navigation"
import { Breadcrumb } from "react-bootstrap"; 

interface CreateFormProps {
    username: string;
}

const CreateFormSchema = z.object({
    title: z
        .string()
        .min(20, {
            message: "Title must be at least 20 characters.",
        })
        .max(100, {
            message: "Title must not be longer than 100 characters.",
        }),
    category: z
        .string({
            required_error: "Please select a category.",
        }),
    subcategoryId: z
        .string({
            required_error: "Please select a subcategory.",
        })
})

type CreateFormValues = z.infer<typeof CreateFormSchema>

const defaultValues: Partial<CreateFormValues> = {
    title: "",
}

export const CreateForm = ({ username }: CreateFormProps) => {
    const categories = useQuery(api.categories.get);
    const [subcategories, setSubcategories] = useState<Doc<"subcategories">[]>([]);
    const { mutate, pending } = useApiMutation(api.gig.create);
    const router = useRouter();

    const form = useForm<CreateFormValues>({
        resolver: zodResolver(CreateFormSchema),
        defaultValues,
        mode: "onChange",
    });

    function handleCategoryChange(categoryName: string) {
        if (categories === undefined) return;
        const selectedCategory = categories.find(category => category.name === categoryName);
        if (selectedCategory) {
            setSubcategories(selectedCategory.subcategories);
        }
    }

    function onSubmit(data: CreateFormValues) {
        mutate({
            title: data.title,
            description: "",
            subcategoryId: data.subcategoryId,
        })
            .then((gigId: Id<"gigs">) => {
                toast.info("Gig created successfully");
                router.push(`/seller/${username}/manage-gigs/edit/${gigId}`)
            })
            .catch(() => {
                toast.error("Failed to create gig")
            })
    }

    return (
        <div>
          {/* Breadcrumbs */}
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
                <Breadcrumb.Item active>Create Gig</Breadcrumb.Item>
            </Breadcrumb>
       
        <form onSubmit={form.handleSubmit(onSubmit)} className="mb-3 form">
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="I will do something amazing"
                    {...form.register("title")}
                />
                <div className="form-text">
                    Craft a keyword-rich Gig title to attract potential buyers.
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                    className="form-select"
                    {...form.register("category")}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                >
                    <option value="">Select a category</option>
                    {categories && categories.map((category) => (
                        <option key={category._id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <div className="form-text">
                    Select a category most relevant to your service.
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Subcategory</label>
                <select
                    className="form-select"
                    {...form.register("subcategoryId")}
                >
                    <option value="">Select a subcategory</option>
                    {subcategories.map((subcategory, index) => (
                        <option key={index} value={subcategory._id}>
                            {subcategory.name}
                        </option>
                    ))}
                </select>
                <div className="form-text">
                    Subcategory will help buyers pinpoint your service more narrowly.
                </div>
            </div>

            <Button type="submit" disabled={pending}>
                Save
            </Button>
        </form>
        </div>
    );
};
