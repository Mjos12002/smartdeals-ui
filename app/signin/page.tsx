// app/siginin/page.tsx
import Image from "next/image"
import ProductCategory from "@/component/welcome/productcategory.component";
import Header from "@/component/welcome/header.component";
import SignInComponent from "./component/signin.component";

export default function Signin() {
    return (
        <div className="overflow-y-scroll">

            <Header />

            <div className="bg-white m-4 h-screen rounded-lg border-[#9193A3] border border-shadow overflow-y-scroll">

                <div className="flex justify-stretch">
                    <div className="flex flex-row w-[100%]">

                        <div className="basis-1/3 flex flex-col items-center justify-center">
                            <div className="w-[90%]">
                                <SignInComponent />
                            </div>

                        </div>
                        <div className="basis-2/3 bg-[#010014] opacity-40 bg-gradient-to-r md:from-[#FCFCFC] via-[#5C5B5B] to-[#020129] h-screen flex flex-col items-center justify-center">
                            <h1 className="text-white text-6xl">You don't have an account?</h1>
                            <h3 className="text-[#38E802]">Sign Up to start your business</h3>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}