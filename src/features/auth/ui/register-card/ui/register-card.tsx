import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/src/shared/ui/card";
import Link from "next/link";
import { FC } from "react";
import RegisterForm from "./register-form";
import { AUTH_ROUTES } from "@/src/shared/constants/routes/auth/routes";

const RegisterCard: FC = () => {
  return (
    <Card className="min-w-90">
      <CardHeader className="text-center">Регистрация</CardHeader>
      <CardContent className="min-w-full px-6">
        <RegisterForm />
      </CardContent>
      <CardFooter className="min-w-full flex flex-col gap-2 px-4">
        <CardDescription>
          <Link href={AUTH_ROUTES.LOGIN} className="no-underline hover:underline">
            Уже есть аккаунт?
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default RegisterCard;
