'use client'

import { Card, CardContent, CardHeader } from "@/src/shared/ui/card";
import { FC } from "react";
import dynamic from "next/dynamic";

const ChangePasswordForm = dynamic(() => import("./change-password-form"), { ssr: false });

const ChangePasswordCard: FC = () => {
  return (
    <Card className="min-w-90">
      <CardHeader className="text-center">Смена пароля</CardHeader>
      <CardContent className="min-w-full px-6">
        <ChangePasswordForm />
      </CardContent>
    </Card>
  );
};

export default ChangePasswordCard;
