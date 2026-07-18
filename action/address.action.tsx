'use server'
import { httpService } from "@/service/http.service";
import { cookies } from "next/headers";
import { getEnv } from "@/utils/env.utils";

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

// getAddress function is used to get the list of address
export async function getAddress(): Promise<any> {
    const cookie = await cookies()
    const tkn: string | undefined = cookie.get("token")?.value
    if (tkn != undefined) {
        const devURL = getEnv("dev").value
        return httpService.getAddress(`${devURL}secure/v1/address`, tkn)
    }
}

//createAddress function is used to add new address record
export async function createAddress(prevState: FormState, formData: FormData): Promise<any> {
    const street = formData.get("street") as string
    const popular_name = formData.get("popular_name") as string
    const province = formData.get("province") as string
    const district = formData.get("district") as string
    const email = formData.get("email") as string
    const phone_number = formData.get("phone_number") as string
    const twitter = formData.get("twitter") as string
    const facebook = formData.get("facebook") as string
    const instagram = formData.get("instagram") as string

    const validationError: ValidationStructure[] = []

    if (street == "" || street == null) {
        validationError.push({ description: "Street is empty", control: "street" })
    }

    if (popular_name == "" || popular_name == null) {
        validationError.push({ description: "Popular name is empty", control: "Popular name" })
    }

    if (province == "" || province == null) {
        validationError.push({ description: "Province is empty", control: "province" })
    }

    if (district == "" || district == null) {
        validationError.push({ description: "District is empty", control: "district" })
    }

    if (email == "" || email == null) {
        validationError.push({ description: "Email is empty", control: "email" })
    }

    if (phone_number == "" || phone_number == null) {
        validationError.push({ description: "Phone number is empty", control: "phone_number" })
    }

    if (twitter == "" || twitter == null) {
        validationError.push({ description: "Twitter is empty", control: "twitter" })
    }

    if (facebook == "" || facebook == null) {
        validationError.push({ description: "Facebook is empty", control: "facebook" })
    }
    const devURL = getEnv("dev").value
    return httpService.createAddress(`${devURL}secure/v1/address`, { street, popular_name, province, district, email, phone_number, twitter, facebook, instagram })

}