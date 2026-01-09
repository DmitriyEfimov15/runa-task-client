"use server";

import { type NextRequest, NextResponse } from "next/server";

import { getTokensFromRequest } from "./utils/get-tokens-from-request";
import { jwtVerifyServer } from "./utils/jwt-verify";
import { nextRedirect } from "./utils/next-redirect";
import { PRIVATE_ROUTES } from "@/src/shared/constants/routes/private/routes";

export async function protectAuthPages(request: NextRequest) {
  const tokens = await getTokensFromRequest(request);
  if (!tokens) return NextResponse.next();

  const verifiedData = await jwtVerifyServer(tokens.accessToken);
  if (!verifiedData) return NextResponse.next();

  return nextRedirect(PRIVATE_ROUTES.HOME.path, request.url);
}
