import Header from "@/component/welcome/header.component";
import SignUpComponent from "./component/signup.component";

export default function SignUp() {
    return (
        <div className="h-screen overflow-y-scroll">

            <Header />

            <div className="bg-white m-4 h-screen rounded-lg border-[#E8E8E8] border border-shadow overflow-y-scroll">

                <div className="flex justify-stretch">
                    <div className="flex flex-row w-[100%]">
                        
                        <div className="basis-1/3 flex flex-col items-center justify-center">
                            <div className="w-[90%]">
                                <SignUpComponent />
                            </div>
                        </div>

                        <div className="basis-2/3 h-screen flex flex-col items-center justify-center relative">

                            <div className="w-[100%] h-screen bg-red-200 absolute top-0 left-0 bg-[#010014] opacity-60 bg-gradient-to-r md:from-[#FCFCFC] via-[#2BCEE3] to-[#2B72E3]">
                            </div>
                            <div className="z-10 flex flex-col items-center justify-center bg-[#02A8B8] p-2 border border-[#fff] rounded-sm opacity-70">
                                <h1 className="text-[#fff] text-6xl whitespace-nowrap">You don't have an account?</h1>
                                <h3 className="text-[#F7F7F7] whitespace-nowrap">Sign Up to start your business</h3>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}