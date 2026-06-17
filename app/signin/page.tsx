// app/siginin/page.tsx
import SignInComponent from "./component/signin.component";

export default function Signin() {
    return (
        <div className="overflow-y-scroll">


            <div className="bg-white m-4 h-screen rounded-lg border-[#E8E8E8] border drop-shadow-sm overflow-y-scroll">

                <div className="flex justify-stretch">
                    <div className="flex flex-row w-[100%]">

                        <div className="basis-1/3 flex flex-col items-center justify-center">
                            <div className="w-[90%]">
                                <SignInComponent />
                                
                            </div>
                        </div>
                        <div className="basis-2/3 h-screen flex flex-col items-center justify-center relative">

                            <div className="w-[100%] h-screen bg-red-200 absolute top-0 left-0 bg-[#010014] opacity-90 bg-gradient-to-r md:from-[#FAFAFA] via-[#C2C0C0] to-[#A4A6A4]">
                            </div>
                            <div className="z-10 flex flex-col items-center justify-center bg-[#DB9302] p-2 border border-[#fff] rounded-sm opacity-80">
                                <h1 className="text-[#fff] text-6xl whitespace-nowrap">Welcome to SmartDeals</h1>
                                <h3 className="text-[#F7F7F7] whitespace-nowrap">a plaform to showcase your business</h3>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}