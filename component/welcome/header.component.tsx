'use client'
export default function Header() {
    return (
        <header className="flex justify-between p-2">
            <div className="logo flex">
                <div>
                    Smart
                </div>
                <div>
                    Deals
                </div>
            </div>
            <div className="header-menu">
                <ul className="flex gap-4 mr-4">
                    <li className="bg-black border rounded-lg text-white p-2">Home</li>
                    <li className="p-1">About Us</li>
                    <li className="p-1">Sign In</li>
                    <li className="p-1">Sign Up</li>
                </ul>
            </div>
        </header>
    )
}