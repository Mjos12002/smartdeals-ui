'use server'

import { httpService } from "@/service/http.service";
// ValidationAction responsible for validating the sign in form data and sending it to the server
export type ValidationError = {
    name: string;
    element: string;
}

export type FormState = {
    message: string;
    errors?: ValidationError[];
}

export async function submitData(prevState: FormState, formData: FormData): Promise<any> {
    const username = formData.get("username") as string
    const password = formData.get("password") as string

    // Managing errors
    var errorsDetails: ValidationError[] = [];
    var message: string = "Success"
    if(!username) {
        message = "Error"
        errorsDetails.push({element: 'username', name: 'Missing username field'})
    }

    if(!password) {
        message = "Error"
        errorsDetails.push({element: 'password', name: 'Missing password field'})
    }
    return httpService.signin("http://localhost:8090/api/v1/signin", {username, password});
}