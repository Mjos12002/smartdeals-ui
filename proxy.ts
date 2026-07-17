import { NextResponse, NextRequest } from "next/server";

// proxy function acts as the middleware / proxy processing each request
export function proxy(request: NextRequest) {

    request.headers.set('Access-Control-Allow-Origin', '*')
    request.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-url', request.url)

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        const token = request.cookies.get('token')
        if (token?.value.split(".").length == 0) {
            return NextResponse.redirect(new URL('signin', request.url));
        }
    }
    return NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })

}