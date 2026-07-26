'use client'
import { useEffect, useState, use } from "react"
import { getProductByID } from "@/action/product.action"
import Image from "next/image"

// Ibusiness is an representation of the business
interface IBusiness {
    name: string
    description: string
    logoURL: string
    street: string
    popularName: string
    email: string
    phoneNumber: string
    twitter: string
    facebook: string
    instagram: string
    province: string
    district: string
}

// IProduct is an representation of the product
interface IProduct {
    id: number
    name: string
    price: number
    description: string
    discount: number
    discounted_price: number
    logo: string
    business: IBusiness
    category: IProductCategory
}

// 
interface IProductCategory {
    name: string
}    // Ibusiness is an representation of the business

interface IBusiness {
    name: string
    description: string
    logoURL: string
    street: string
    popularName: string
    email: string
    phoneNumber: string
    twitter: string
    facebook: string
    instagram: string
    province: string
    district: string
}

// IProduct is an representation of the product
interface IProduct {
    id: number
    name: string
    price: number
    description: string
    discount: number
    discounted_price: number
    logo: string
    business: IBusiness
    category: IProductCategory
}

// 
interface IProductCategory {
    name: string
}

export default function ProductDetailsByIdentifier(
    {
        params,
    }: {
        params: Promise<{ id: number }>
    }
) {
    // state variables holding the products, loading state and error state
    var [products, setProducts] = useState<IProduct>()
    var [loading, setLoading] = useState<boolean>(true)
    var [loadingError, setLoadingError] = useState<boolean>(false)
    var [logoImages, setLogoImages] = useState<string>("i")
    const { id } = use(params)

    // useEffect hook used to call API to load the data
    useEffect(() => {
        getProductByID(id)
            .then(data => {
                if (data && data?.data != undefined) {
                    const productResponse: IProduct[] = data.data
                    setProducts(productResponse[0])
                    setLogoImages(productResponse[0]?.logo?.split(",")[0]?.trim() ?? "")
                    setLoading(false)
                } else if (data?.data == undefined) {
                    setLoading(false)
                }
            })
            .catch(err => {
                setLoadingError(true)
                setLoading(false)
            })
    }, [])
    return (
        <div className="flex flex-col p-2">
            <div className="w-full h-[400] bg-red-500 relative">
                <Image
                    src={`http://localhost:8090/${logoImages}`}
                    alt="image"
                    fill />
            </div>
            <div className="flex items-center justify-center height-[50] relative p-2">
                <ul className="flex gap-1">
                    <li>
                        <div className="w-[50] h-[50] relative">
                            {products?.logo && products?.logo.split(",").length >= 3 && <Image
                                src={`http://localhost:8090/${products?.logo.split(",")[1].trim()}`}
                                alt="image"
                                fill
                                onClick={() => { setLogoImages(products?.logo.split(",")[1].trim() ?? "") }}
                            />}

                        </div>
                    </li>
                    <li>
                        <div className="w-[50] h-[50] relative">
                            {products?.logo && products?.logo.split(",").length >= 3 && <Image
                                src={`http://localhost:8090/${products?.logo.split(",")[2].trim()}`}
                                alt="image"
                                fill
                                onClick={() => { setLogoImages(products?.logo.split(",")[2].trim() ?? "") }}
                            />}
                        </div>
                    </li>
                    <li>
                        <div className="w-[50] h-[50] relative">
                            {products?.logo && products?.logo.split(",").length >= 3 && <Image
                                src={`http://localhost:8090/${products?.logo.split(",")[3].trim()}`}
                                alt="image"
                                fill
                                onClick={() => { setLogoImages(products?.logo.split(",")[3].trim() ?? "") }}
                            />}
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col gap-3">
                    <li>
                        <p className="text-3xl font-bold">{products?.name}</p>
                        <p className="text-[#6A6868] text-xl">{products?.category.name}</p>
                    </li>
                    <li >

                    </li>
                    <li>

                        <div className="bg-[#fff] border border-[#D6D4D4] rounded-md shadow-sm p-2">
                            <p className="text-lg font-bold">
                                Product Description
                            </p>
                            {products?.description}
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    )
}