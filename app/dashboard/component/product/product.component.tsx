'use client'
import { useState } from "react"
import ViewProductComponent from "./viewproduct.component"
import CreateProductComponent from "./createproduct.component"

// ProductComponent is the component used to manage products
export default function ProductComponent() {

    const [productAction, setProductAction] = useState('View product')
    const [viewProductStyle, setViewProductStyle] = useState('border-b-3 border-[#3CC202] flex items-center p-2 text-lg')
    const [addProductStyle, setAddProductStyle] = useState('flex items-center p-2 text-lg')
    
    // Processing profile action
    const processProductAction = (act: string) => {
        setProductAction(act)
        if (act == "View product") {
            setViewProductStyle("border-b-3 border-[#3CC202] flex items-center p-2 text-lg")
            setAddProductStyle("flex items-center p-2 text-lg")
        }
        if (act == "Add product") {
            setViewProductStyle("flex items-center p-2 text-lg")
            setAddProductStyle("border-b-3 border-[#3CC202] flex items-center p-2 text-lg")
        }
    }

    return (
        <div className="flex flex-col">
            <ul className="flex gap-2 cursor-pointer">
                <li className={viewProductStyle} onClick={() => processProductAction('View product')}>View products</li>
                <li className={addProductStyle} onClick={() => processProductAction('Add product')}>New products</li>
            </ul>  

            <div className="border-t border-t-[#02BA02]">
                {productAction == "View product" && <ViewProductComponent/>}
                {productAction == "Add product" && <CreateProductComponent/>}
            </div>
        </div>
    )
}