import { useActionState } from "react"
import { createProfile } from "@/action/profile.action"

// CreateProfileComponent is used to create a profile
export default function CreateProfileComponent() {

    const [state, addProfile, isPending] = useActionState(createProfile, undefined)

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-[#080026] mt-6">
                New profile
            </h2>
            <div>
                <form action={addProfile}>
                    <ul className="flex gap-4 flex-col m-0">
                        <li>
                            <input type="text" placeholder="First name" name="first_name" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Last name" name="last_name" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Email" name="email" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                        </li>
                        <li>
                            <input type="text" placeholder="Mobile Phone Number" name="phone number" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
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