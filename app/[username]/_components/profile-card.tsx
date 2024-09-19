import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming these are custom components
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { MapPin, MessageCircle, Star } from "lucide-react"; // Assuming you still want to use these icons

interface ProfileCardProps {
    seller: Doc<"users">;
    reviews: Doc<"reviews">[];
}

export const ProfileCard = ({
    seller,
    reviews
}: ProfileCardProps) => {
    const languages = useQuery(api.users.getLanguagesByUsername, { username: seller.username });
    const country = useQuery(api.users.getCountryByUsername, { username: seller.username });

    if (languages === undefined || country === undefined) {
        return <div>Loading...</div>
    }

    const languagesString = languages.map((language) => language.language).join(", ");

    const averageReview = reviews.reduce((acc, review) => {
        return acc + review.communication_level + review.recommend_to_a_friend + review.service_as_described;
    }, 0) / reviews.length;

    return (
        <div className="d-flex gap-3">
            <Avatar className="rounded-circle" style={{ width: "9rem", height: "9rem" }}>
                <AvatarImage src={seller.profileImageUrl || "https://github.com/shadcn.png"} />
                <AvatarFallback>{seller.username.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="d-flex flex-column justify-content-between" style={{ width: "300px" }}>
                <div className="d-flex align-items-center mb-2">
                    <p className="fw-bold fs-4 mb-0">{seller.fullName}</p>
                    <p className="text-muted ms-2 fs-6 mb-0">@{seller.username}</p>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <Star className="me-1" style={{ width: "1.25rem", height: "1.25rem" }} />
                    <p className="fw-semibold mb-0">{reviews.length}</p>
                    <p className="ms-1 mb-0 text-decoration-underline">({averageReview || 0})</p>
                    <div className="badge bg-warning text-dark ms-3">{seller.customTag}</div>
                </div>
                <p>{seller.title}</p>
                <div className="d-flex text-muted fw-semibold align-items-center">
                    <div className="d-flex align-items-center me-3">
                        <MessageCircle style={{ width: "1.25rem", height: "1.25rem" }} className="me-1" />
                        <p className="mb-0">{languagesString}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <MapPin style={{ width: "1.25rem", height: "1.25rem" }} className="me-1" />
                        <p className="mb-0">{country.countryName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
``
