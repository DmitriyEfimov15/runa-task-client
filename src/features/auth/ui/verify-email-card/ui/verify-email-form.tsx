"use client";

import { useVerifyEmail } from "@/src/entities/auth/hooks/useVerifyEmail";
import { setUserSelector } from "@/src/entities/auth/store/selectors";
import { useUserStore } from "@/src/entities/auth/store/user";
import { IVerifyEmailForm } from "@/src/entities/auth/types";
import { Button } from "@/src/shared/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/src/shared/ui/input-otp";
import { useParams } from "next/navigation";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

const VerifyEmailForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<IVerifyEmailForm>({
    defaultValues: {
      activationCode: "",
    },
    mode: "onChange",
  });
  const params = useParams();
  const verifyEmail = useVerifyEmail();

  const setUser = useUserStore(setUserSelector);

  const onSubmit = async (data: IVerifyEmailForm) => {
    if (params?.activationLink && typeof params?.activationLink === "string") {
      const repsponse = await verifyEmail.mutateAsync({
        activationCode: Number(data.activationCode),
        activationLink: params.activationLink,
      });

      setUser(repsponse.user);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="activationCode"
        control={control}
        rules={{
          required: true,
          minLength: 6,
        }}
        render={({ field }) => (
          <InputOTP maxLength={6} value={field.value} onChange={field.onChange}>
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, index) => (
                <>
                  {index !== 0 && <InputOTPSeparator />}
                  <InputOTPSlot key={index} index={index} />
                </>
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      <Button type="submit" disabled={!isValid} className="mt-5 w-full cursor-pointer">
        Подтвердить
      </Button>
    </form>
  );
};

export default VerifyEmailForm;
