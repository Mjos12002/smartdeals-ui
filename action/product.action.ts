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

// createProduct creates product
export async function createProduct(prev: FormState, formData: FormData): Promise<any> {

    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const price = Number(formData.get("price") as string)
    const discount = Number(formData.get("discount") as string)
    const discounted_price = Number(formData.get("discount_price") as string)
    const discount_start_date = formData.get("discount_start_date") as string
    const discount_end_date = formData.get("discount_end_date") as string
    const status = formData.get("status") as string
    const logo = formData.get("logo") as File
    const product_categories_id = Number(formData.get("product_categories_id") as string)

    const discount_start_date_converted = new Date(discount_end_date)
    const discount_end_date_converted = new Date(discount_end_date)

    let validationErrors: ValidationStructure[] = []
    if (name == "" || name == null) {
        validationErrors.push({ control: "name", description: "Missing value for name" })
    }
    if (description == "" || description == null) {
        validationErrors.push({ control: "description", description: "Missing value for description" })
    }
    if (price == 0) {
        validationErrors.push({ control: "price", description: "Missing value for price" })
    }
    if (discount == 0) {
        validationErrors.push({ control: "discount", description: "Missing value for discount" })
    }
    if (discount_start_date == "") {
        validationErrors.push({ control: "discount_start_date", description: "Missing value for discount_start_date" })
    }

    const cookie = await cookies()
    const token: string | undefined = cookie.get("token")?.value
    if (token != undefined) {
        const devURL = getEnv("dev").value
        return httpService.createProduct(`${devURL}secure/v1/product`, token, formData)
    }

}

// getProducts is used to load the products
export async function getProducts() {

    const cookie = await cookies()
    const token: string | undefined = cookie.get("token")?.value
    const devURL = getEnv("dev").value
    if (token != undefined) {
        return httpService.getProduct(`${devURL}secure/v1/product`, token)
    } else {
        return httpService.getProduct(`${devURL}secure/v1/product`, "")
    }

}

export async function getProductByID(id: number) {
    const devURL = getEnv("dev").value
    return httpService.getProductByID(`${devURL}secure/v1/product/${id}`)
}