import React from 'react'
import { FiSearch, FiHelpCircle } from "react-icons/fi";
import { MdLocalOffer } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div>
        <nav className=" dark:bg-gray-800 flex items-center justify-between px-10 py-4 shadow-sm bg-white">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                {/* Logo */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Swiggy_Logo_2024.webp/1143px-Swiggy_Logo_2024.webp.png" alt="Logo" className="w-auto h-8 object-contain"/>

                {/* Location */}
                <div className="flex items-center gap-1 cursor-pointer">
                    <span className="font-semibold text-amber-50">Other</span>
                    <IoIosArrowDown size={18} className='text-amber-50'/>
                </div>
            </div>

            {/* Right Menu */}
            <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
                <div className="flex items-center gap-2 cursor-pointer">
                    <BsBag size={18} className='text-amber-50' />
                    <span className='text-amber-50'>Swiggy Corporate</span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    <FiSearch size={18} className='text-amber-50' />
                    <span className='text-amber-50'>Search</span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    <MdLocalOffer size={18} className='text-amber-50' />
                    <span className='text-amber-50'>Offers</span>
                    <span className="text-orange-500 text-xs font-bold">NEW</span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    <FiHelpCircle size={18} className='text-amber-50' />
                    <span className='text-amber-50'>Help</span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    <AiOutlineUser size={18} className='text-amber-50'/>
                    <span className='text-amber-50'>Sign In</span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    <IoCartOutline size={20} className='text-amber-50' />
                    <span className='text-amber-50'>Cart</span>
                    <span className="font-bold text-amber-50">0</span>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
