// About is used to display the about page of the application.
export default function About() {
    return (
        <div className="overflow-y-scroll m-3 bg-[#F0F0F0] h-screen flex flex-col gap-4 justify-center border border-[#D9D9D9] lg:shadow-md lg:rounded-md p-2 lg:p-6">
            
            <div className="flex flex-col bg-white p-2 rounded-md border border-[#E8E8E8] shadow-md">
                <p className="font-bold text-2xl text-[#004691] pb-2">
                    About Smart Deals
                </p>
                <p className="text-justify">
                    Smart Deals is a web application that provides users with the best deals and discounts on various products and services.
                </p>
            </div>

            <div className="flex flex-col bg-white p-2 rounded-md border border-[#E8E8E8] shadow-md">
                <p className="font-bold text-2xl text-[#004691] pb-2">
                    Our mission
                </p>
                <p className="text-justify pb-10">
                    Our mission is to help our customers <span className="font-bold">save money</span> while shopping online by providing them with the latest deals and offers from different retailers. We strive to make the shopping experience more enjoyable and affordable for our customers.
                </p>
            </div>

            <div className="flex flex-col bg-white p-2 rounded-md border border-[#E8E8E8] shadow-md">
                <p className="font-bold text-2xl text-[#004691] pb-2">
                    Our vision
                </p>
                <p className="text-justify">
                    Our vision is to become the leading destination for shoppers looking for the best deals and discounts online. We aim to revolutionize the way people shop by providing them with a seamless and rewarding experience.
                </p>
            </div>

        </div>
    )
}