import { getProductCategory } from "@/action/productcategory.action"
import { useEffect } from "react"

// ProductCategoryComponent is used to display the product category
export default function ProductCategoryComponent() {

    useEffect(() => {
        getProductCategory()
        .then(data => {
            console.log(data.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <ul>
                <li>
                    All
                </li>
            </ul>
        </div>
    )
}