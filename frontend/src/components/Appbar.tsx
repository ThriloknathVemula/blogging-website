import { Link, useNavigate } from "react-router-dom"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaSquarePlus } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { Avatar } from "./Avatar";

export const Appbar = ()=>{
    const navigate = useNavigate();

    const logoutFn = ()=>{
        localStorage.removeItem("token");
        navigate('/signin');
    }

    return(
        <div className="border-b flex justify-between p-4 md:px-10 md:py-4">
            <Link to={'/blogs'} className="flex text-xl md:text-3xl flex-col justify-center cursor-pointer font-bold">
                Medium
            </Link>
            <div className="flex items-center gap-4">
                <Link to={'/publish'} className="cursor-pointer px-2 py-1 rounded-md flex items-center lg:gap-1 bg-green-500 text-slate-100">
                    <p className="hidden lg:block">New</p>
                    <FaSquarePlus/>
                </Link>
                <div className="logout-btn hidden md:block">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300">
                                <Avatar big={true} authorName={null}/>
                            </MenuButton>
                        </div>
                        <MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                            <div className="py-1">
                            <MenuItem>
                            <button onClick={logoutFn} className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                Log out
                            </button>
                            </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>
                <div className="md:hidden">
                    <IoIosLogOut onClick={logoutFn} className="h-6 w-6 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}