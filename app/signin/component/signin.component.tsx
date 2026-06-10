'use client'

import { useActionState } from "react";
import { submitData, FormState } from "@/action/signin.action";


// SignInComponent used in SignIn page, responsible for rendering the sign in form and handling its submission
const SignInComponent = () => {

    const [state, signin, isPending] = useActionState(submitData, undefined)

    return (
        <div className="flex flex-col gap-4">

            <div className="ml-0 mt-6 font-medium text-3xl text-[#00052B]">Sign In</div>
            <form action={signin}>
                <ul className="flex gap-4 flex-col m-0">
                    <li>
                        <input type="text" placeholder="Username" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="password" placeholder="Password" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <button type="submit" className="bg-blue-500 rounded-sm text-white p-2">Sign In</button>
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

export default SignInComponent