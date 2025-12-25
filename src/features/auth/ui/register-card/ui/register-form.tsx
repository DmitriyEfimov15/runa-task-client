"use client";

import { Input } from "@/src/shared/ui/input";
import { PasswordInput } from "@/src/shared/ui/passwordInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { FC } from "react";
import { Button } from "@/src/shared/ui/button";
import FormError from "@/src/shared/ui/formError";
import { cn } from "@/src/shared/lib/utils";
import { useRegister } from "@/src/entities/auth/hooks/useRegister";
import { useRouter } from "next/navigation";
import { IRegisterForm } from "@/src/entities/auth/types";
import { AUTH_ROUTES } from "@/src/shared/constants/routes/auth/routes";
import { passwordRules } from "@/src/shared/lib/validators/passwordRules";
import PasswordRequirements from "@/src/shared/ui/passwordRequirements";

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IRegisterForm>({ mode: "onChange" });
  const registerMethod = useRegister();
  const router = useRouter();

  const password = watch("password");

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    const { activationLink } = await registerMethod.mutateAsync(data);
    router.push(`${AUTH_ROUTES.VERIFY_EMAIL}/${activationLink}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col gap-4">
      <div className="flex flex-col">
        <Input
          type="email"
          placeholder="Почта"
          {...register("email", { required: true })}
          className={cn(errors.email && "border-red-500")}
        />
        {errors.email && <FormError message="Это поле обязательно" />}
      </div>
      <div className="flex flex-col">
        <PasswordInput
          placeholder="Пароль"
          type="password"
          {...register("password", passwordRules)}
          className={cn(errors.password && "border-red-500")}
        />
        <PasswordRequirements value={password} />
      </div>
      <div className="flex flex-col">
        <PasswordInput
          placeholder="Повторите пароль"
          type="password"
          {...register("confirmPassword", {
            required: "Это поле обязательно",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
          className={cn(errors.confirmPassword && "border-red-500")}
        />
        {errors.confirmPassword && <FormError message={errors.confirmPassword.message ?? ''} />}
      </div>
      <Button
        loading={registerMethod.isPending}
        type="submit"
        className="mt-5 w-full cursor-pointer"
        disabled={!isValid}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default RegisterForm;
