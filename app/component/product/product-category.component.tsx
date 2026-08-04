import { getProductCategory } from "@/action/productcategory.action"
import { useEffect, useState } from "react"

interface IProductCategory {
    name: string
}

// ProductCategoryComponent is used to render the product category
export default function ProductCategoryComponent() {
    
    const [productCategories, setProductCategories] = useState<IProductCategory[]>([])

    useEffect(() => {
        getProductCategory()
        .then(data => {
            if (data && data?.data != undefined) {
                const productCategoryResponse: IProductCategory[] = data.data
                setProductCategories(productCategoryResponse)
            }else if (data?.data == undefined){
                setProductCategories([])
            }
        })
        .catch(err => setProductCategories([]))
    }, [])

    return (
        <div className="flex items-center justify-center bg-[#000029] bg-gradient-to-r sm:from-[#000029] via-[#D3E6E0] to-[#00A324]">
            <ul className="flex gap-2 m-2 overflow-x-scroll">
                <li className="font-bold text-[#000] flex items-center p-1">
                    All
                </li>
                {
                    productCategories.map((category, index) => (
                        <li key={index} className="flex items-center text-[#000] p-1 hover:bg-[#001204] hover:text-[#fff] p-1 cursor-pointer">
                            {category.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}