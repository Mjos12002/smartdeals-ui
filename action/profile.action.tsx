'use server'

// Actions for the profile form
import { httpService } from "@/service/http.service";
import { getEnv } from "@/utils/env.utils";
import { cookies } from "next/headers";

// ValidationStructure Structure of form control validation
export type ValidationStructure = {
    control: string
    description: string
}

// FormState Structure of form state
export type FormState = {
    message: string
    status: string
    code: string
    errors?: ValidationStructure[]
}

// getProfile function gets the list of profiles
export async function getProfile(): Promise<any> {
    const cookie = await cookies()
    const token: string | undefined = cookie.get("token")?.value
    if(token != undefined) {
        const devURL = getEnv("dev").value
        return httpService.getProfile(`${devURL}secure/v1/profile`, token)
    }
}

// createProfile function used to create profile
export async function createProfile(prev: FormState, formData: FormData): Promise<any> {

    const first_name = formData.get("first_name") as string
    const last_name = formData.get("last_name") as string
    const phone_number = formData.get("phonenumber") as string
    const email = formData.get("email") as string

    let validationErrors: ValidationStructure[] = []
    if (first_name == "" || first_name == null) {
        validationErrors.push({ control: "first_name", description: "Missing value for First name" })
    }
    if (last_name == "" || last_name == null) {
        validationErrors.push({ control: "last_name", description: "Missing value for Last name" })
    }
    if (phone_number == "" || phone_number == null) {
        validationErrors.push({ control: "phone_number", description: "Missing value for Phone number" })
    }
    if (email == "" || email == null) {
        validationErrors.push({ control: "email", description: "Missing value for email" })
    }

    if (validationErrors.length > 0) {
        const x: FormState = {
            message: "Validation error",
            status: "Failure",
            code: "422",
            errors: validationErrors
        }
        return Promise.resolve(x)
    }

    const cookie = await cookies()
    const tkn: string | undefined = cookie.get("token")?.value
    if (tkn != undefined) {
        const devURL = getEnv("dev").value
        return httpService.createProfile(`${devURL}secure/v1/profile`, tkn, { first_name, last_name, email, phone_number })
    }

}