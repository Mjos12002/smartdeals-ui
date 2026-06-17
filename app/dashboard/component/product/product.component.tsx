'use client'
import { useState } from "react"

// ProductComponent is the component used to manage products
export default function ProductComponent() {

    const [productAction, setProductAction] = useState('')
    
    return (
        <div className="flex flex-col">
            <ul className="flex gap-2 cursor-pointer">
                <li onClick={() => setProductAction('View Product')}>View your products</li>
                <li onClick={() => setProductAction('Add Product')}>Add new products</li>
            </ul>

            <div>
                {productAction}
            </div>
        </div>
    )
}