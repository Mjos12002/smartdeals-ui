'use server'
import { httpService } from "@/service/http.service";
import { getEnv } from "@/utils/env.utils";
import { cookies } from "next/headers";

// Structuring the validation 
export type ValidationStructure = {
    description: string;
    control: string;
}

// Structure of the form state
export type FormState = {
    message: string;
    status: string;
    code: string;
    errors?: ValidationStructure[];
}

// createBusiness function used to create business
export async function createBusiness(prev: FormState, formData: FormData): Promise<any> {

    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const logo_url = formData.get("logo_url") as File
    const user_id = formData.get("user_id") as string
        
    let validationErrors: ValidationStructure[] = []
    if (name == "" || name == null) {
        validationErrors.push({ control: "name", description: "Missing value for name" })
    }
    if (description == "" || description == null) {
        validationErrors.push({ control: "description", description: "Missing value for description" })
    }
    if (logo_url == null) {
        validationErrors.push({ control: "logo_url", description: "Missing value for logo" })
    }

    const cookie = await cookies()
    const token: string | undefined = cookie.get("token")?.value
    if (token != undefined) {
        const devURL = getEnv("dev").value
        return httpService.createBusiness(`${devURL}secure/v1/business`, token, formData)
    }
}

//getBusiness loads the list of the businesses
export async function getBusiness() {
    const cookie = await cookies()
    const token: string | undefined = cookie.get("token")?.value
    if (token != undefined) {
        const devURL = getEnv("dev").value
        return httpService.getBusiness(`${devURL}secure/v1/business`, token)
    }
}