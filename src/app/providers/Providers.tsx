"use client";

import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { TProvidersProps } from "./types";
import ProfileProvider from "./profile-provider";

const queryClient = new QueryClient();

const Providers: FC<TProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileProvider>
        {children}
      </ProfileProvider>
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
};

export default Providers;
