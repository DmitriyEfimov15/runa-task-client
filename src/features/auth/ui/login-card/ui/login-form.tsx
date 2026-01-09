"use client";

import { useGetProfile } from "@/src/entities/auth/hooks/useGetProfile";
import { useLoginUser } from "@/src/entities/auth/hooks/useLoginUser";
import { ILoginForm } from "@/src/entities/auth/types";
import { PRIVATE_ROUTES } from "@/src/shared/constants/routes/private/routes";
import { cn } from "@/src/shared/lib/utils";
import { Button } from "@/src/shared/ui/button";
import FormError from "@/src/shared/ui/formError";
import { Input } from "@/src/shared/ui/input";
import { PasswordInput } from "@/src/shared/ui/passwordInput";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginForm>();

  const loginMethod = useLoginUser();
  const router = useRouter();
  const { refetch } = useGetProfile();

  const onSubmit = async (data: ILoginForm) => {
    await loginMethod.mutateAsync(data);
    refetch();
    router.push(PRIVATE_ROUTES.HOME.path);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col gap-4">
      <div className="flex flex-col">
        <Input
          placeholder="Почта"
          type="email"
          {...register("email", { required: true })}
          className={cn(errors.email && "border-red-500")}
        />
        {errors.email && <FormError message={errors.email.message || "Ошибка в поле почта"} />}
      </div>
      <div className="flex flex-col">
        <PasswordInput
          placeholder="Пароль"
          type="password"
          {...register("password", { required: true })}
          className={cn(errors.password && "border-red-500")}
        />
        {errors.password && (
          <FormError message={errors.password.message || "Ошибка в поле пароль"} />
        )}
      </div>
      <Button
        disabled={!isValid}
        type="submit"
        loading={loginMethod.isPending}
        className="w-full mt-2"
      >
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
