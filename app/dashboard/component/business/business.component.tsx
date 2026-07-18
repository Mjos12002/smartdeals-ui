import { useState } from "react"
import ViewBusinessComponent from "./viewbusiness.component"
import CreateBusinessComponent from "./createbusiness.component"

// BusinessComponent is the component used to manage business
export default function BusinessComponent() {

    const [viewBusinessStyle, setViewBusinessStyle] = useState('border-b-3 border-[#3CC202] flex items-center p-2 text-lg')
    const [addBusinessStyle, setAddBusinessStyle] = useState('flex items-center p-2 text-lg')
    const [businessAction, setBusinessAction] = useState('View business')

    // Processing profile action
    const processBusinessAction = (act: string) => {
        setBusinessAction(act)
        if (act == "View business") {
            setViewBusinessStyle("border-b-3 border-[#3CC202] flex items-center p-2 text-lg")
            setAddBusinessStyle("flex items-center p-2 text-lg")
        }
        if (act == "Add business") {
            setViewBusinessStyle("flex items-center p-2 text-lg")
            setAddBusinessStyle("border-b-3 border-[#3CC202] flex items-center p-2 text-lg")
        }
    }

    return (
        <div className="flex flex-col p-2">
            <ul className="flex gap-2 cursor-pointer">
                <li className={viewBusinessStyle} onClick={() => processBusinessAction('View business')}>View business</li>
                <li className={addBusinessStyle} onClick={() => processBusinessAction('Add business')}>Add business</li>
            </ul>

            <div className="border-t border-t-[#02BA02]">
                {businessAction == "View business" && <ViewBusinessComponent />}
                {businessAction == "Add business" && <CreateBusinessComponent />}
            </div>
        </div>
    )
}