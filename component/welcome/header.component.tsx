'use server'

import Link from "next/link"

export default async function Header() {
    return (
        <header className="flex justify-between p-2">
            <div className="logo flex rounded-sm border border-[#fff] p-0">
                <div className="flex items-center">
                    Smart
                </div>
                <div className="flex items-center rounded-sm font-thin">
                    Deals
                </div>
            </div>
            <div className="header-menu">
                <ul className="flex gap-4 mr-4 bg-[#E1E1E3] text-black p-0 rounded-lg opacity-80 border border-[#fff]">
                    <li className="bg-[#000] border rounded-lg text-white p-2"><Link href="/">Home</Link></li>
                    <li className="p-1 flex items-center"><Link href="/about">About Us</Link></li>
                    <li className="p-1 flex items-center"><Link href="/signin">Sign In</Link></li>
                    <li className="p-1 flex items-center"><Link href="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </header>
    )
}