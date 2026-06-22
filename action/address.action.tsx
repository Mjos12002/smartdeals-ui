'use server'
import { httpService } from "@/service/http.service";
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

// getAddress function is used to get the list of address
export async function getAddress(): Promise<any> {
    const cookie = await cookies()
    const tkn: string | undefined = cookie.get("token")?.value
    if (tkn != undefined) {
        return httpService.getAddress("http://localhost:8090/api/v1/address", tkn)
    }
}

//createAddress function is used to add new address record
export async function createAddress(prevState: FormState, formData: FormData): Promise<any> {
    const street = formData.get("street") as string
    const popular_name = formData.get("popular_name") as string
    const province = formData.get("province") as string
    const district = formData.get("district") as string
    const sector = formData.get("sector") as string
    const long_lat = formData.get("long_lat") as string
    const email = formData.get("email") as string
    const phone_number = formData.get("phone_number") as string
    const twitter = formData.get("twitter") as string
    const facebook = formData.get("facebook") as string

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

    if (sector == "" || sector == null) {
        validationError.push({ description: "Sector is empty", control: "sector" })
    }

    if (long_lat == "" || long_lat == null) {
        validationError.push({ description: "Longitude Latitude is empty", control: "long_lat" })
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

    return httpService.createAddress("http://localhost:8090/api/v1/address", { street, popular_name, province, district, sector, long_lat, email, phone_number, twitter, facebook })

}