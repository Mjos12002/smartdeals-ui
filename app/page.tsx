export default function Welcome() {
    return (
        <div className="h-screen">
            <header className="flex justify-between p-2">
                <div className="logo flex">
                    <div>
                        Smart
                    </div>
                    <div>
                        Deals
                    </div>
                </div>
                <div className="header-menu">
                    <ul className="flex gap-4 mr-4">
                        <li className="bg-black border rounded-lg text-white p-2">Home</li>
                        <li className="p-2">About</li>
                        <li className="p-2">Contact</li>
                    </ul>
                </div>
            </header>

            <div className="flex justify-center">
                <div className="border border-gray-300 rounded-lg flex w-[50%] justify-between">
                    <input placeholder="Search" className="p-1 m-2 w-[80%]" />
                    <div className="search-button p-2 flex items-center bg-[#010C63] rounded-r-lg ">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>

                    </div>
                </div>
            </div>

            <div className="bg-white m-7 h-screen rounded-lg border-gray-300 border border-shadow">
                
                <div className="ml-5 mt-4 font-medium text-3xl text-[#02B502]">Latest promotions</div>
                
                <div className="mt-8 flex justify-center w-full">
                    <ul className="flex gap-4">
                        <li className="flex items-center  bg-[#049F04] pl-4 pr-4 text-white border rounded-lg">All</li>
                        <li className="p-2">Cosmetics</li>
                        <li className="p-2">Toys</li>
                        <li className="p-2">Groceries</li>
                        <li className="p-2">Fashion</li>
                        <li className="p-2">Supermarket / Store</li>
                    </ul>
                </div>


                <div className="flex justify-center">
                    <div className="flex flex-wrap  mt-15 w-[98%]">

                        <div className="w-[25%] flex flex-col p-1">

                            <div className="border border-gray-300 bg-[url('/cosmetics.jpg')] bg-cover h-90 product-card justify-end flex flex-col">
                                <div className="p-1 w-full product-details p-2 flex flex-col bg-white">
                                    <span className="font-bold">Eye Lashes</span>
                                    <span>Price: <span>700 RWF</span> - <span className="text-red-500 line-through text-sm">1000 RWF</span></span>
                                    <span>10% Off</span>
                                    <span className="font-light text-sm text-[#595757]">Simba Supermarket (Gishushu)</span>
                                </div>
                            </div>

                        </div>

                        <div className="text-black-500 w-[25%] flex flex-col p-1">

                            <div className="border border-gray-300 bg-[url('/grocery.png')] bg-cover h-90 product-card justify-end flex flex-col">
                                <div className="p-1 w-full product-details p-2 flex flex-col bg-white">
                                    <span className="font-bold">Eye Lashes</span>
                                    <span>Price: <span>700 RWF</span> - <span className="text-red-500 line-through text-sm">1000 RWF</span></span>
                                    <span>10% Off</span>
                                    <span className="font-light text-sm text-[#595757]">Simba Supermarket (Gishushu)</span>
                                </div>
                            </div>

                        </div>
                        <div className="text-black-500 w-[25%] flex flex-col p-1">

                            <div className="border border-gray-300 bg-[url('/dressing.png')] bg-cover h-90 product-card justify-end flex flex-col">
                                <div className="p-1 w-full product-details p-2 flex flex-col bg-white">
                                    <span className="font-bold">Eye Lashes</span>
                                    <span>Price: <span>700 RWF</span> - <span className="text-red-500 line-through text-sm">1000 RWF</span></span>
                                    <span>10% Off</span>
                                    <span className="font-light text-sm text-[#595757]">Simba Supermarket (Gishushu)</span>
                                </div>
                            </div>

                        </div>
                        <div className="text-black-500 w-[25%] flex flex-col p-1">

                            <div className="border border-gray-300 bg-[url('/dressing.png')] bg-cover h-90 product-card justify-end flex flex-col">
                                <div className="p-1 w-full product-details p-2 flex flex-col bg-white">
                                    <span className="font-bold">Eye Lashes</span>
                                    <span>Price: <span>700 RWF</span> - <span className="text-red-500 line-through text-sm">1000 RWF</span></span>
                                    <span>10% Off</span>
                                    <span className="font-light text-sm text-[#595757]">Simba Supermarket (Gishushu)</span>
                                </div>
                            </div>

                        </div>

                        <div className="text-black-500 w-[25%] flex flex-col p-1">

                            <div className="border border-gray-300 bg-[url('/dressing.png')] bg-cover h-90 product-card justify-end flex flex-col">
                                <div className="p-1 w-full product-details p-2 flex flex-col bg-white">
                                    <span className="font-bold">Eye Lashes</span>
                                    <span>Price: <span>700 RWF</span> - <span className="text-red-500 line-through text-sm">1000 RWF</span></span>
                                    <span>10% Off</span>
                                    <span className="font-light text-sm text-[#595757]">Simba Supermarket (Gishushu)</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}