'use client'

import { getProducts } from "@/action/product.action"
import { useEffect, useState } from "react"
import { AvailableProductComponent } from "./component/product/availableproduct.component"

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
}


//Welcome is used to display the products / service available 
export default function Welcome() {

    // state variables holding the products, loading state and error state
    var [products, setProducts] = useState<IProduct[]>([])
    var [loading, setLoading] = useState<boolean>(true)
    var [loadingError, setLoadingError] = useState<boolean>(false)

    // Fetching the products from the backend using the useEffect hook
    useEffect(() => {
        getProducts()
            .then(data => {
                if (data && data?.data != undefined) {
                    const productResponse: IProduct[] = data.data
                    setProducts(productResponse)
                    setLoading(false)
                }else if (data?.data == undefined){
                    setLoading(false)
                }   

            })
            .catch(err => {
                setLoadingError(true)
                setLoading(false)
            })
    }, [])

    return (
        <div className="h-screen overflow-y-scroll bg-gradient-to-r sm:from-[#fff] via-[#D3E6E0] to-[#E6E8F0]">

            <div className="flex justify-center">

                <div className="border border-[#C7C9C9] rounded-lg flex w-[100%] m-3 justify-between bg-[#fff] lg:w-[50%]">
                    <input placeholder="Search" className="p-1 m-2 sm:w-[100%] md:w-[100%] w-[100%] bg-[#fff]" />
                    <div className="search-button p-2 flex items-center bg-[#010C63] rounded-r-lg border border-[#fff]">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="bg-white m-3 h-screen rounded-lg border border-[#C6C3C3] opacity-100 border border-shadow overflow-y-scroll">
                <div className="flex flex-col sm:flex-wrap sm:flex-row lg:flex-wrap lg:flex-row">
                    {loading && <p className="text-center text-green-500 font-thin text-lg">Loading ....</p>}
                    {loadingError && <p className="text-center text-red-500 font-thin text-lg">Error loading data, the technical team has been notified</p>}
                    {(products.length === 0 && !loadingError && !loading) && <p className="text-center text-gray-500 font-thin text-lg p-2">Thanks for visiting Smart Deals, We are coming very soon !!!</p>}
                    {
                        products != undefined && products.map((d) => <AvailableProductComponent key={d.logo} id={d.id} category={d.category.name} price={d.price} name={d.name} discount={d.discount} business={d.business.name} discounted_price={d.discounted_price} imageurl={`http://localhost:8090/${d.logo}`} />)
                    }
                </div>
            </div>

        </div>
    )
}