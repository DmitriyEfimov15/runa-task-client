import { Card, CardDescription, CardHeader } from "@/src/shared/ui/card";
import { FC } from "react";
import SendRequestForm from "./send-request-form";

const SendRequestCard: FC = () => {
  return (
    <Card className="min-w-90">
      <CardHeader className="text-center">Запрос на смена пароля</CardHeader>
      <CardDescription className="w-full flex flex-col items-center gap-2">
        <p className="mx-auto w-[60%] text-center">
          Введите вашу почту, чтобы получить ссылку для смены пароля
        </p>
        <div className="px-10 w-full">
          <SendRequestForm />
        </div>
      </CardDescription>
    </Card>
  );
};

export default SendRequestCard;
