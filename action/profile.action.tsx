// Actions for the profile form

import { httpService } from "@/service/http.service";

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

// createProfile function used to create profile
export async function createProfile(prev: FormState, formData: FormData): Promise<any> {
    
    const first_name = formData.get("first_name") as string
    const last_name = formData.get("last_name") as string
    let validationErrors: ValidationStructure[] = []
    if(first_name == "" || first_name == null) {
        validationErrors.push({control: "first_name", description: "Missing value for first_name"})
    }
    if(last_name == "" || last_name == null) {
        validationErrors.push({control: "last_name", description: "Missing value for last name"})
    }
    return httpService.createProfile("http://localhost:8090/api/v1/profile", {first_name, last_name})
    
}