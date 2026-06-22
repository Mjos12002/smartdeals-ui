'use client'

import { useActionState } from "react";
import { userSignIn, FormState } from "@/action/signin.action";
import { useRouter } from "next/navigation";

var initialState: FormState = {
    message: "",
    token: "",
    username: "",
    id: "",
    role: "",
    errors: []
}

// SignInComponent used in SignIn page, responsible for rendering the sign in form and handling its submission
const SignInComponent = () => {
    
    const useRoute = useRouter()
    const [state, signin, isPending] = useActionState(userSignIn, undefined)

    if (state?.code == 200) {
        useRoute.push("/dashboard")
    }

    return (
        <div className="flex flex-col gap-4">

            <div className="ml-0 mt-6 font-medium text-3xl text-[#0FCF02]">Sign In</div>
            <form action={signin}>
                <ul className="flex gap-4 flex-col m-0">
                    <li>
                        <input type="text" placeholder="Username" name="username" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <input type="password" placeholder="Password" name="password" className="rounded-sm border-gray-300 border border-shadow w-[100%] p-2" />
                    </li>
                    <li>
                        <button type="submit" disabled={isPending} className="bg-[#00021C] rounded-sm text-white p-2">{isPending ? "Processing ...." : "Submit"}</button>
                    </li>
                    <li>
                        {
                            state?.code == 200 ? <span>{state?.message}</span> : <span></span>
                        }
                        {
                            state?.token
                        }

                    </li>
                </ul>
            </form>
        </div>
    )
}

export default SignInComponent