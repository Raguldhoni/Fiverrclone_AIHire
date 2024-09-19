import React from 'react';
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap'; // Import Bootstrap components
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { Id } from '@/convex/_generated/dataModel';

interface GigActionsCellProps {
    gigId: Id<"gigs">;
    username: string;
}

const GigActionsCell = ({ gigId, username }: GigActionsCellProps) => {
    const {
        mutate: remove,
        pending: removePending,
    } = useApiMutation(api.gig.remove);

    const handleDelete = () => {
        console.log("Delete", gigId)
        remove({ id: gigId });
    }

    return (
        <Dropdown as={ButtonGroup}>
            <Button variant="outline-secondary">
                <Link href={`/${username}/${gigId}`}>Preview</Link>
            </Button>

            <Dropdown.Toggle split variant="outline-secondary" id="dropdown-split-basic">
                <MoreHorizontal className="h-4 w-4" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
                <Dropdown.Item as="button">
                    <Link href={`/seller/${username}/manage-gigs/edit/${gigId}`}>Edit</Link>
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={handleDelete}>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default GigActionsCell;
