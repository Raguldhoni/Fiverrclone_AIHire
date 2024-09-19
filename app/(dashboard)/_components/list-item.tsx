import { Doc } from "@/convex/_generated/dataModel";
import { useRouter } from "next/navigation";
import queryString from "query-string";

interface ListItemProps {
    title: string;
    subcategory: Doc<"subcategories">;
}

export const ListItem = ({ title, subcategory }: ListItemProps) => {
    const router = useRouter();

    const handleClick = () => {
        const url = queryString.stringifyUrl({
            url: "/",
            query: {
                filter: subcategory.name,
            },
        }, { skipEmptyString: true, skipNull: true });
        router.push(url);
    };

    return (
        <button
            className="btn btn-light d-block text-start w-100" // Bootstrap classes for button styling
            onClick={handleClick}
        >
            <div className="small text-muted fw-medium">{title}</div>
        </button>
    );
};
