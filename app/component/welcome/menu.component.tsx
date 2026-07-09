import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, Bars4Icon } from '@heroicons/react/20/solid'
import Link from "next/link"

// MenuComponent used to display the menu items in the header component
export default function MenuComponent({ username }: { username?: string }) {
    return (
        <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50">
                <Bars4Icon className="h-6 w-6 text-[#10C200]" />
            </MenuButton>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <Link className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" href="/">Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" href="/about">About Us</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" href="/signin">Sign In</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" href="/signup">Sign Up</Link>
                    </MenuItem>
                    <MenuItem>
                        {username ? <span className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">{username}</span> : ''}
                    </MenuItem>
                    <form action="#" method="POST">
                        <MenuItem>
                            <button
                                type="submit"
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                            >
                                Sign out
                            </button>
                        </MenuItem>
                    </form>
                </div>
            </MenuItems>
        </Menu>
    )
}