"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "react-bootstrap"; // Bootstrap button
import { GigList } from "./_components/gig-list";
import { GigData, columns } from "./_components/columns";
import { Loading } from "@/components/auth/loading";
import { DataTable } from "./_components/data-table";
import { useEffect } from "react";
import { Container, Row, Col,Breadcrumb } from "react-bootstrap";  

const ManageGigs = () => {
    const currentUser = useQuery(api.users.getCurrentUser);
    const gigs = useQuery(api.gigs.getGigsWithOrderAmountAndRevenue);

    if (gigs === undefined || currentUser === undefined) {
        return <Loading />;
    }

    if (gigs === null || currentUser === null) {
        return <div>Not found</div>;
    }

    const data: GigData[] = gigs.map((gig) => ({
        id: gig._id,
        title: gig.title,
        image:
            gig.ImageUrl ||
            "https://images.unsplash.com/photo-1559311648-d46f5d8593d6?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        clicks: gig.clicks,
        orders: gig.orderAmount,
        revenue: gig.totalRevenue,
        username: currentUser.username || "" // Fallback to an empty string if undefined
    }));
    

    return (
        
        <Container>
             <Breadcrumb>
                <Breadcrumb.Item>
                    <Link href="/" passHref>
                        Home
                    </Link>
                </Breadcrumb.Item>
                
                <Breadcrumb.Item active>Manage Gigs</Breadcrumb.Item>
            </Breadcrumb>

            <Row className="align-items-center mb-4">
                <Col xs={8}>
                    <h1 className="display-4">Gigs</h1>
                    <p className="text-muted">
                        Manage, create, and edit your gigs and offers.
                    </p>
                </Col>
                <Col xs={4} className="text-end">
                    <Button variant="primary">
                        <Link
                            href={`/seller/${currentUser?.username}/manage-gigs/create`}
                            passHref
                            legacyBehavior
                        >
                            <a className="text-white text-decoration-none">Create</a>
                        </Link>
                    </Button>
                </Col>
            </Row>
            <hr />
            <DataTable columns={columns} data={data} />
        </Container>
    );
};

export default ManageGigs;
