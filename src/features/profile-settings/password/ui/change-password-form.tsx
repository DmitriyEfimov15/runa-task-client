"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { TChangePasswordForAuthorizedForm, TChangePasswordFormProps } from "../model/types";
import { PasswordInput } from "@/src/shared/ui/passwordInput";
import PasswordRequirements from "@/src/shared/ui/passwordRequirements";
import { cn } from "@/src/shared/lib/utils";
import { passwordRules } from "@/src/shared/lib/validators/passwordRules";
import FormError from "@/src/shared/ui/formError";
import { Button } from "@/src/shared/ui/button";

const ChangePasswordForm: FC<TChangePasswordFormProps> = ({ isLoading, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm<TChangePasswordForAuthorizedForm>({
    mode: "onChange",
  });

  const newPassword = watch("newPassword");
  const handleFormSubmit = async (data: TChangePasswordForAuthorizedForm) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form className="mt-2 flex flex-col gap-4 w-full" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col">
        <PasswordInput
          placeholder="Введите текущий пароль"
          {...register("currentPassword", {
            required: true,
          })}
          className={cn(errors.currentPassword && "border-red-500")}
        />
        {errors.currentPassword && (
          <FormError message={errors.currentPassword.message || "Это поле обязательно"} />
        )}
      </div>
      <div className="flex flex-col">
        <PasswordInput
          placeholder="Введите новый пароль"
          {...register("newPassword", passwordRules)}
          className={cn(errors.newPassword && "border-red-500")}
        />
        {errors.newPassword && (
          <FormError message={errors.newPassword.message || "Это поле обязательно"} />
        )}
        <PasswordRequirements value={newPassword} />
      </div>
      <div className="flex flex-col">
        <PasswordInput
          placeholder="Повторите новый пароль"
          {...register("confirmNewPassword", {
            required: true,
            validate: (value) => value === newPassword || "Пароли не совпадают",
          })}
          className={cn(errors.confirmNewPassword && "border-red-500")}
        />
        {errors.confirmNewPassword && (
          <FormError message={errors.confirmNewPassword.message || "Это поле обязательно"} />
        )}
      </div>
      <Button type="submit" loading={isLoading} disabled={!isValid} className="w-full mt-2">
        Сменить пароль
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
