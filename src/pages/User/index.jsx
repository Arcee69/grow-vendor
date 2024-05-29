import React, { useState } from 'react'

import Filter from "../../assets/svg/filter.svg"
import Search from "../../assets/svg/searchB.svg"

import Buyers from './components/Buyers'
import Sellers from './components/Sellers'

const User = () => {
    const [text, setText] = useState("")
    const [activeButton, setActiveButton] = useState("Buyers")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleButtonChange = (value) => {
        setActiveButton(value)
    }

  return (
    <div className='w-full flex flex-col gap-[32px]'>
        <div className='flex flex-col'>
            <p className='text-[24px] font-inter font-semibold leading-[32px]'>User Management</p>
            <p className='font-inter text-[#475367] text-base leading-[24px]'>Manage all users in one place</p>
        </div>
        <div className='flex items-center justify-between mr-[30px]'>
            <div className='flex items-center gap-3'>
                <div onClick={() => handleButtonChange("Buyers")} className={`${activeButton === "Buyers" ? " bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[124px] h-[44px] rounded-lg p-3 flex items-center gap-1.5 justify-center`}>
                    <p className={`${activeButton === "Buyers" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>Buyers</p>
                    <div className='w-[49px] h-[20px] bg-[#EEFFED] rounded-2xl flex items-center justify-center'>
                        <p className='text-[#001C4C] font-inter text-[13px]'>5000</p>
                    </div>
                </div>
                <div onClick={() => handleButtonChange("Sellers")} className={`${activeButton === "Sellers" ?  "bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[124px] h-[44px] rounded-lg  p-3 flex items-center gap-1.5 justify-center`}>
                    <p className={`${activeButton === "Sellers" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>Sellers</p>
                    <div className='w-[49px] h-[20px] bg-[#EEFFED] rounded-2xl flex items-center justify-center'>
                        <p className='text-[#001C4C] font-inter text-[13px]'>2000</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <div className='w-[400px] h-[40px] p-2.5 flex items-center border border-[#D0D5DD] rounded-lg gap-2'>
                    <img src={Search} alt='Search' />
                    <input 
                        className='outline-none text-[#667085] text-base font-inter bg-transparent '
                        name='filter'
                        type='text'
                        placeholder='Search'
                        value={text}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                
                <div className='w-[102px] h-[40px] flex items-center  justify-center rounded-lg border border-[#D0D5DD] gap-1.5'>
                    <img src={Filter} alt='Filter' />
                    <p>Filter</p>
                </div>
            </div>

        </div>

        {activeButton === "Buyers" && <Buyers />}
        {activeButton === "Sellers" && <Sellers />}
    </div>
  )
}

export default User