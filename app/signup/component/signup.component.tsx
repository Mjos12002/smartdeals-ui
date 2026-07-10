'use client'
import { userSignUp, FormState } from "@/action/validation.action"
import { useActionState } from "react"

// form initial state
var initialState: FormState = {
    errors: [],
    message: ""
}

//SignUpComponent is used to render the signup form and handle its submission
const SignUpComponent = () => { 

    const [state, signup, isPending] = useActionState(userSignUp, undefined)

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="ml-0 mt-6 font-medium text-3xl text-[#0FCF02]">Sign Up</div>
            <form action={ signup }>
                <ul className="flex gap-4 flex-col m-0">
                    <li>
                        <input type="text" placeholder="Email" name="email" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="password" placeholder="Password" name="password" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="password" placeholder="Confirm Password" name="confirm_password" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <button type="submit" disabled={isPending} className="bg-[#00021C] rounded-sm text-white p-2 cursor-pointer">{isPending ? "Processing ...." : "Submit"}</button>
                    </li>
                    <li>
                      
                        {
                            state?.code == 200 ? <span>{state?.message}</span> : <span></span>
                        }
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default SignUpComponent
