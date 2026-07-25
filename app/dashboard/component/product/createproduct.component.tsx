import { useActionState, useEffect, useState } from "react"
import { createProduct } from "@/action/product.action"
import { getProductCategory } from "@/action/productcategory.action"
import { DocumentIcon } from "@heroicons/react/20/solid"
import { convertServerPatchToFullTree } from "next/dist/client/components/segment-cache/navigation"


// Product category interface
interface IProductCategory {
    ID: number
    name: string
    description: string
}

//CreateProductComponent is used to create business
export default function CreateProductComponent() {

    // Declaration of hooks (useState and useActionState)
    const [state, addProduct, isPending] = useActionState(createProduct, undefined)

    const [productCategory, setProductCategory] = useState<IProductCategory[]>([])
    const [uploadedFiles, setUploadedFiles] = useState<string>("")
    const [percentCalculated, setPercentCalculated] = useState<string>("")
    const [invalidFileType, setInvalidFileType] = useState<boolean>(false)
    const [invalidFileSize, setInvalidFileSize] = useState<boolean>(false)


    // Handle the file uploaded before uploading to the backend
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvalidFileSize(false)
        setInvalidFileType(false)
        const filesUploaded = e.target.files
        if (!filesUploaded) return
        let fileSize = 0

        // Loop through the files array and report oversized and invalid file types
        for (let i = 0; i < filesUploaded.length; i++) {

            const f: File = filesUploaded[i]
            const s: number = f.size
            const t: string = f.type
            const fileType: string[] = t.split("/")
            fileSize += s / (1024 * 1024)

            if (fileType.length > 0 && fileType[0] !== "image") {
                setInvalidFileType(true)
            }

            if (fileSize > 1) {
                setInvalidFileSize(true)
            }
        }

        setUploadedFiles(`${filesUploaded?.length} files selected`)
    }

    const calculateDiscountedPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const perc: number = Number(e.target.value)
        const unitPrice: number = Number((document.getElementById("price") as HTMLInputElement).value)
        const discountPrice: number = (unitPrice * perc) / 100
        setPercentCalculated(String(discountPrice))
        console.log(perc, unitPrice, discountPrice)
    }

    // Use effect hook to process the product
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
            <h2 className="text-2xl font-bold text-[#080026] mt-6">
                New product
            </h2>
            <div>
                <form action={addProduct}>
                    <ul className="flex gap-4 flex-col m-0">
                        <li>
                            <select name="product_categories_id" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2">
                                {
                                    productCategory.length > 0 && productCategory.map((d) => <option key={d.ID} value={d.ID}>{d.name}</option>)
                                }
                            </select>
                        </li>
                        <li>
                            <input type="text" placeholder="Name" name="name" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Description" name="description" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Unit price" name="price" id="price" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Discount %" name="discount" id="discount" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" onChange={calculateDiscountedPrice} />
                        </li>
                        <li>
                            <input type="text" placeholder="Discounted price" name="discounted_price" value={percentCalculated} onChange={() => console.log('yes')} className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li className="flex flex-col">
                            <div className="flex">
                                <div className="flex">
                                    <label htmlFor="logo" className="p-2 text-[#000] bg-[#E6E6E6]">
                                        Choose images (Max 3)
                                    </label>
                                    <div className="flex items-center justify-center bg-[#D1CFCF]">
                                        <DocumentIcon width={23} height={23} color="#F77D02" />
                                    </div>
                                    <div className="flex items-center bg-[#D1CFCF] text-[#E05F02] p-1">{uploadedFiles}</div>
                                </div>
                                <input type="file" placeholder="Logo" id="logo" name="logo_url" className="hidden" multiple onChange={handleUpload} />

                            </div>
                            <div className="text-[#F54927]">
                                <p>
                                    {invalidFileSize && <span>Some files exceed 1MB</span>}
                                </p>
                                <p>
                                    {invalidFileType && <span>Image files only allowed</span>}
                                </p>
                            </div>
                        </li>
                        <li>
                            <button type="submit" disabled={isPending} className="bg-[#000312] rounded-sm text-[#22C402] p-2 cursor-pointer">{isPending ? "Processing ...." : "Submit"}</button>
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