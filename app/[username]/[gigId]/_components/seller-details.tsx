import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Doc } from "@/convex/_generated/dataModel";
import { UserWithCountryType } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { format } = require("date-fns");

interface SellerProps {
  seller: UserWithCountryType;
  reviews: Doc<"reviews">[];
  lastFulFilmentTime: number | undefined;
  languages: Doc<"languages">[];
}

export const SellerDetails = ({
  seller,
  reviews,
  lastFulFilmentTime,
  languages,
}: SellerProps) => {
  const router = useRouter();
  const averageReview =
    reviews.reduce((acc, review) => {
      return (
        acc +
        review.communication_level +
        review.recommend_to_a_friend +
        review.service_as_described
      );
    }, 0) /
    (reviews.length * 3);

  const joinedDate = format(new Date(seller._creationTime), "MMM yy");

  let timeAgo = undefined;
  if (lastFulFilmentTime !== undefined) {
    timeAgo = formatDistanceToNow(new Date(lastFulFilmentTime), {
      addSuffix: true,
    });
  }

  const languagesString = languages.map((language) => language.language).join(", ");

  const handleContactClick = () => {
    router.push(`/inbox/${seller.username}`);
  };

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex gap-4">
        <Link href={`/${seller.username}`}>
          <Avatar className="rounded-circle" style={{ width: "80px", height: "80px" }}>
            <AvatarImage
              src={seller.profileImageUrl || "https://github.com/shadcn.png"}
            />
            <AvatarFallback>{seller.username.charAt(0)}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="d-flex flex-column gap-2">
          <Link href={`/${seller.username}`}>
            <p className="fw-bold fs-5">{seller.fullName}</p>
          </Link>
          <p className="fs-6">{seller.title}</p>
          <div className="d-flex gap-4">
            <div className="d-flex align-items-center gap-2">
              <Star className="me-1" style={{ width: "20px", height: "20px" }} />
              <p className="fw-semibold mb-0">{reviews.length}</p>
              <div className="d-flex">
                (<p className="text-decoration-underline mb-0">{averageReview.toFixed(2) || 0}</p>)
              </div>
            </div>
            <div className="bg-warning text-danger fw-semibold p-1">{seller.customTag}</div>
          </div>
        </div>
      </div>

      <Button variant={"outline"} onClick={handleContactClick}>
        Contact me
      </Button>

      <div className="border p-4 rounded-3 bg-light">
        <div className="row">
          <div className="col-md-6">
            <p className="fw-semibold mb-1">From</p>
            <p>{seller.country.countryName}</p>
          </div>
          <div className="col-md-6">
            <p className="fw-semibold mb-1">Joined</p>
            <p>{joinedDate}</p>
          </div>
          {timeAgo !== undefined && (
            <div className="col-md-6">
              <p className="fw-semibold mb-1">Last delivery</p>
              <p>{timeAgo}</p>
            </div>
          )}
          {languages.length > 0 && (
            <div className="col-md-6">
              <p className="fw-semibold mb-1">Languages</p>
              <p>{languagesString}</p>
            </div>
          )}
        </div>
        <Separator />
        <p>{seller.about}</p>
      </div>
    </div>
  );
};
