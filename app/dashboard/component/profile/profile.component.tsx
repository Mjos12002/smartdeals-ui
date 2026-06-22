// ProfileComponent is the component used to manage profiles
import { useState } from "react"
import ViewProfileComponent from "./viewprofile.component"
import CreateProfileComponent from "./createprofile.component"

//ProfileComponent is a component used to manage the profile
export default function ProfileComponent() {

    const [viewProfileStyle, setViewProfileStyle] = useState('flex items-center p-2 text-lg')
    const [addProfileStyle, setAddProfileStyle] = useState('flex items-center p-2 text-lg')
    const [profileAction, setProfileAction] = useState("")
    const [token, setToken] = useState<string>(() => "")
    

    // Processing profile action
    const processProfileAction = (act: string) => {
        setProfileAction(act)
        if(act == "View your profile") {
            setViewProfileStyle("border-b-3 border-[#3CC202] flex items-center p-2 text-lg")
            setAddProfileStyle("flex items-center p-2 text-lg")
        }
        if(act == "Add your profile") {
            setViewProfileStyle("flex items-center p-2 text-lg")
            setAddProfileStyle("border-b-3 border-[#3CC202] flex items-center p-2 text-lg")
        }
    }

    return (
        <div className="flex flex-col p-2">
            <ul className="flex gap-2 cursor-pointer">
                <li className={viewProfileStyle} onClick={() => processProfileAction('View your profile')}>View profile</li>
                <li className={addProfileStyle} onClick={() => processProfileAction('Add your profile')}>Add profile</li>
            </ul>
            <div>
                {profileAction == "View your profile" && <ViewProfileComponent />}
                {profileAction == "Add your profile" && <CreateProfileComponent />}
            </div>
        </div>
    )
}