'use client'
import { httpService } from "@/service/http.service"
import { useEffect, useState } from "react"

// Modelling the product category general response
interface IProductCategoryResponse{
    code: number,
    message: string,
    status: string,
    data: IProductCategoryData[]
}

// Modelling the product specific data responsee
interface IProductCategoryData {
    ID: number,
    name: string,
    description: string
}

export default function ProductCategory() {

    const [productCategory, setProductCategory] = useState<IProductCategoryResponse | null>(null)

    useEffect(() => {
        httpService.get("http://localhost:8090/api/v1/product-category")
        .then(data => setProductCategory(data))
        .catch(error => console.log(error))
        
    }, [])

    return (
        <div className="mt-8 flex justify-center w-full">
            <ul className="flex gap-4">
                <li className="flex items-center  bg-[#049F04] pl-4 pr-4 text-white border rounded-lg">All</li>
                {
                    productCategory?.data?.map((dt) => (
                        <li className="p-1" key={dt.ID}>{dt.name}</li>
                    ))
                }
                
            </ul>
        </div>
    )
}