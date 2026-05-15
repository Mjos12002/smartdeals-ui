'use client'
import { AvailableProduct } from "@/component/product/availableproduct.component"
import Header from "@/component/welcome/header.component"
import ProductCategory from "@/component/welcome/productcategory.component"

import { httpService } from "@/service/http.service"
import { useEffect, useState } from "react"

interface IProductData{
    ID: number
    product_name: string
    price: number
    product_description: string

}

interface IProduct{
    code: number
    status: string
    message: string
    data: IProductData[]
}

export default function Welcome() {

    var [product, setProduct] = useState<IProduct | null>(null)

    useEffect(() => {
        httpService.get("http://localhost:8090/api/v1/product")
        .then(data => setProduct(data))
        .catch(err => console.log(err))

    }, [])

    return (
        <div className="h-screen">
            
            <Header />

            <div className="flex justify-center">
                <div className="border border-gray-300 rounded-lg flex w-[50%] justify-between">
                    <input placeholder="Search" className="p-1 m-2 w-[80%]" />
                    <div className="search-button p-2 flex items-center bg-[#010C63] rounded-r-lg ">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>

                    </div>
                </div>
            </div>

            <div className="bg-white m-7 h-screen rounded-lg border-gray-300 border border-shadow overflow-y-scroll">
                
                <div className="ml-5 mt-4 font-medium text-3xl text-[#02B502]">Latest promotions</div>
                
                <ProductCategory />

                <div className="flex justify-center">
                    <div className="flex flex-wrap  mt-15 w-[98%]">

                        {
                            product?.data?.map((d) => (<AvailableProduct key={d.ID} productName={d.product_name} productPrice={d.price}/>))
                        }

                    </div>
                </div>

            </div>

        </div>
    )
}