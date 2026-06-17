import { MapPinIcon, UserCircleIcon, WalletIcon } from "@heroicons/react/16/solid"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/outline"
import { HomeIcon } from "@heroicons/react/24/outline"

export default function Dashboard() {
    return (
        <div className="flex flex-rows bg-gradient-to-r md:from-[#DEDEDE] via-[#F5F5F5] to-[#FAFAFA] h-screen overflow-y-scroll p-4">
            <div className="basis-1/5 h-[90%] bg-[#F5F5F5] border border-[#D9D7D7] rounded-md drop-shadow-sm p-2">
                <h2 className="text-[#00AB00] text-2xl mb-3 font-medium">Quick Actions</h2>
                <ul className="flex gap-2 flex-col ">
                    <li className="w-[90%] flex items-center gap-2">
                        <UserCircleIcon width={23} height={23} fill="#F0C402" color="#F0C402" />
                        <div>Profile</div>
                    </li>
                    <li className="w-[90%] flex items-center gap-2">
                        <MapPinIcon width={23} height={23} fill="#F51E02" />
                        <div>Address</div>
                    </li>
                    <li className="w-[90%] flex items-center gap-2">
                        <HomeIcon width={23} height={23} fill="#2CC900" color="#2CC900" />
                        <div>Business</div>
                    </li>
                    <li className="w-[90%] flex items-center gap-2">
                        <ShoppingBagIcon width={23} height={23} fill="#024DF0" color="#024DF0" />
                        <div>Products</div>
                    </li>

                </ul>
            </div>

            <div>
                Clicked something here
            </div>
        </div>
    )
}


