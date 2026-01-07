"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { TRequestChangeEmailForm } from "../model/types";
import { Input } from "@/src/shared/ui/input";
import { FORM_CONSTANTS } from "@/src/shared/constants/form/form-constants";
import { FormField } from "@/src/shared/ui/form-field";
import { PasswordInput } from "@/src/shared/ui/passwordInput";
import { Button } from "@/src/shared/ui/button";
import { useRequestChangeEmail } from "@/src/entities/auth/hooks/useRequestChangeEmail";
import { useRouter } from "next/navigation";

const ChangeEmail: FC = () => {
    const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TRequestChangeEmailForm>({ mode: "onChange" });
  const requestChangeEmailMethod = useRequestChangeEmail()

  const onSubmit = async (data: TRequestChangeEmailForm) => {
    await requestChangeEmailMethod.mutateAsync(data)
    router.push('/confirm-change-email')
  };
  return (
    <div>
      <h1 className="text-xl">Смена почты</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-100 flex flex-col gap-2 my-2.5">
        <FormField error={errors.email}>
          <Input type="email" placeholder="Новая почта" {...register("email", { required: FORM_CONSTANTS.REQUIRED })} />
        </FormField>
        <FormField error={errors.currentPassword}>
          <PasswordInput placeholder="Текущий пароль" {...register("currentPassword", { required: FORM_CONSTANTS.REQUIRED })} />
        </FormField>
        <Button type="submit" className="w-44" disabled={!isValid}>Сменить</Button>
      </form>
    </div>
  );
};

export default ChangeEmail;
