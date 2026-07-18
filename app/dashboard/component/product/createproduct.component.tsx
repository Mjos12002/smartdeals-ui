import { useActionState, useEffect, useState } from "react"
import { createProduct } from "@/action/product.action"
import { getProductCategory } from "@/action/productcategory.action"

// Product category interface
interface IProductCategory{
    ID: number
    name: string
    description: string
}

//CreateProductComponent is used to create business
export default function CreateProductComponent() {

    const [state, addProduct, isPending] = useActionState(createProduct, undefined)
    const [productCategory, setProductCategory] = useState<IProductCategory[]>([])
    useEffect(() => {
        getProductCategory()
        .then((res) => {
            const response: IProductCategory[] = res.data
            setProductCategory(response)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className="flex flex-col gap-4 p-4">
            <h2 className="text-2xl font-bold text-[#010121]">
                New product
            </h2>
            <div>
                <form action={addProduct}>
                    <ul className="flex gap-4 flex-col m-0">
                        <li>
                            <input type="text" placeholder="Name" name="name" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Description" name="description" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Price" name="price" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Discount %" name="discount" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Discounted price" name="discounted_price" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="date" placeholder="Discount start date" name="discount_start_date" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="date" placeholder="Discount end date" name="discount_end_date" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <select name="status" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2">
                                <option id="active">Active</option>
                                <option id="inactive">Inactive</option>
                            </select>
                        </li>
                        <li>
                            <select name="product_categories_id" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2">
                                {
                                    productCategory.length > 0 && productCategory.map((d) => <option key={d.ID}>{d.name}</option>)
                                }  
                            </select>
                        </li>
                        <li>
                            <label htmlFor='logo' className="rounded-sm border-gray-300 border border-shadow p-2 w-[100%] block">Choose product logo</label>
                            <input type="file" placeholder="Logo" id="logo" name="logo" className="hidden" />
                        </li>
                        <li>
                            <button type="submit" disabled={isPending} className="bg-[#02C225] rounded-sm text-white p-2 cursor-pointer">{isPending ? "Processing ...." : "Submit"}</button>
                        </li>
                        <li>
                            {
                                state?.code ? <span>{state?.message}</span> : <span></span>
                            }
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}