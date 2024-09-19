import { Doc, Id } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { ContentEditor } from "./content-editor";
import { useQuery } from "convex/react";
import { Tab, Nav, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

interface OffersEditorProps {
    gigId: Id<"gigs">;
}

export const OffersEditor = ({
    gigId
}: OffersEditorProps) => {
    const offers = useQuery(api.offers.get, { gigId });

    if (offers === undefined) return <div>Loading offers...</div>;

    const basicOffer = offers.find((offer) => offer.tier === "Basic");
    const standardOffer = offers.find((offer) => offer.tier === "Standard");
    const premiumOffer = offers.find((offer) => offer.tier === "Premium");

    return (
        <Tab.Container defaultActiveKey="Basic">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="Basic">Basic</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Standard">Standard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Premium">Premium</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="Basic">
                            <ContentEditor gigId={gigId} offer={basicOffer} tier="Basic" />
                        </Tab.Pane>
                        <Tab.Pane eventKey="Standard">
                            <ContentEditor gigId={gigId} offer={standardOffer} tier="Standard" />
                        </Tab.Pane>
                        <Tab.Pane eventKey="Premium">
                            <ContentEditor gigId={gigId} offer={premiumOffer} tier="Premium" />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default OffersEditor;
