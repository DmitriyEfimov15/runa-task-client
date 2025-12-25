'use client';

import { FC } from "react";
import { TProvidersProps } from "./types";
import { useGetProfile } from "@/src/entities/auth/hooks/useGetProfile";

const ProfileProvider: FC<TProvidersProps> = ({children}) => {
    useGetProfile()

    return <>{children}</>;
}

export default ProfileProvider;