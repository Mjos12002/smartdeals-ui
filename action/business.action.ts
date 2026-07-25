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
    const street = formData.get("street") as string
    const popular_name = formData.get("popular_name") as string
    const email = formData.get("email") as string
    const phone_number = formData.get("phone_number") as string
    const twitter = formData.get("twitter") as string
    const facebook = formData.get("facebook") as string
    const instagram = formData.get("instagram") as string
    const province = formData.get("province") as string
    const district = formData.get("district") as string
    
    let validationErrors: ValidationStructure[] = []

    if (name === "" || name === null) {
        validationErrors.push({ control: "name", description: "Missing value for name" })
    }

    if (description === "" || description === null) {
        validationErrors.push({ control: "description", description: "Missing value for Description" })
    }

    if (phone_number === "" || phone_number === null) {
        validationErrors.push({ control: "phone_number", description: "Missing value for Phone number" })
    }

    if (popular_name === "" || popular_name === null) {
        validationErrors.push({ control: "popular_name", description: "Missing value for Popular name" })
    }

    if (district === "" || district === null) {
        validationErrors.push({ control: "district", description: "Missing value for District" })
    }

    if (validationErrors.length > 0) {
        const errorState: FormState = {
            message: "Invalid data",
            status: "Error",
            code: "500",
            errors: validationErrors
        }
        return Promise.resolve(errorState)
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