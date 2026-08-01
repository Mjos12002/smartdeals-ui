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
            console.log(data.data)
            if (data && data?.data != undefined) {
                const productCategoryResponse: IProductCategory[] = data.data
                setProductCategories(productCategoryResponse)
            }else if (data?.data == undefined){
                setProductCategories([])
            }
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="flex items-center justify-center">
            <ul className="flex gap-2 p-2">
                <li className="font-bold text-[#00001F] bg-[#FAAC02] p-1 rounded-sm flex items-center">
                    All
                </li>
                {
                    productCategories.map((category, index) => (
                        <li key={index} className="flex items-center">
                            {category.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}