"use client";

import { useSendRequest } from "@/src/entities/auth/hooks/useSendRequest";
import { ISendRequestForm } from "@/src/entities/auth/types";
import { cn } from "@/src/shared/lib/utils";
import { Button } from "@/src/shared/ui/button";
import FormError from "@/src/shared/ui/formError";
import { Input } from "@/src/shared/ui/input";
import { FC } from "react";
import { useForm } from "react-hook-form";

const SendRequestForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ISendRequestForm>();
  const sendRequestMethod = useSendRequest();

  const onSubmit = async (data: ISendRequestForm) => {
    sendRequestMethod.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full mx-auto">
      <div className="flex flex-col">
        <Input
          type="email"
          placeholder="Введите ваш email"
          {...register("email", { required: true })}
          className={cn(errors.email && "border-red-500")}
        />
        {errors.email && <FormError message={errors.email.message || "Это поле обязательное"} />}
      </div>
      <Button
        loading={sendRequestMethod.isPending}
        disabled={!isValid}
        className="mt-5 w-full cursor-pointer"
      >
        Сбросить пароль
      </Button>
    </form>
  );
};

export default SendRequestForm;
