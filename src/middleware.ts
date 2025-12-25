import { NextRequest, NextResponse } from "next/server"
import { PUBLIC_ROUTES } from "./shared/constants/routes/public/routes"
import { protectAuthPages } from "./entities/auth/server-actions/middlewares/protect-auth.middleware"
import { protectPrivatePages } from "./entities/auth/server-actions/middlewares/protect-private.middleware"


export async function middleware(request: NextRequest): Promise<NextResponse> {
	const pathname = request.nextUrl.pathname
	if (pathname.startsWith(PUBLIC_ROUTES.AUTH)) {
		return protectAuthPages(request)
	}

	return protectPrivatePages(request)
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|assets|images).*)",
  ],
}
