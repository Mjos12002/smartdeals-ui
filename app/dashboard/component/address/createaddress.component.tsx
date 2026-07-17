// Create Address Component is used to create address

import { useActionState } from "react"
import { createAddress } from "@/action/address.action"

export default function CreateAddressComponent() {

    const [state, addAddress, isPending] = useActionState(createAddress, undefined)
    return (
        <div className="flex flex-col gap-4 p-4">
            <h2 className="text-2xl font-bold text-[#010121]">
                Create New Address
            </h2>
            <form action={addAddress}>
                <ul className="flex gap-4 flex-col m-0">
                    <li>
                        <input type="text" placeholder="Street" name="street" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="text" placeholder="Popular name" name="popular_name" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="text" placeholder="Province" name="province" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="text" placeholder="District" name="district" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="text" placeholder="Sector" name="sector" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="text" placeholder="Longitude Latitude" name="long_lat" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="email" placeholder="Email" name="email" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="text" placeholder="Phone number" name="phone_number" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="text" placeholder="Twitter" name="twitter" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="text" placeholder="Facebook" name="facebook" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
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
    )
}