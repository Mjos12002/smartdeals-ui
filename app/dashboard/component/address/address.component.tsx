// AddressComponent is the component used to manage address

import { useEffect, useState } from "react"
import ViewAddressComponent from "./viewaddress.component"
import CreateAddressComponent from "./createaddress.component"

// AddressComponent is used to create address
export default function AddressComponent() {

    const [addressAction, setAddressAction] = useState('View address')
    const [viewAddressStyle, setViewAddressStyle] = useState('border-b-3 border-[#3CC202] flex items-center p-2 text-lg')
    const [addAddressStyle, setAddAddressStyle] = useState('flex items-center p-2 text-lg')

    const processAdddress = (act: string) => {
        setAddressAction(act)
        if (act == "View address") {
            setViewAddressStyle('border-b-3 border-[#3CC202] flex items-center p-2 text-lg')
            setAddAddressStyle('flex items-center p-2 text-lg')
        }
        if (act == "Add address") {
            setViewAddressStyle('flex items-center p-2 text-lg')
            setAddAddressStyle('border-b-3 border-[#3CC202] flex items-center p-2 text-lg')
        }

    }

    return (
        <div className="flex flex-col p-1">
            <ul className="flex gap-2 cursor-pointer">
                <li className={viewAddressStyle} onClick={() => processAdddress('View address')}>View address</li>
                <li className={addAddressStyle} onClick={() => processAdddress('Add address')}>New address</li>
            </ul>
            <div className="border-t border-t-[#02BA02]">
                {addressAction == "View address" ? <ViewAddressComponent /> : <div></div>}
                {addressAction == "Add address" ? <CreateAddressComponent /> : <div></div>}
            </div>
        </div>
    )
}