import React from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from "../../assets/svg/logo.svg"
import { RxDashboard } from 'react-icons/rx'
import { FaUserGroup } from 'react-icons/fa6'
import { IoBagOutline, IoSettingsOutline } from 'react-icons/io5'
import { CiShoppingCart } from 'react-icons/ci'
import { TbReceipt } from 'react-icons/tb'

const Sidebar = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-[#fff] flex flex-col gap-6 '>
        <img src={Logo} alt='logo' className='w-[58px] h-[42px] mx-[48px] mt-6'/>

        
        <div className='flex flex-col items-center gap-4'>
            <div onClick={() => {navigate("/dashboard"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/dashboard"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px] rounded-lg  gap-2 flex items-center group cursor-pointer transition-all duration-300 p-[16px] hover:bg-[#ECFFF6]`}>
                <RxDashboard className={`${location.pathname === "/dashboard" ? "text-[#009254]" : "text-[#292D32]"} w-5 h-5  group-hover:text-[#111827] `}/>
                <p className="text-[#111827] font-medium font-inter">Dashboard</p>
            </div>
            <div onClick={() => {navigate("/user-management"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/user-management"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px] rounded-lg  gap-2 flex items-center group cursor-pointer transition-all duration-300 p-[16px] hover:bg-[#ECFFF6]`}>
                <FaUserGroup  className={`${location.pathname === "/user-management" ? "text-[#009254]" : "text-[#292D32]"} w-5 h-5  group-hover:text-[#111827] `}/>
                <p className="text-[#111827] font-medium font-inter">User Management</p>
            </div>
            <div onClick={() => {navigate("/product-management"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/product-management"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px] rounded-lg  gap-2 flex items-center group cursor-pointer transition-all duration-300 p-[16px] hover:bg-[#ECFFF6]`}>
                <IoBagOutline className={`${location.pathname === "/product-management" ? "text-[#009254]" : "text-[#292D32]"} w-5 h-5  group-hover:text-[#111827] `}/>
                <p className="text-[#111827] font-medium whitespace-nowrap font-inter">Product Management</p>
            </div>
            <div onClick={() => {navigate("/orders"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/orders"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px] rounded-lg  gap-2 flex items-center group cursor-pointer transition-all duration-300 p-[16px] hover:bg-[#ECFFF6]`}>
                <CiShoppingCart className={`${location.pathname === "/orders" ? "text-[#009254]" : "text-[#292D32]"} w-5 h-5  group-hover:text-[#111827] `}/>
                <p className="text-[#111827] font-medium whitespace-nowrap font-inter">Orders</p>
            </div>
            <div onClick={() => {navigate("/transaction"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/transaction"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px] rounded-lg  gap-2 flex items-center group cursor-pointer transition-all duration-300 p-[16px] hover:bg-[#ECFFF6]`}>
                <TbReceipt className={`${location.pathname === "/transaction" ? "text-[#009254]" : "text-[#292D32]"} w-5 h-5  group-hover:text-[#111827] `}/>
                <p className="text-[#111827] font-medium whitespace-nowrap font-inter">Transaction Record</p>
            </div>
            <div onClick={() => {navigate("/settings"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/settings"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px] rounded-lg  gap-2 flex items-center group cursor-pointer transition-all duration-300 p-[16px] hover:bg-[#ECFFF6]`}>
                <IoSettingsOutline className={`${location.pathname === "/settings" ? "text-[#009254]" : "text-[#292D32]"} w-5 h-5  group-hover:text-[#111827] `}/>
                <p className="text-[#111827] font-medium whitespace-nowrap font-inter">Settings</p>
            </div>
           

        </div>
    </div>
  )
}

export default Sidebar