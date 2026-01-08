"use client";

import { useChangeEmail } from "@/src/entities/auth/hooks/useChangeEmail";
import { useGetProfile } from "@/src/entities/auth/hooks/useGetProfile";
import { PRIVATE_ROUTES } from "@/src/shared/constants/routes/private/routes";
import { OtpForm } from "@/src/shared/ui/opt-form";
import { useRouter } from "next/navigation";
import { FC } from "react";

const ConfirmChangeEmailForm: FC = () => {
  const changeEmail = useChangeEmail();
  const { refetch } = useGetProfile();
  const router = useRouter();

  const handleSubmit = async (code: string) => {
    await changeEmail.mutateAsync({ code });
    router.push(PRIVATE_ROUTES.HOME.path);
    refetch();
  };

  return <OtpForm onSubmit={handleSubmit} loading={changeEmail.isPending} />;
};

export default ConfirmChangeEmailForm;
