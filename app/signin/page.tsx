// app/siginin/page.tsx
import SignInComponent from "./component/signin.component";

//Signin is the component used to render the signin page of the application
export default function Signin() {
    return (
        <div className="overflow-y-scroll p-3 bg-[#F0F0F0] h-screen flex flex-col items-center justify-center sm:flex sm:flex-row sm:gap-3 p-3">

            <div className="bg-white w-full lg:basis-1/3 sm:max-md:p-10 p-2 rounded-md border border-[#f1f1f1] shadow-sm">
                <SignInComponent />
            </div>
            <div className="bg-white hidden lg:basis-2/3 lg:flex lg:flex-col items-center justify-center">
                <h1 className="text-[#000014] text-6xl whitespace-nowrap">Welcome to SmartDeals</h1>
                <h3 className="text-[#707070] whitespace-nowrap">a plaform to showcase your business</h3>
            </div>
        </div>
    )
}