import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";

interface ConvexImageProps {
    storageId?: string;
    title: string;
}

export const ConvexImage = ({
    storageId,
    title
}: ConvexImageProps) => {
    const imageUrl = useQuery(api.gigMedia.getMediaUrl, { storageId: storageId as Id<"_storage"> });

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ maxWidth: '300px', margin: '0 auto' }}>
            <Image
                src={imageUrl || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png'}
                alt={title}
                className="img-fluid rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
                width={300} // Reduce width here to make it smaller
                height={100} // Reduce height to control aspect ratio
            />
        </div>
    );
};
