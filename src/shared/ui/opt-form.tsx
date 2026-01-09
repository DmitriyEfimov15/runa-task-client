"use client";

import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/src/shared/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/src/shared/ui/input-otp";

export interface IOtpFormValues {
  code: string;
}

interface OtpFormProps {
  length?: number;
  loading?: boolean;
  onSubmit: (code: string) => Promise<void> | void;
  submitText?: string;
}

export const OtpForm: FC<OtpFormProps> = ({
  length = 6,
  loading,
  onSubmit,
  submitText = "Подтвердить",
}) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IOtpFormValues>({
    defaultValues: { code: "" },
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(({ code }) => onSubmit(code))} className="space-y-4">
      <Controller
        name="code"
        control={control}
        rules={{
          required: true,
          minLength: length,
        }}
        render={({ field }) => (
          <InputOTP maxLength={length} value={field.value} onChange={field.onChange}>
            <InputOTPGroup>
              {Array.from({ length }).map((_, index) => (
                <span key={index} className="flex items-center">
                  {index !== 0 && <InputOTPSeparator />}
                  <InputOTPSlot index={index} />
                </span>
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      <Button type="submit" loading={loading} disabled={!isValid} className="w-full">
        {submitText}
      </Button>
    </form>
  );
};
