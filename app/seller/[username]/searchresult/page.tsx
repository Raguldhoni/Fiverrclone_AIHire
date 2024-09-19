"use client";

import { useConvexAuth, useMutation } from "convex/react";
import { GigList } from "../../../(dashboard)/_components/gig-list";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Breadcrumb, Navbar } from "react-bootstrap";
import Banner from "@/app/(dashboard)/_components/components1/home-1/Banner";
import Link from "next/link";


interface DashboardProps {
    searchParams: {
        search?: string;
        favorites?: string;
        filter?: string;
    };
};

const Search = ({
    searchParams
}: DashboardProps) => {
    // const { user } = useUser();
    // const store = useMutation(api.users.store);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);
    // useEffect(() => {
    //     const storeUser = async () => {
          
    //           await store({});
    //     }  
    //     storeUser();
    //   }, [store, user]);
    return (
        <>
        <Breadcrumb className="ps-5">
                <Breadcrumb.Item>
                    <Link href="/" passHref>
                        Home
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Search Result</Breadcrumb.Item>
            </Breadcrumb>
            <GigList
            query={searchParams} /></>
    );
};

export default Search;