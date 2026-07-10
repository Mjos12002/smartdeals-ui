import SignUpComponent from "./component/signup.component";

export default function SignUp() {
    return (
        
        <div className="overflow-y-scroll m-3 bg-[#F0F0F0] h-screen flex flex-col items-center justify-center border border-[#D9D9D9] lg:flex lg:flex-row lg:shadow-md lg:rounded-md">

            <div className="bg-white w-[95%] rounded-md shadow-md p-2 lg:basis-1/3 lg:h-full lg:flex lg:items-center lg:justify-center lg:p-5 lg:rounded-[0px]">
                <SignUpComponent />
            </div>
            <div className="hidden lg:basis-2/3 lg:flex lg:flex-col items-center justify-center h-full bg-[#F5F5F5]">
                <p className="text-[#000014] text-6xl whitespace-nowrap">Welcome to Smart Deals</p>
                <p className="text-[#00BF07] whitespace-nowrap font-thin text-2xl">Make your Deals Smart</p>
            </div>

        </div>
    );
}