'use client'

import { FC } from "react";
import ChangePasswordForm from "./change-password-form";
import { useChangePasswordForAuthorized } from "@/src/entities/auth/hooks/useChangePasswordForAuthorized";
import { TChangePasswordForAuthorizedForm } from "../model/types";

const ChangePassword: FC = () => {
  const changePassword = useChangePasswordForAuthorized();
  const onSubmit = async (data: TChangePasswordForAuthorizedForm) => {
    await changePassword.mutateAsync(data);
  };
  return <div>
    <h1 className="text-xl">Смена пароля</h1>
     <ChangePasswordForm isLoading={changePassword.isPending} onSubmit={onSubmit} />
  </div>;
};

export default ChangePassword;
