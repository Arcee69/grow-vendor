import React, { useState } from 'react'

import SideArrow from "../../assets/svg/side_arrow.svg"
import ArrowGreen from "../../assets/svg/arrow_green.svg"
import ArrowRed from "../../assets/svg/arrow_red.svg"

import Filter from "../../assets/svg/filter.svg"
import Search from "../../assets/svg/searchB.svg"
import Outflow from './components/Outflow'
import Inflow from './components/Inflow'

const Transaction = () => {
  const [text, setText] = useState("")
  const [activeButton, setActiveButton] = useState("Inflow")

  const handleChange = (e) => {
      setText(e.target.value)
  }

  const handleButtonChange = (value) => {
      setActiveButton(value)
  }

  return (
    <div className='w-full flex flex-col gap-[32px]'>
      <div className='flex flex-col'>
        <p className='text-[24px] font-inter font-semibold leading-[32px]'>Transactions</p>
        <p className='font-inter text-[#475367] text-base leading-[24px]'>This is your transaction summary for your dashboard.</p>
      </div>

      <div className='flex items-center gap-4'>

        <div className='w-[324px] h-[152px] bg-[#009254] rounded-[16px] px-[40px] py-[32px] flex flex-col gap-[4px]'>
          <p className='text-xs text-[#fff] font-inter font-bold'>Total Revenue Overview</p>
          <p className='font-manrope font-bold text-[#fff] text-[32px]'>₦17,340,000.00</p>
          <div className='flex items-center gap-1'>
            <img src={SideArrow} alt='SideArrow' className='w-6 h-6' />
            <p className='font-inter text-xs text-[#FFC837] font-medium'>₦300,000.00 (+10% Inflow in May)</p>
          </div>
        </div>

        <div className='w-[324px] h-[152px] bg-[#F5F9F8] rounded-[16px] px-[40px] py-[32px] flex flex-col gap-[4px]'>
          <p className='text-xs text-[#000] font-inter font-bold'>Inflow</p>
          <p className='font-manrope font-bold text-[#000] text-[32px]'>₦17,340,000.00</p>
          <div className='flex items-center gap-1 '>
            <img src={ArrowGreen} alt='ArrowGreen' className='w-6 h-6' />
            <p className='font-inter text-xs text-[#009254] font-medium'>₦300,000.00 (+10% Inflow in May)</p>
          </div>
        </div>

        <div className='w-[324px] h-[152px] bg-[#F8F3F5] rounded-[16px] px-[40px] py-[32px] flex flex-col gap-[4px]'>
          <p className='text-xs text-[#000] font-inter font-bold'>Outflow</p>
          <p className='font-manrope font-bold text-[#000] text-[32px]'>₦17,340,000.00</p>
          <div className='flex items-center gap-1 '>
            <img src={ArrowRed} alt='ArrowRed' className='w-6 h-6' />
            <p className='font-inter text-xs text-[#EA4335] font-medium'>₦300,000.00 (+10% Inflow in May)</p>
          </div>
        </div>

      </div>

      <div className='flex items-center justify-between mr-[30px]'>
        <div className='flex items-center gap-3'>
            <div onClick={() => handleButtonChange("Inflow")} className={`${activeButton === "Inflow" ? " bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[124px] h-[44px] rounded-lg p-3 flex items-center gap-1.5 justify-center`}>
                <p className={`${activeButton === "Inflow" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>Inflow</p>
                <div className='w-[49px] h-[20px] bg-[#EEFFED] rounded-2xl flex items-center justify-center'>
                    <p className='text-[#001C4C] font-inter text-[13px]'>5000</p>
                </div>
            </div>
            <div onClick={() => handleButtonChange("Outflow")} className={`${activeButton === "Outflow" ?  "bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[124px] h-[44px] rounded-lg  p-3 flex items-center gap-1.5 justify-center`}>
                <p className={`${activeButton === "Outflow" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>Outflow</p>
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
        {activeButton === "Inflow" && <Inflow />}
        {activeButton === "Outflow" && <Outflow />}
    </div>
  )
}

export default Transaction