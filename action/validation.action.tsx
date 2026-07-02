'use server'
import { httpService } from "@/service/http.service";

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
        errorsDetails.push({element: 'email', name: 'Missing email / username field'})
    }

    if (!password) {
        message = "Error"
        errorsDetails.push({element: 'password', name: 'Missing password field'})
    }

    if(!confirmPassword) {
        message = "Error"
        errorsDetails.push({element: 'confirm_password', name: 'Missing confirm password field'})
    }

    return httpService.signup("http://localhost:8090/api/secure/v1/signup", {username, password})
    
}