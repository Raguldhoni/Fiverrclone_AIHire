import { Doc, Id } from "@/convex/_generated/dataModel";
import { Content } from "./content";
import { Tab, Nav } from "react-bootstrap";

interface OffersProps {
  offers: Doc<"offers">[];
  sellerId: Id<"users">;
  editUrl: string;
}

export const Offers = ({
  offers,
  sellerId,
  editUrl,
}: OffersProps) => {
  return (
    <div>
      {offers.length > 0 && (
        <Tab.Container defaultActiveKey={offers[0]._id}>
          <Nav variant="pills" className="w-100 flex-row mb-3">
            {offers.map((offer) => (
              <Nav.Item key={offer._id} className="w-100">
                <Nav.Link eventKey={offer._id} className="text-center w-100">
                  {offer.tier}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content>
            {offers.map((offer) => (
              <Tab.Pane key={offer._id} eventKey={offer._id}>
                <div className="card bg-light">
                  <div className="card-body">
                    <Content offer={offer} sellerId={sellerId} editUrl={editUrl} />
                  </div>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      )}
    </div>
  );
};
