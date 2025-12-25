import { NextRequest, NextResponse } from "next/server"
import { getTokensFromRequest } from "./utils/get-tokens-from-request"
import { nextRedirect } from "./utils/next-redirect"


export async function protectPrivatePages(request: NextRequest) {
    const tokens = await getTokensFromRequest(request)
    if (!tokens) {
        return nextRedirect('/auth/login', request.url)
    }

    return NextResponse.next()
}