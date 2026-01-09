"use client";

import dynamic from "next/dynamic";
import { FC } from "react";

const ConfirmChangeEmailForm = dynamic(
  () => import("@/src/features/confirm-change-email/ui/confrim-change-email"),
  { ssr: false },
);

const ConfirmChangeEmail: FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col gap-5">
        <h1 className="text-center">Подтверждение смены почты</h1>
        <ConfirmChangeEmailForm />
      </div>
    </div>
  );
};

export default ConfirmChangeEmail;
