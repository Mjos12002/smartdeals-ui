// View address component is used to list the addresses
import { useEffect, useState } from "react"
import { httpService } from "@/service/http.service"
import { getAddress } from "@/action/address.action"

interface IAddress {
    street: string
    popular_name: string
    province: string
    district: string
    sector: string
    long_lat: string
    email: string
    phone_number: string
    twitter: string
    facebook: string
}

// ViewAddressComponent is used to load the list of addresses
export default function ViewAddressComponent() {

    const [address, setAddress] = useState<IAddress[]>(() => [])

    useEffect(() => {
        getAddress()
            .then((r) => {
                const dt: IAddress[] = r.data
                setAddress(prev => dt)
            })
            .catch((e) => e)
    }, [])

    return (
        <div className="flex flex-col gap-4 p-4">
            <h2 className="text-2xl font-bold text-[#010121]">
                Available Addresses
            </h2>
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-md border border-[#CCCCCC]">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-large text-body bg-[#060813] border-b border-[#060813] text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium text-[#20C402]">Street</th>
                            <th scope="col" className="px-6 py-3 font-medium">Popular name</th>
                            <th scope="col" className="px-6 py-3 font-medium">Province</th>
                            <th scope="col" className="px-6 py-3 font-medium">District</th>
                            <th scope="col" className="px-6 py-3 font-medium">Sector</th>
                            <th scope="col" className="px-6 py-3 font-medium">Longitude / Latitude</th>
                            <th scope="col" className="px-6 py-3 font-medium">Email</th>
                            <th scope="col" className="px-6 py-3 font-medium">Phone number</th>
                            <th scope="col" className="px-6 py-3 font-medium">Twitter</th>
                            <th scope="col" className="px-6 py-3 font-medium">Facebook</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            address ? address.map(d => (
                                <tr className="bg-neutral-primary border-b border-[#CCCCCC]" key={d.popular_name}>
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#1DB300] font-bold">
                                        {d.street}
                                    </th>
                                    <td className="px-6 py-4">
                                        {d.popular_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.province}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.district}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.sector}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.long_lat}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.phone_number}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.twitter}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.facebook}
                                    </td>
                                </tr>
                            )) : <tr className="text-lg"><td colSpan={10}>No address found</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}