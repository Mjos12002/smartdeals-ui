import { createBusiness } from "@/action/business.action"
import { useActionState } from "react"

// CreateBusinessComponent creates business
export default function CreateBusinessComponent() {

    const [state, addBusiness, isPending] = useActionState(createBusiness, undefined)

    return (
        <div className="flex flex-col gap-4 p-4">
            <h2 className="text-2xl font-bold text-[#010121]">
                New business
            </h2>
            <div>
                <form action={addBusiness}>
                    <ul className="flex gap-4 flex-col m-0">
                        <li>
                            <input type="text" placeholder="Name" name="name" className="rounded-sm border-gray-300 border border-shadow w-[30%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Description" name="description" className="rounded-sm border-gray-300 border border-shadow w-[30%] p-2" />
                        </li>
                        <li>
                            <input type="file" placeholder="Logo" name="logo_url" className="rounded-sm border-gray-300 border border-shadow w-[30%] p-2" />
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