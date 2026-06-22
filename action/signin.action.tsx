'use server'

import { httpService } from "@/service/http.service";
import { cookies } from "next/headers";
// ValidationAction responsible for validating the sign in form data and sending it to the server
export type ValidationError = {
    name: string;
    element: string;
}

export type FormState = {
    message: string;
    token: string;
    id: string;
    role: string;
    username: string;
    errors?: ValidationError[];
}

export async function userSignIn(prevState: FormState, formData: FormData): Promise<any> {
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    // Managing errors
    var errorsDetails: ValidationError[] = [];
    var message: string = "Success"
    if (!username) {
        message = "Error"
        errorsDetails.push({ element: 'username', name: 'Missing username field' })
    }

    if (!password) {
        message = "Error"
        errorsDetails.push({ element: 'password', name: 'Missing password field' })
    }
    
    const cookie = await cookies()
    const resp = httpService.signin("http://localhost:8090/api/v1/signin", { username, password })
    resp.then(r => {
        if(r.record_id > 0) {
            cookie.set("token", r.token)
            cookie.set("role", r.role)
            cookie.set("username", r.username)
        }
    })
    
    return resp

}