"use server";

import * as jose from "jose";
import { ITokenInside } from "../../../types";
import { ACCESS_SECRET_KEY } from "@/src/shared/constants/server";

export async function jwtVerifyServer(accessToken: string) {
  try {
    const { payload }: { payload: ITokenInside } = await jose.jwtVerify(
      accessToken,
      new TextEncoder().encode(`${ACCESS_SECRET_KEY}`),
    );

    if (!payload) return null;

    return payload;
  } catch (error) {
    // Обработка ошибок, связанных с верификацией JWT
    if (error instanceof Error && error.message.includes("exp claim timestamp check failed")) {
      // Токен истек
      console.log("Токен истек");
      return null;
    }

    console.log("Ошибка при верификации токена: ", error);
    return null;
  }
}
