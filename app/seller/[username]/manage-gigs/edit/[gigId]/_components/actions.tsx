"use client";
import { toast } from "sonner";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { Dropdown, Modal, Button } from 'react-bootstrap'; // Import Bootstrap components
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
interface ActionsProps {
    children: React.ReactNode;
    storageId: string;
}
export const Actions = ({
    children,
    storageId,
}: ActionsProps) => {
    const { mutate, pending } = useApiMutation(api.gigMedia.remove);
    const [showConfirmModal, setShowConfirmModal] = useState(false); // State for Modal
    const onDelete = () => {
        mutate({ storageId })
            .then(() => {
                toast.success("Board deleted");
                setShowConfirmModal(false);
            })
            .catch(() => toast.error("Failed to delete board"));
    };
    return (
        <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', zIndex: 10 }}>
            {/* Bootstrap Dropdown */}
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Actions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {/* <Dropdown.Item href="#">
                        <Pencil style={{ marginRight: '0.5rem' }} />
                        Edit
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        <Link2 style={{ marginRight: '0.5rem' }} />
                        Link
                    </Dropdown.Item> */}
                    <Dropdown.Item onClick={() => setShowConfirmModal(true)}>
                        <Trash2 style={{ marginRight: '0.5rem' }} />
                        Delete
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* Bootstrap Confirm Modal */}
            <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Board?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This will delete the board and all of its contents. Are you sure?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={onDelete} disabled={pending}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default Actions;