import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/src/shared/ui/card";
import { FC } from "react";
import LoginForm from "./login-form";
import Link from "next/link";
import { AUTH_ROUTES } from "@/src/shared/constants/routes/auth/routes";

const LoginCard: FC = () => {
  return (
    <Card className="min-w-90">
      <CardHeader className="text-center">Вход</CardHeader>
      <CardContent className="min-w-full px-6">
        <LoginForm />
      </CardContent>
      <CardFooter className="min-w-full flex flex-col gap-2 px-4">
        <CardDescription className="flex flex-col gap-1 items-center">
          <Link href={AUTH_ROUTES.REGISTER} className="no-underline hover:underline">
            Еще нет аккаунта?
          </Link>
          <Link href={AUTH_ROUTES.SEND_REQUEST_TO_CHANGE_PASSWORD} className="no-underline hover:underline">
            Забыли пароль?
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
