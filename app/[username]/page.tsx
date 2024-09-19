"use client";

import { useQuery } from "convex/react";
import { ProfileCard } from "./_components/profile-card";
import { api } from "@/convex/_generated/api";
import { MyGigsList } from "./_components/my-gigs-list";
import { ReviewsStats } from "./_components/reviews/reviews-stats";
import { Reviews } from "./_components/reviews/reviews";

interface SellerPageProps {
  params: {
    username: string;
    gigId: string;
  };
}

const SellerPage = ({ params }: SellerPageProps) => {
  const seller = useQuery(api.users.getUserByUsername, { username: params.username });
  const skills = useQuery(api.skills.getByUser, { username: params.username });
  const gigs = useQuery(api.gigs.getBySellerName, { sellerName: params.username });
  const reviews = useQuery(api.reviews.getBySellerName, { sellerName: params.username });

  if (seller === undefined || reviews === undefined || skills === undefined || gigs === undefined) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (seller === null || gigs === null) {
    return <div className="text-center mt-5">Not found</div>;
  }

  const skillsString = skills ? skills.map((skill) => skill.skill).join(", ") : "";

  return (
    <div className="container my-5">
      {/* Profile and About Section */}
      <div className="row gx-5">
        {/* Left Column - Profile, About Me, and Skills */}
        <div className="col-lg-4 col-md-12 mb-4">
          {/* Profile Card */}
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">
              <ProfileCard seller={seller} reviews={reviews} />
            </div>
          </div>

          {/* About Me Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title fw-bold text-primary">About Me</h5>
              <p className="card-text text-muted">{seller.about}</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title fw-bold text-primary">Skills</h5>
              <p className="card-text text-muted">{skillsString}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Gigs, Reviews Stats, and Reviews */}
        <div className="col-lg-8 col-md-12">
          {/* My Gigs Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title fw-bold text-primary">My Gigs</h5>
              <MyGigsList sellerUsername={params.username} />
            </div>
          </div>

          {/* Review Stats Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title fw-bold text-primary">Review Statistics</h5>
              <ReviewsStats reviews={reviews} />
            </div>
          </div>

          {/* Reviews Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title fw-bold text-primary">Reviews</h5>
              <Reviews reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
