import { NextResponse, NextRequest } from "next/server";

// Function to process request using middleware

export function proxy(request: NextRequest) {

    request.headers.set('Access-Control-Allow-Origin', '*')
    request.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        const token = request.cookies.get('token')
        if (token?.value.split(".").length == 0) {
            return NextResponse.redirect(new URL('signin?status=invalidtoken', request.url));
        }
    }
    return NextResponse.next()

}