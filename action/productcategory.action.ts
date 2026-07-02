'use server'

import { getEnv } from "@/utils/env.utils";
import { cookies } from "next/headers";
import { httpService } from "@/service/http.service";

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

// getProductCategory function gets the list of profiles
export async function getProductCategory(): Promise<any> {
    const cookie = await cookies()
    const token: string | undefined = cookie.get("token")?.value
    if(token != undefined) {
        const devURL = getEnv("dev").value
        console.log(devURL)
        return httpService.getProductCategory(`${devURL}secure/v1/product-category`, token)
    }
}