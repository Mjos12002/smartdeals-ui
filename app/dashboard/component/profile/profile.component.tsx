// ProfileComponent is the component used to manage profiles
import { useState } from "react"
import ViewProfileComponent from "./viewprofile.component"
import CreateProfileComponent from "./createprofile.component"

//ProfileComponent is a component used to manage the profile
export default function ProfileComponent() {

    const [viewProfileStyle, setViewProfileStyle] = useState('border-b-3 border-[#3CC202] flex items-center p-2 text-lg')
    const [addProfileStyle, setAddProfileStyle] = useState('flex items-center p-2 text-lg')
    const [profileAction, setProfileAction] = useState("View profile")    

    // Processing profile action
    const processProfileAction = (act: string) => {
        setProfileAction(act)
        if(act == "View profile") {
            setViewProfileStyle("border-b-3 border-[#3CC202] flex items-center p-2 text-lg")
            setAddProfileStyle("flex items-center p-2 text-lg")
        }
        if(act == "New profile") {
            setViewProfileStyle("flex items-center p-2 text-lg")
            setAddProfileStyle("border-b-3 border-[#3CC202] flex items-center p-2 text-lg")
        }
    }

    return (
        <div className="flex flex-col p-2">
            <ul className="flex gap-2 cursor-pointer">
                <li className={viewProfileStyle} onClick={() => processProfileAction('View profile')}>View profile</li>
                <li className={addProfileStyle} onClick={() => processProfileAction('New profile')}>New profile</li>
            </ul>
            <div className="border-t border-t-[#02BA02]">
                {profileAction == "View profile" && <ViewProfileComponent />}
                {profileAction == "New profile" && <CreateProfileComponent />}
            </div>
        </div>
    )
}