
import { cookies } from "next/headers"

// Module used to manage cookies
export const  CookieUtils = async (token: string) => {
    const cookie = await cookies()
    cookie.set('token', token)
}

