"use client";

import { Card, CardDescription, CardHeader } from "@/src/shared/ui/card";
import dynamic from "next/dynamic";
import { FC } from "react";

const SendRequestForm = dynamic(() => import("./send-request-form"), { ssr: false });

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
