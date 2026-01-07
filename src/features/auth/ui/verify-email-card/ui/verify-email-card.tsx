import { Card, CardContent, CardHeader } from "@/src/shared/ui/card";
import { FC } from "react";
import { VerifyEmailForm } from "./verify-email-form";

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
