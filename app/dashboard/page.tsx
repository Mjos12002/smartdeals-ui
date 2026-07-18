'use client'
import { MapPinIcon, UserCircleIcon, WalletIcon } from "@heroicons/react/16/solid"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { HomeIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import ProfileComponent from "./component/profile/profile.component"
import BusinessComponent from "./component/business/business.component"
import AddressComponent from "./component/address/address.component"
import ProductComponent from "./component/product/product.component"

//Dashboard is functional component used to manage the user dashboard
export default function Dashboard() {

    const [componentName, setComponentType] = useState<string>('')
    const [visibility, setVisibility] = useState<string>('hidden')

    const styling = "bg-[#ff00aa]"

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setVisibility(visibility === 'hidden' ? 'visible absolute bg-white z-100 w-[50%]' : 'hidden')
    }
    useEffect(() => {
        console.log(`use effect ${componentName}`)
    }, [componentName])

    const processComponent = (t: string) => {
        setComponentType(t)
        setVisibility('hidden')
    }

    return (
        <div className="flex bg-[#EDEDED] h-screen overflow-y-scroll flex-col">
            <div className="bg-[#00BA16] size-fit p-2 rounded-r-sm mt-2 drop-shadow-sm cursor-pointer">
                <Cog6ToothIcon width={24} height={24} color="#fff" onClick={toggleMenu} />
            </div>
            <div className="relative">
                <div className={visibility}>
                    <div className="bg-white rounded-r-md size-fit drop-shadow-sm w-[100%]">
                        <ul className="flex gap-2 flex-col">
                            <li className="w-[100%] flex items-center p-1 gap-1 cursor-pointer hover:bg-[#F5F5F5] hover:border-[#D1D1D1]">
                                <UserCircleIcon width={23} height={23} fill="#F0C402" color="#F0C402" />
                                <div className="font-thin" onClick={() => processComponent('Profile')}>Profile</div>
                            </li>
                            <li className="w-[100%] flex items-center p-1 gap-1 cursor-pointer hover:bg-[#F5F5F5] hover:border-[#D1D1D1]">
                                <HomeIcon width={23} height={23} fill="#2CC900" color="#2CC900" />
                                <div className="font-thin" onClick={() => processComponent('Business')}>Business</div>
                            </li>
                            <li className="w-[100%] flex items-center p-1 gap-1 cursor-pointer hover:bg-[#F5F5F5] hover:border-[#D1D1D1]">
                                <ShoppingBagIcon width={23} height={23} fill="#024DF0" color="#024DF0" />
                                <div className="font-thin" onClick={() => processComponent('Products')}>Products</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-1 absolute w-[100%]">
                    <div className="w-[100%] bg-[#fff] border border-[#fff] rounded-md drop-shadow-sm">
                        {componentName == "Profile" && <ProfileComponent />}
                        {componentName == "Business" && <BusinessComponent />}
                        {componentName == "Address" && <AddressComponent />}
                        {componentName == "Products" && <ProductComponent />}
                    </div>
                </div>

            </div>
        </div>
    )
}


