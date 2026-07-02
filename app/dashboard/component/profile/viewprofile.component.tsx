import { getProfile } from "@/action/profile.action"
import { useEffect, useState } from "react"

interface ProfileResponse {
    status: string
    code: number
    message: string,
    profile: {
        first_name: string
        last_name: string
    }
}

//ViewProfileComponent is used to view profile
export default function ViewProfileComponent() {

    const [profile, setProfile] = useState<ProfileResponse>({ status: "", code: 0, message: "", profile: { first_name: "", last_name: "" } })
    useEffect(() => {
        getProfile()
            .then(res => {
                console.log(res)
                const x: ProfileResponse = res
                setProfile(x)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="flex flex-col gap-4 p-4">
            <div>
                <ul className="flex gap-4 flex-col m-0">
                    <li>
                        <h1 className="text-4xl text-[#010130]">{ profile.profile.first_name}</h1>
                    </li>
                    <li>
                        <h4 className="text-[#6A686A]">{ profile.profile.last_name}</h4>
                    </li>
                </ul>
            </div>
        </div>
    )
}