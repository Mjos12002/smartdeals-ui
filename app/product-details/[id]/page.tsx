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
    popular_name: string
    email: string
    phone_number: string
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
                    console.log(data.data)
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
            <div className="w-full h-[400] relative shadow-sm">
                <div className="absolute top-0 left-0 z-100 fit-content bg-[]">
                    <div className='p-1 fit-content bg-[#F05B05] text-[#fff]'>
                        {products?.discount} Off
                    </div>
                </div>
                <Image
                    src={`http://localhost:8090/${logoImages}`}
                    alt="image"
                    fill />
            </div>
            <div className="flex items-center justify-center height-[50] relative p-2">
                <ul className="flex gap-1">
                    <li>
                        <div className="w-[50] h-[50] relative border border-[#E3E4E6]">
                            {products?.logo && products?.logo.split(",").length >= 3 && <Image
                                src={`http://localhost:8090/${products?.logo.split(",")[1].trim()}`}
                                alt="image"
                                fill
                                onClick={() => { setLogoImages(products?.logo.split(",")[1].trim() ?? "") }}
                            />}

                        </div>
                    </li>
                    <li>
                        <div className="w-[50] h-[50] relative border border-[#E3E4E6]">
                            {products?.logo && products?.logo.split(",").length >= 3 && <Image
                                src={`http://localhost:8090/${products?.logo.split(",")[2].trim()}`}
                                alt="image"
                                fill
                                onClick={() => { setLogoImages(products?.logo.split(",")[2].trim() ?? "") }}
                            />}
                        </div>
                    </li>
                    <li>
                        <div className="w-[50] h-[50] relative border border-[#E3E4E6]">
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
                        <p className="text-3xl font-bold text-[#00051F]">{products?.name}</p>
                        <p className="text-[#7C7D7C] text-xl font-thin">{products?.category.name}</p>
                    </li>
                    <li >
                        <div className="flex justify-end p-1">
                            <div className="flex fit-content">
                                <div className='flex gap-1 size-fit border border-[#F2A072] rounded-sm'>
                                    <div className='line-through text-lg text-[#fff] bg-[#F05B05] size-fit p-1'>
                                        Price: {products?.price}
                                    </div>
                                    <div className='text-lg text-[#02B00D] size-fit flex p-1 font-bold shadow-sm'>
                                        {products && products?.price - products?.discounted_price} Frw
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div className="bg-[#fff] border border-[#D6D4D4] rounded-md shadow-sm p-1">
                            <p className="text-lg font-bold">
                                Product Description
                            </p>
                            {products?.description}
                        </div>

                    </li>
                    <li>
                        <div className="bg-[#fff] border border-[#D6D4D4] rounded-md shadow-sm p-1">
                            <p className="text-lg font-bold">
                                Sold by
                            </p>
                            <p>
                                {products?.business.name}
                            </p>
                            <p>
                                {products?.business.popular_name}
                            </p>
                            <p>
                                {products?.business.phone_number}
                            </p>
                            <p>
                                {products?.business.email}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}