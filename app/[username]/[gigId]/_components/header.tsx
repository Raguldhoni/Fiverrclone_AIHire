import { Button } from "@/components/ui/button";
import { Clipboard, Home, Save, Star } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import queryString from "query-string";

interface HeaderProps {
  category: string;
  subcategory: string;
  editUrl: string;
  ownerId: string;
}

export const Header = ({
  category,
  subcategory,
  editUrl,
  ownerId,
}: HeaderProps) => {
  const currentUser = useQuery(api.users.getCurrentUser, {});
  const router = useRouter();

  const handleSubcategoryClick = () => {
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          filter: subcategory,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  };

  return (
    <div
      className="
        d-flex 
        align-items-center
        w-100
        mb-3
        flex-wrap 
        gap-2
      "
    >
      {/* Home icon */}
      <Link href="/" className="text-dark d-flex align-items-center">
        <Home className="me-2" />
      </Link>

      <span className="text-muted">/</span>

      {/* Category text */}
      <span className="text-dark">{category}</span>

      <span className="text-muted">/</span>

      {/* Subcategory text with a click event */}
      <span
        className="fw-bold text-primary cursor-pointer"
        onClick={handleSubcategoryClick}
      >
        {subcategory}
      </span>

      {/* Edit gig button, visible only for the gig owner */}
      {currentUser?._id === ownerId && (
        <Button variant="secondary" className="ms-auto">
          <Link href={editUrl} className="text-white text-decoration-none">
            Edit gig
          </Link>
        </Button>
      )}
    </div>
  );
};
