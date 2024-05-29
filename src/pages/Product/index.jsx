import React, {useState } from 'react'

import Bag from "../../assets/svg/bag.svg" 
import Filter from "../../assets/svg/filter.svg"
import Search from "../../assets/svg/searchB.svg"
import All from './components/All'
import Active from './components/Active'
import Flagged from './components/Flagged'
import Pending from './components/Pending'

const Product = () => {
    const [text, setText] = useState("")
    const [activeButton, setActiveButton] = useState("All")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleButtonChange = (value) => {
        setActiveButton(value)
    }

  return (
    <div className='w-full flex flex-col gap-[32px]'>
        <div className='flex flex-col'>
            <p className='text-[24px] font-inter font-semibold leading-[32px]'>Products Management</p>
            <p className='font-inter text-[#475367] text-base leading-[24px]'>Manage all Products in one place</p>
        </div>
        <div className='flex items-center gap-[8px]'>
            <div className='w-[250px] h-[104px] py-6 px-[32px] gap-4 bg-[#fff] flex items-center border border-[#8B9298] rounded-lg'>
                <img src={Bag} alt='Bag' className='rounded-lg'/>
                <div className='flex flex-col gap-1'>
                    <p className='text-xs font-inter text-[#8B9298]'>Total Products</p>
                    <p className='text-[20px] text-[#09111D] font-inter'>5000</p>
                </div>
            </div>
            <div className='w-[250px] h-[104px] py-6  px-[32px] gap-4 bg-[#fff] flex items-center border border-[#8B9298] rounded-lg'>
                <img src={Bag} alt='Bag' className='rounded-lg'/>
                <div className='flex flex-col gap-1'>
                    <p className='text-xs font-inter text-[#8B9298]'>Active Products</p>
                    <p className='text-[20px] text-[#09111D] font-inter'>2000</p>
                </div>
            </div>
            <div className='w-[250px] h-[104px] py-6 px-[32px] gap-4 bg-[#fff] flex items-center border border-[#8B9298] rounded-lg'>
                <img src={Bag} alt='Bag' className='rounded-lg'/>
                <div className='flex flex-col gap-1'>
                    <p className='text-xs font-inter text-[#8B9298]'>Flagged Products</p>
                    <p className='text-[20px] text-[#09111D] font-inter'>2000</p>
                </div>
            </div>
            <div className='w-[250px] h-[104px] py-6 px-[32px] gap-4 bg-[#fff] flex items-center border border-[#8B9298] rounded-lg'>
                <img src={Bag} alt='Bag' className='rounded-lg'/>
                <div className='flex flex-col gap-1'>
                    <p className='text-xs font-inter text-[#8B9298]'>Pending Review</p>
                    <p className='text-[20px] text-[#09111D] font-inter'>2000</p>
                </div>
            </div>

        </div>

        <div className='flex items-center justify-between mr-[30px]'>
            <div className='flex items-center gap-3'>
                <div onClick={() => handleButtonChange("All")} className={`${activeButton === "All" ? " bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[97px] h-[44px] rounded-lg p-3 flex items-center gap-1.5 justify-center`}>
                    <p className={`${activeButton === "All" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>All</p>
                    <div className='w-[49px] h-[20px] bg-[#EEFFED] rounded-2xl flex items-center justify-center'>
                        <p className='text-[#001C4C] font-inter text-[13px]'>5000</p>
                    </div>
                </div>
                <div onClick={() => handleButtonChange("Active")} className={`${activeButton === "Active" ?  "bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[124px] h-[44px] rounded-lg  p-3 flex items-center gap-1.5 justify-center`}>
                    <p className={`${activeButton === "Active" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>Active</p>
                    <div className='w-[49px] h-[20px] bg-[#EEFFED] rounded-2xl flex items-center justify-center'>
                        <p className='text-[#001C4C] font-inter text-[13px]'>2000</p>
                    </div>
                </div>
                <div onClick={() => handleButtonChange("Flagged")} className={`${activeButton === "Flagged" ?  "bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[124px] h-[44px] rounded-lg  p-3 flex items-center gap-1.5 justify-center`}>
                    <p className={`${activeButton === "Flagged" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>Flagged</p>
                    <div className='w-[49px] h-[20px] bg-[#EEFFED] rounded-2xl flex items-center justify-center'>
                        <p className='text-[#001C4C] font-inter text-[13px]'>2000</p>
                    </div>
                </div>
                <div onClick={() => handleButtonChange("Pending")} className={`${activeButton === "Pending" ?  "bg-[#009254]" : "bg-[#E1EDD9]"} cursor-pointer w-[124px] h-[44px] rounded-lg  p-3 flex items-center gap-1.5 justify-center`}>
                    <p className={`${activeButton === "Pending" ? "text-[#fff]" : "text-[#8B988E]"} font-inter font-medium text-[13px]`}>Pending</p>
                    <div className='w-[49px] h-[20px] bg-[#EEFFED] rounded-2xl flex items-center justify-center'>
                        <p className='text-[#001C4C] font-inter text-[13px]'>2000</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <div className='w-[377px] h-[40px] p-2.5 flex items-center border border-[#D0D5DD] rounded-lg gap-2'>
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

        {activeButton === "All" && <All />}
        {activeButton === "Active" && <Active />}
        {activeButton === "Flagged" && <Flagged />}
        {activeButton === "Pending" && <Pending />}

    </div>
  )
}

export default Product