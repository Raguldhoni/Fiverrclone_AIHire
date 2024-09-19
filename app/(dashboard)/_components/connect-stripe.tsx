"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useAction, useConvexAuth, useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const ConnectStripe = () => {
    const router = useRouter();

    const createStripe = useAction(api.users.createStripe);


    return <div>
        <Button
            onClick={async () => {
                const url = await createStripe({});
                if (url === null) return;
                router.push(url);
            }}
            variant={"secondary"}
            className="text-nowrap cmn--btn align-items-center bi bi-search fz-12"
        >
            Connect stripe
        </Button>
    </div>;
}
export default ConnectStripe;