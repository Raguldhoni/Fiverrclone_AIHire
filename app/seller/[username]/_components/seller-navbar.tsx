"use client";
import * as React from "react";
import Link from "next/link";
import { Button, Nav, Navbar, Dropdown, Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"; // Import Bootstrap components
import { MessageCircle } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import "../../../(dashboard)/_components/components1/shared/editor/style.css";
const components: { title: string; href: string; description: string }[] = [
    {
        title: "Orders",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Gigs",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Profile",
        href: "/profile",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    }
];
export const SellerNavbar = () => {
    const currentUser = useQuery(api.users.getCurrentUser);
    const router = useRouter();
    const onClickInbox = () => {
        router.push("/inbox");
    }
    return (
        <Navbar bg="light" expand="lg" className="mb-4 custom-navbar">
            <Container>
                <Navbar.Brand href="/">Brand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/docs">Dashboard</Nav.Link>
                        <Dropdown className="me-4">
                            <Dropdown.Toggle variant="secondary"id="dropdown-basic">
                                My Business
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/">
                                    <div className="d-flex flex-column">
                                        <strong>Orders</strong>
                                        <span>Keep track of your orders and deliveries. Manage everything at one place.</span>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href={`/seller/${currentUser?.username}/manage-gigs`}>
                                    Manage, create and edit your gigs here.
                                </Dropdown.Item>
                                <Dropdown.Item href={`/seller/${currentUser?.username}/profile`}>
                                    Manage and edit your profile. Present yourself to the world.
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="me-4">
                            <Dropdown.Toggle variant="secondary">
                                Advertising & Growth
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {components.map((component) => (
                                    <Dropdown.Item key={component.title} href={component.href}>
                                        <strong>{component.title}</strong>
                                        <p>{component.description}</p>
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="/docs">Analytics</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Button variant="outline-secondary" onClick={onClickInbox}>
                            <MessageCircle />
                        </Button>
                        {currentUser && (
                            <Button variant="outline-secondary" className="ms-2" onClick={() => router.push(`/`)}>
                                Switch To Buying
                            </Button>
                        )}
                        {/* <UserButton className="ms-2" /> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};