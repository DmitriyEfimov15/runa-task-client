"use client";

import { useChangePassword } from "@/src/entities/auth/hooks/useChangePassword";
import { IChangePasswordForm } from "@/src/entities/auth/types";
import { AUTH_ROUTES } from "@/src/shared/constants/routes/auth/routes";
import { cn } from "@/src/shared/lib/utils";
import { passwordRules } from "@/src/shared/lib/validators/passwordRules";
import { Button } from "@/src/shared/ui/button";
import FormError from "@/src/shared/ui/formError";
import { PasswordInput } from "@/src/shared/ui/passwordInput";
import PasswordRequirements from "@/src/shared/ui/passwordRequirements";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<IChangePasswordForm>({ mode: "onChange" });

  const changePasswordMethod = useChangePassword();
  const router = useRouter();
  const params = useParams();
  const newPassword = watch("newPassword");

  const onSubmit = async (data: IChangePasswordForm) => {
    if (params && typeof params.resetToken === "string") {
      await changePasswordMethod.mutateAsync({
        newPassword: data.newPassword,
        resetToken: params.resetToken,
      });
      router.push(AUTH_ROUTES.LOGIN);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col">
        <PasswordInput
          placeholder="Введите новый пароль"
          {...register("newPassword", passwordRules)}
          className={cn(errors.newPassword && "border-red-500")}
        />
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
      <Button
        type="submit"
        loading={changePasswordMethod.isPending}
        disabled={!isValid}
        className="w-full mt-2"
      >
        Сменить пароль
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
