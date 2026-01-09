"use client";

import Link from "next/link";
import { PRIVATE_ROUTES } from "../shared/constants/routes/private/routes";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-7xl font-bold text-primary">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-foreground">Страница не найдена</h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        Возможно, страница была удалена, переименована или вы перешли по неверной ссылке.
      </p>

      <Link
        href={PRIVATE_ROUTES.HOME.path}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
