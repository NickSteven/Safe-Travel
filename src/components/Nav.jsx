import React from 'react'
import profile from '../assets/profile.jpg'
import { MdLogout, MdOutlinePeopleAlt, MdOutlinePayments } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";

const Nav = () => {
    return (
        <div className="ml-5 rounded-3xl my-2 flex flex-col bg-[#bfa084] px-10">
            {/**Profile pic and name */}
            <div className="flex justify-center items-center flex-col mt-7 mb-7">
                <img className="rounded-full object-fill" src={profile} height={500} width={100} />
                <h1 className="text-xl mt-3 text-white">Safe Travels</h1>
                <p className="text-white">safetravels@gmail.com</p>

            </div>

            {/**Menu */}
            <ul>
                <div className='flex items-center gap-3'>
                    <LuLayoutDashboard size={20} color='white' />
                    <li className="my-5 hover:cursor-pointer menu-link text-white font-bold">Tableau de bord</li>
                </div>
                <div className='flex items-center gap-5'>
                    <MdOutlinePeopleAlt size={20} color='white' />
                    <li className="my-5 hover:cursor-pointer menu-link text-white font-bold">Teams</li>
                </div>
                <div className='flex items-center gap-5'>
                    <MdOutlinePayments size={20} color='white' />
                    <li className="my-5 hover:cursor-pointer menu-link text-white font-bold">Payments</li>
                </div>
                <div className='flex items-center gap-5'>
                    <FaRegCalendarCheck size={20} color='white' />
                    <li className="my-5 hover:cursor-pointer menu-link text-white font-bold">Attendance</li>
                </div>
                <div className='flex items-center gap-5'>
                    <IoSettingsOutline size={20} color='white' />
                    <li className="my-5 hover:cursor-pointer menu-link text-white font-bold">Settings</li>
                </div>
            </ul>
            {/**Logout */}
            <div className="flex justify-center items-center hover:cursor-pointer gap-2 bg-white my-5 py-2 px-3 rounded-md">
                <MdLogout color='#bfa084' />
                <h1 className="align-top mb-1 font-semibold text-[#bfa084]">Logout</h1>
            </div>
        </div>
    )
}

export default Nav