// AddressComponent is the component used to manage address

import { useState } from "react"

export default function AddressComponent() {

    const [addressAction, setAddressAction] = useState('')

    return (
        <div className="flex flex-col">
            <ul className="flex gap-2 cursor-pointer">
                <li onClick={() => setAddressAction('View address')}>View your address</li>
                <li onClick={() => setAddressAction('Add address')}>Add new address</li>
            </ul>

            <div>
                {addressAction}
            </div>
        </div>
    )
}