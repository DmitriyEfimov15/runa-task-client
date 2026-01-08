"use client";

import { FC, useEffect } from "react";
import { TProvidersProps } from "./types";
import { useGetProfile } from "@/src/entities/auth/hooks/useGetProfile";

const ProfileProvider: FC<TProvidersProps> = ({ children }) => {
  const { refetch } = useGetProfile();

  useEffect(() => {
    refetch();
  }, []);

  return <>{children}</>;
};

export default ProfileProvider;
