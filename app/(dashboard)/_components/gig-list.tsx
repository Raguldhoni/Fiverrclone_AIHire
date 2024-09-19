"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";
import { GigCard } from "./gig-card";
import { Loading } from "@/components/auth/loading";
import { useEffect, useState } from "react";
import { FullGigType } from "@/types";

interface GigListProps {
    query: {
        search?: string;
        favorites?: string;
        filter?: string;
    };
};

export const GigList = ({
    query,
}: GigListProps) => {
    const gigs: FullGigType[] | undefined = useQuery(api.gigs.get, { search: query.search, favorites: query.favorites, filter: query.filter });
    const [gigsWithFavorite, setGigsWithFavorite] = useState<FullGigType[] | undefined>(undefined);

    // Filter for favorites if query.favorites is true
    useEffect(() => {
        if (query.favorites) {
            const favoriteGigs = gigs?.filter((gig) => gig.favorited);
            setGigsWithFavorite(favoriteGigs);
        } else {
            setGigsWithFavorite(gigs);
        }
    }, [query.favorites, gigs]);

    if (gigs === undefined) {
        return (
            <div>Loading gigs...</div>
        )
    }

    if (!gigs?.length && query.search) {
        return (
            <EmptySearch />
        )
    }

    if (!gigsWithFavorite?.length && query.favorites) {
        return (
            <EmptyFavorites />
        )
    }

    return (
        <div className="container mt-4">
            <div className="row g-3">
                {gigsWithFavorite?.map((gig) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={gig._id}>
                        <GigCard
                            id={gig._id}
                            sellerId={gig.sellerId}
                            title={gig.title}
                            description={gig.description}
                            createdAt={gig._creationTime}
                            isFavorite={gig.favorited}
                            storageId={gig.storageId}
                            offer={gig.offer}
                            reviews={gig.reviews}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
