"use client";
import {
  Carousel as BootstrapCarousel,
} from "react-bootstrap";  // You may need to install react-bootstrap and import Carousel components
import { ImageWithUrlType } from "@/types";
import Image from "next/image";
import { MoreHorizontal, Trash2 } from "lucide-react";
import { Actions } from "@/app/seller/[username]/manage-gigs/edit/[gigId]/_components/actions";
import { useState } from "react";
interface ImagesProps {
  images: ImageWithUrlType[];
  title: string;
  allowDelete: boolean;
  className?: string;
}
export const Images = ({
  images,
  title,
  allowDelete,
  className,
}: ImagesProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <BootstrapCarousel
      className={className || ""}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      controls={true}
    >
      {images.map((image) => (
        <BootstrapCarousel.Item key={image._id}>
           {allowDelete && (
              <Actions  sideOffset={10} storageId={image.storageId}>
                <Trash2 />
              </Actions>
            )}
          <div className="ratio ratio-16x9">
           
            <Image
              src={image.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png'}
              alt={title}
              fill
              className="rounded object-cover"
            />
          </div>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};