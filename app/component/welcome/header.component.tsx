'use server'

import { cookies } from "next/headers"
import Link from "next/link"

export default async function Header() {

    const cookie = await cookies()
    const token = cookie.get("token")?.value

    return (
        <header className="flex justify-between p-2 bg-[#F7F7F7]">
            <div className="logo flex rounded-sm border border-[#fff]">
                <div className="flex items-center">
                    Smart
                </div>
                <div className="flex items-center rounded-sm font-thin">
                    Deals
                </div>
            </div>
            <div className="header-menu">
                <ul className="flex gap-4 mr-4 bg-[#E1E1E3] text-black rounded-lg opacity-80 border border-[#fff] m-0">
                    <li className="p-2 bg-[#000] border rounded-lg text-white"><Link href="/">Home</Link></li>
                    <li className="p-2 flex items-center"><Link href="/about">About Us</Link></li>
                    <li className="p-2 flex items-center"><Link href="/signin">Sign In</Link></li>
                    <li className="p-2 flex items-center"><Link href="/signup">Sign Up</Link></li>
                    {token ? <li className="p-1 flex items-center">{cookie.get("username")?.value}</li>: ''}
                </ul>
            </div>
        </header>
    )
}