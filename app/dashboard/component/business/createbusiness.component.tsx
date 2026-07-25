import { createBusiness } from "@/action/business.action"
import { DocumentIcon } from "@heroicons/react/20/solid"
import { useActionState, useState } from "react"

// CreateBusinessComponent creates business
export default function CreateBusinessComponent() {

    const [state, addBusiness, isPending] = useActionState(createBusiness, undefined)
    const [uploadedFiles, setUploadedFiles] = useState<string>("")

    // Handle the file uploaded before uploading to the backend
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filesUploaded = e.target.files
        setUploadedFiles(`${filesUploaded?.length} files selected`)
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#080026] mt-6">
                New business
            </h2>
            <div>
                <form action={addBusiness}>
                    <ul className="flex gap-4 flex-col m-0">
                        <li className="flex flex-col">
                            <input type="text" placeholder="Name" name="name" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                            <div className="text-[#F50202]">* {state && state.errors && state.errors.filter((e: { control: string }) => e.control === "name").length > 0 && state.errors.filter((e: { control: string }) => e.control === "name")[0]["description"]}</div>
                        </li>
                        <li className="flex flex-col">
                            <input type="text" placeholder="Description" name="description" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                            <div className="text-[#F50202]">* {state && state.errors && state.errors.filter((e: { control: string }) => e.control === "description").length > 0 && state.errors.filter((e: { control: string }) => e.control === "description")[0]["description"]}</div>
                        </li>
                        <li>
                            <div className="flex">
                                <label htmlFor="logo" className="p-2 text-[#000] bg-[#E6E6E6]">
                                    Choose Logo
                                </label>
                                <div className="flex items-center justify-center bg-[#D1CFCF]">
                                    <DocumentIcon width={23} height={23} color="#F77D02"/>
                                </div>
                                <div className="flex items-center bg-[#D1CFCF] text-[#E05F02] p-1">{uploadedFiles}</div>
                            </div>

                            <input type="file" placeholder="Logo" id="logo" name="logo_url" className="hidden" multiple onChange={handleUpload}/>
                        </li>
                        <li>
                            <input type="text" placeholder="Street" name="street" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li className="flex flex-col">
                            <input type="text" placeholder="Popular name" name="popular_name" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                            <div className="text-[#F50202]">* {state && state.errors && state.errors.filter((e: { control: string }) => e.control === "popular_name").length > 0 && state.errors.filter((e: { control: string }) => e.control === "popular_name")[0]["description"]}</div>
                        </li>
                        <li>
                            <input type="email" placeholder="Email" name="email" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li className="flex flex-col">
                            <input type="text" placeholder="Phone number" name="phone_number" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                            <div className="text-[#F50202]">* {state && state.errors && state.errors.filter((e: { control: string }) => e.control === "phone_number").length > 0 && state.errors.filter((e: { control: string }) => e.control === "phone_number")[0]["description"]}</div>
                        </li>
                        <li>
                            <input type="text" placeholder="Twitter account" name="twitter" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Facebook account" name="facebook" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Instagram account" name="instagram" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <select id="province" name="province" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2">
                                <option value="Kigali city">Kigali city</option>
                                <option value="Eastern Province">Eastern Province</option>
                                <option value="Northern Province">Northern Province</option>
                                <option value="Southern Province">Southern Province</option>
                                <option value="Western Province">Western Province</option>
                            </select>
                        </li>
                        <li className="flex flex-col">
                            <input type="text" placeholder="District" name="district" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                            <div className="text-[#F50202]">* {state && state.errors && state.errors.filter((e: { control: string }) => e.control === "district").length > 0 && state.errors.filter((e: { control: string }) => e.control === "district")[0]["description"]}</div>
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