import React, { useState } from 'react'

import Search from "../../assets/svg/searchB.svg"

import Delivered from './components/Delivered'
import InTransit from './components/InTransit'
import Dispatched from './components/Dispatched'
import Pending from './components/Pending'

const Orders = () => {
    const [text, setText] = useState("")
    const [activeButton, setActiveButton] = useState("Delivered")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleButtonChange = (value) => {
        setActiveButton(value)
    }

  return (
    <div className='w-full flex flex-col gap-[32px]'>
        <div className='flex flex-col'>
            <p className='text-[24px] font-inter font-semibold leading-[32px]'>Orders</p>
            <p className='font-inter text-[#475367] text-base leading-[24px]'>Manage all Products In one place</p>
        </div>
        <div className='flex items-center justify-between mr-[30px]'>
            <div className='flex items-center gap-3'>
                <div onClick={() => handleButtonChange("Delivered")} className={`${activeButton === "Delivered" ? " bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[124px] h-[44px] rounded-lg p-3 flex items-center gap-1.5 justify-center`}>
                    <p className={`${activeButton === "Delivered" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>Delivered</p>
                    <div className='w-[49px] h-[20px] bg-[#EEFFED] p-1 rounded-2xl flex items-center justify-center'>
                        <p className='text-[#001C4C] font-inter text-[12px]'>5000</p>
                    </div>
                </div>
                <div onClick={() => handleButtonChange("In Transit")} className={`${activeButton === "In Transit" ?  "bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[124px] h-[44px] rounded-lg  p-3 flex items-center gap-1.5 justify-center`}>
                    <p className={`${activeButton === "In Transit" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>InTransit</p>
                    <div className='w-[49px] h-[20px] bg-[#EEFFED] p-1 rounded-2xl flex items-center justify-center'>
                        <p className='text-[#001C4C] font-inter text-[12px]'>2000</p>
                    </div>
                </div>
                <div onClick={() => handleButtonChange("Dispatched")} className={`${activeButton === "Dispatched" ?  "bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[124px] h-[44px] rounded-lg  p-3 flex items-center gap-1.5 justify-center`}>
                    <p className={`${activeButton === "Dispatched" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>Dispatched</p>
                    <div className='w-[49px] h-[20px] bg-[#EEFFED] p-1 rounded-2xl flex items-center justify-center'>
                        <p className='text-[#001C4C] font-inter text-[12px]'>2000</p>
                    </div>
                </div>
                <div onClick={() => handleButtonChange("Pending")} className={`${activeButton === "Pending" ?  "bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[124px] h-[44px] rounded-lg  p-3 flex items-center gap-1.5 justify-center`}>
                    <p className={`${activeButton === "Pending" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>Pending</p>
                    <div className='w-[49px] h-[20px] bg-[#EEFFED] p-1 rounded-2xl flex items-center justify-center'>
                        <p className='text-[#001C4C] font-inter text-[12px]'>2000</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <div className='w-[400px] h-[40px] p-2.5 flex items-center border border-[#D0D5DD] rounded-lg gap-2'>
                    <img src={Search} alt='Search' />
                    <input 
                        className='outline-none text-[#667085] text-base bg-transparent font-inter'
                        name='filter'
                        type='text'
                        placeholder='Search'
                        value={text}
                        onChange={(e) => handleChange(e)}
                    />
                </div>

            </div>

        </div>

        {activeButton === "Delivered" && <Delivered />}
        {activeButton === "In Transit" && <InTransit />}
        {activeButton === "Dispatched" && <Dispatched />}
        {activeButton === "Pending" && <Pending />}
    </div>
  )
}

export default Orders