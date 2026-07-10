'use server'

import { cookies } from "next/headers"
import Link from "next/link"
import MenuComponent from "./menu.component"

//Header is the server component used to render the header of the application.
export default async function Header() {

    const cookie = await cookies()
    const token = cookie.get("token")?.value

    return (
        <header className="flex justify-between p-2 bg-[#F7F7F7]">
            <div className="bg-[#000] flex border border-[#002C61] text-[#fff] m-1">
                <div className="flex items-center p-1">
                    Smart
                </div>
                <div className="flex items-center font-thin bg-[#fff] text-[#01224b] p-1">
                    Deals
                </div>
            </div>
            <div className="hidden sm:flex justify-center items-center">
                <ul className="flex gap-4 bg-[#E1E1E3] text-black rounded-lg opacity-80 border border-[#fff] m-0 p-0">
                    <li className="p-2 bg-[#000] border rounded-lg text-white"><Link href="/">Home</Link></li>
                    <li className="p-2 flex items-center"><Link href="/about">About Us</Link></li>
                    <li className="p-2 flex items-center"><Link href="/signin">Sign In</Link></li>
                    <li className="p-2 flex items-center"><Link href="/signup">Sign Up</Link></li>
                    {token ? <li className="p-1 flex items-center">{cookie.get("username")?.value}</li> : ''}
                </ul>
            </div>
            <div className="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden flex items-center">
                <MenuComponent username={cookie.get("username")?.value} />
            </div>
        </header>
    )
}

