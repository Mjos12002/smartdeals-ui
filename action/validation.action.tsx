'use server'
import { httpService } from "@/service/http.service";
import { getEnv } from "@/utils/env.utils";

export type FormState = {
    message: string;
    errors?: Err[];
};

export type Err = {
    element: string
    name: string
}

export async function userSignUp(prevState: FormState, formData: FormData): Promise<any> {

    const username = formData.get("email") as string
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirm_password") as string

    // Variables holding error details 
    var errorsDetails: Err[] = [];
    var message: string = "Success"
    if (!username) {
        message = "Error"
        errorsDetails.push({ element: 'email', name: 'Missing email / username field' })
    }

    if (!password) {
        message = "Error"
        errorsDetails.push({ element: 'password', name: 'Missing password field' })
    }

    if (!confirmPassword) {
        message = "Error"
        errorsDetails.push({ element: 'confirm_password', name: 'Missing confirm password field' })
    }
    const devURL = getEnv("dev").value
    return httpService.signup(`${devURL}secure/v1/signup`, { username, password })

}