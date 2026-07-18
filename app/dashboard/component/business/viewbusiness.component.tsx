import { getBusiness } from "@/action/business.action"
import { httpService } from "@/service/http.service"
import { unescape } from "querystring"
import { useEffect, useState } from "react"

interface BusinessResponse {
    name: string
    description: string
    logo_url: string
}



// ViewBusinessComponent is used to load the list of businesses
export default function ViewBusinessComponent() {

    const [business, setBusiness] = useState<BusinessResponse[]>([{ name: "", description: "", logo_url: "" }])
    const [responseCode, setResponseCode] = useState<Number>(0)
    useEffect(() => {
        getBusiness()
            .then((r) => {
                if (r.data != null && r.data != undefined) {
                    setBusiness(r.data)
                } else {
                    setResponseCode(r.code)
                }
            })
    }, [])
    return (
        <div className="flex flex-col gap-4 p-1">
            <div>
                {responseCode == 401 ? <div>Unauthorized user</div> : <span></span>}
            </div>
            <h2 className="text-2xl font-bold text-[#010121]">
                Available businesses
            </h2>
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-md border border-[#CCCCCC]">
                {
                    business != undefined && <div>
                        <table className="w-full text-sm text-left rtl:text-right text-body">
                            <thead className="text-large text-body bg-[#060813] border-b border-[#060813] text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3 font-medium text-[#20C402]">Name</th>
                                    <th scope="col" className="px-6 py-3 font-medium">Description</th>
                                    <th scope="col" className="px-6 py-3 font-medium">Logo</th>
                                    <th scope="col" className="px-6 py-3 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    business.map(d => (
                                        <tr className="bg-neutral-primary border-b border-[#CCCCCC]" key={d.logo_url}>
                                            <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#1DB300] font-bold">
                                                {d.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {d.description}
                                            </td>
                                            <td className="px-6 py-4">
                                                {d.logo_url}
                                            </td>
                                            <td className="px-6 py-4">
                                                Edit
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    )
}