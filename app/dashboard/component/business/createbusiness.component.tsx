import { createBusiness } from "@/action/business.action"
import { ArrowUpCircleIcon } from "@heroicons/react/16/solid"
import { ArrowUpIcon, ArrowUpOnSquareIcon, DocumentIcon } from "@heroicons/react/20/solid"
import { useActionState } from "react"

// CreateBusinessComponent creates business
export default function CreateBusinessComponent() {

    const [state, addBusiness, isPending] = useActionState(createBusiness, undefined)

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#080026] mt-6">
                New business
            </h2>
            <div>
                <form action={addBusiness}>
                    <ul className="flex gap-4 flex-col m-0">
                        <li>
                            <input type="text" placeholder="Name" name="name" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Description" name="description" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <label htmlFor="logo" className="rounded-sm text-[#000] bg-[#E6E6E6] border-gray-300 border border-shadow w-[100%] p-2">
                                Choose Logo
                            </label>
                            <input type="file" placeholder="Logo" id="logo" name="logo_url" className="hidden" />
                        </li>
                        <li>
                            <input type="text" placeholder="Street" name="street" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Popular name" name="popular_name" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="email" placeholder="Email" name="email" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Phone number" name="phone_number" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
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
                            <input type="text" placeholder="Province" name="province" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="District" name="district" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
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