'use client'
import { MapPinIcon, UserCircleIcon, WalletIcon } from "@heroicons/react/16/solid"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { HomeIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import ProfileComponent from "./component/profile/profile.component"
import BusinessComponent from "./component/business/business.component"
import AddressComponent from "./component/address/address.component"
import ProductComponent from "./component/product/product.component"

export default function Dashboard() {

    const [componentName, setComponentType] = useState('')
    const processComponent = (t: string) => {
        setComponentType(t)
    }

    return (
        <div className="flex bg-gradient-to-r md:from-[#DEDEDE] via-[#F5F5F5] to-[#FAFAFA] h-screen overflow-y-scroll p-4">
            <div className="basis-1/5 h-[90%] bg-[#F5F5F5] border border-[#D9D7D7] rounded-md drop-shadow-sm p-2">
                <h2 className="text-[#00AB00] text-2xl mb-3 font-bold">Quick Actions</h2>
                <ul className="flex gap-2 flex-col ">
                    <li className="w-[90%] flex items-center p-2 gap-1 cursor-pointer hover:bg-[#E0E0E0] hover:border-[#D1D1D1] hover:rounded-md">
                        <UserCircleIcon width={23} height={23} fill="#F0C402" color="#F0C402" />
                        <div className="font-thin" onClick={() => processComponent('Profile')}>Profile</div>
                    </li>
                    <li className="w-[90%] flex items-center p-2 gap-1 cursor-pointer hover:bg-[#E0E0E0] hover:border-[#D1D1D1] hover:rounded-md">
                        <MapPinIcon width={23} height={23} fill="#F51E02" />
                        <div className="font-thin" onClick={() => processComponent('Address')}>Address</div>
                    </li>
                    <li className="w-[90%] flex items-center p-2 gap-1 cursor-pointer hover:bg-[#E0E0E0] hover:border-[#D1D1D1] hover:rounded-md">
                        <HomeIcon width={23} height={23} fill="#2CC900" color="#2CC900" />
                        <div className="font-thin" onClick={() => processComponent('Business')}>Business</div>
                    </li>
                    <li className="w-[90%] flex items-center p-2 gap-1 cursor-pointer hover:bg-[#E0E0E0] hover:border-[#D1D1D1] hover:rounded-md">
                        <ShoppingBagIcon width={23} height={23} fill="#024DF0" color="#024DF0" />
                        <div className="font-thin" onClick={() => processComponent('Products')}>Products</div>
                    </li>

                </ul>
            </div>

            <div className="basis-4/5 h-[90%] p-2">
                <div className="w-[100%] bg-[#F5F5F5] border border-[#D9D7D7] rounded-md drop-shadow-sm">
                    {componentName == "Profile" && <ProfileComponent />}
                    {componentName == "Business" && <BusinessComponent />}
                    {componentName == "Address" && <AddressComponent />}
                    {componentName == "Products" && <ProductComponent />}
                </div>
            </div>
        </div>
    )
}


