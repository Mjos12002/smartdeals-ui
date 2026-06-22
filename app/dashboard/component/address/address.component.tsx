// AddressComponent is the component used to manage address

import { useEffect, useState } from "react"
import ViewAddressComponent from "./viewaddress.component"
import CreateAddressComponent from "./createaddress.component"

export default function AddressComponent() {

    const [addressAction, setAddressAction] = useState('')
    const [viewAddressStyle, setViewAddressStyle] = useState('flex items-center p-2 text-lg')
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
        <div className="flex flex-col p-2">
            <ul className="flex gap-2 cursor-pointer mb-8">
                <li className={viewAddressStyle} onClick={() => processAdddress('View address')}>View address</li>
                <li className={addAddressStyle} onClick={() => processAdddress('Add address')}>New address</li>
            </ul>
            <div>
                {addressAction == "View address" ? <ViewAddressComponent /> : <div></div>}
                {addressAction == "Add address" ? <CreateAddressComponent /> : <div></div>}
            </div>
        </div>
    )
}