"use client";

import { Card, CardContent, CardHeader } from "@/src/shared/ui/card";
import dynamic from "next/dynamic";
import { FC } from "react";

const VerifyEmailForm = dynamic(() => import("./verify-email-form"), { ssr: false });

const VerifyEmailCard: FC = () => {
  return (
    <Card className="min-w-90">
      <CardHeader className="text-center">Подтверждение почты</CardHeader>
      <CardContent className="w-full flex flex-col items-center gap-2">
        Введите код
        <VerifyEmailForm />
      </CardContent>
    </Card>
  );
};

export default VerifyEmailCard;
