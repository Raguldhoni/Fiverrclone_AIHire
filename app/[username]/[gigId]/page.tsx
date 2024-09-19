"use client";

import { useQuery } from "convex/react";
import { Header } from "./_components/header";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Offers } from "./_components/offers";
import { Seller } from "./_components/seller";
import { Images } from "../../../components/images";
import { Description } from "@/components/description";
import { Info } from "lucide-react";
import { SellerDetails } from "./_components/seller-details";
import { Reviews } from "../_components/reviews/reviews";
import { AddReview } from "../_components/reviews/add-review";

interface PageProps {
  params: {
    username: string;
    gigId: string;
  };
}

const GigPage = ({ params }: PageProps) => {
  const gig = useQuery(api.gig.get, { id: params.gigId as Id<"gigs"> });
  const categoryAndSubcategory = useQuery(api.gig.getCategoryAndSubcategory, {
    gigId: params.gigId as Id<"gigs">,
  });
  const offers = useQuery(api.offers.get, {
    gigId: params.gigId as Id<"gigs">,
  });
  const reviews = useQuery(api.reviews.getByGig, {
    gigId: params.gigId as Id<"gigs">,
  });
  const reviewsFull = useQuery(api.reviews.getFullByGig, {
    gigId: params.gigId as Id<"gigs">,
  });

  if (
    gig === undefined ||
    reviews === undefined ||
    reviewsFull === undefined ||
    categoryAndSubcategory === undefined ||
    offers === undefined
  ) {
    return <div>Loading...</div>;
  }

  if (gig === null || categoryAndSubcategory === null || offers === null) {
    return <div>Not found</div>;
  }

  if (gig.published === false) {
    return <div>This gig is not published</div>;
  }

  const editUrl = `/seller/${gig.seller.username}/manage-gigs/edit/${gig._id}`;

  return (
    <div className="container mt-5">
      <div className="row gx-5">
        {/* Main Content Column */}
        <div className="col-lg-8 col-md-12 mb-4">
          <Header
            {...categoryAndSubcategory}
            editUrl={editUrl}
            ownerId={gig.seller._id}
          />

          {/* Gig Title */}
          <h1 className="display-6 text-dark break-words mb-4">
            {gig.title}
          </h1>

          {/* Seller Information */}
          <Seller seller={gig.seller} reviews={reviews} />

          {/* Gig Images */}
          <Images images={gig.images} title={gig.title} allowDelete={false} />

          {/* Gig Description */}
          <Description
            editable={false}
            initialContent={gig.description}
            gigId={gig._id}
          />

          {/* Delivery Preferences Section */}
          <div className="border border-secondary p-4 rounded mb-4">
            <div className="d-flex align-items-center mb-2">
              <Info className="me-2" />
              <h4 className="m-0">Delivery Preferences</h4>
            </div>
            <p className="mb-0">
              Please communicate any preferences or concerns regarding the
              utilization of AI tools in the fulfillment and/or delivery of your
              request.
            </p>
          </div>

          {/* Seller Details */}
          <SellerDetails
            seller={gig.seller}
            reviews={reviews}
            lastFulFilmentTime={gig.lastFulfilment?.fulfilmentTime}
            languages={gig.seller.languages}
          />

          {/* Reviews Section */}
          <div className="mt-4">
            <h4 className="mb-3">Customer Reviews</h4>
            <Reviews reviews={reviewsFull} />
          </div>

          {/* Add Review Section */}
          <div className="mt-4">
            <h5>Add Your Review</h5>
            <AddReview gigId={gig._id} sellerId={gig.seller._id} />
          </div>
        </div>

        {/* Sidebar for Offers */}
        <div className="col-lg-4 col-md-12">
          <Offers
            offers={offers}
            sellerId={gig.seller._id}
            editUrl={editUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default GigPage;
