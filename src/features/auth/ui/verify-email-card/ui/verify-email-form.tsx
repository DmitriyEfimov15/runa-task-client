"use client";

import { useParams, useRouter } from "next/navigation";
import { useVerifyEmail } from "@/src/entities/auth/hooks/useVerifyEmail";
import { useUserStore } from "@/src/entities/auth/store/user";
import { setUserSelector } from "@/src/entities/auth/store/selectors";
import { OtpForm } from "@/src/shared/ui/opt-form";
import { PRIVATE_ROUTES } from "@/src/shared/constants/routes/private/routes";
import { FC } from "react";

const VerifyEmailForm: FC = () => {
  const params = useParams();
  const verifyEmail = useVerifyEmail();
  const setUser = useUserStore(setUserSelector);
  const router = useRouter();

  const handleSubmit = async (code: string) => {
    if (!params?.activationLink || typeof params.activationLink !== "string") {
      return;
    }

    const response = await verifyEmail.mutateAsync({
      activationCode: Number(code),
      activationLink: params.activationLink,
    });

    if (response.user) {
      router.push(PRIVATE_ROUTES.HOME.path);
      setUser(response.user);
    }
  };

  return <OtpForm onSubmit={handleSubmit} loading={verifyEmail.isPending} />;
};

export default VerifyEmailForm;
