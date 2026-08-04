'use server'

import { cookies, headers } from "next/headers"
import Link from "next/link"
import MenuComponent from "./menu.component"

//Header is the server component used to render the header of the application.
export default async function Header() {

    const cookie = await cookies()
    const token = cookie.get("token")?.value
    const header = await headers()
    console.log("url: ", header.get("x-url"))

    return (
        <header className="flex justify-between p-2 bg-[#F7F7F7]">
            <div className="bg-[#000] flex text-[#fff] m-0 rounded-md shadow-md border border-[#EDEDED]">
                <div className="flex items-center p-1">
                    Smart
                </div>
                <div className="flex items-center font-bold bg-[#fff] text-[#00A60E] p-1">
                    Deals
                </div>
            </div>
            <div className="hidden sm:flex justify-center items-center">
                <ul className="flex gap-4 bg-[#E1E1E3] text-black opacity-80 border border-[#fff] m-0 p-0">
                    <li className="p-2 bg-[#000] text-white"><Link href="/">Home</Link></li>
                    <li className="p-2 flex items-center"><Link href="/about">About Us</Link></li>
                    <li className="p-2 flex items-center"><Link href="/signin">Sign In</Link></li>
                    <li className="p-2 flex items-center"><Link href="/signup">Sign Up</Link></li>
                    {token ? <li className="p-1 flex items-center"><Link href="/dashboard">{cookie.get("username")?.value}</Link></li> : ''}
                </ul>
            </div>
            <div className="sm:hidden flex items-center">
                <MenuComponent username={cookie.get("username")?.value} />
            </div>
        </header>
    )
}

