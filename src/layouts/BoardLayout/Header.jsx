import React, { useState, Fragment } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoCartOutline, IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { Listbox, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineStorefront } from 'react-icons/md';
import { GoStop } from 'react-icons/go';

import UserImage from "../../assets/png/userImage.png"
import Search from "../../assets/svg/search.svg"
import Notification from "../../assets/svg/notification.svg"



  const navigation = [
 
    { name: 'Sign Out', icon: <GoStop />, link:"/" },
 
   
  ]

const Header = () => {
    const [text, setText] = useState(" ");

    const [navigationSelected, setNavigationSelected] = useState(navigation[0])

    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);
    }

    const navigate = useNavigate()

  return (
    <div className='bg-[#fff] shadow-lg  flex  px-[24px] py-[18px] '>

        <div className='w-full flex items-center justify-between'>
            <div className='rounded-lg border border-[#E1E3E2] p-2 gap-2 w-[662px] flex items-center'>
                <img src={Search} alt='Search' />
                <input 
                    type='type'
                    name='search'
                    className='outline-none'
                    onChange={(e) => handleChange(e)}
                />
            </div>
            

            <div className='flex gap-4 items-center'>
                <div className='flex items-center w-[66px] cursor-pointer h-[24px] gap-1.5'>
                    <p className='font-inter text-base text-[#000]'>Cart</p>
                    <IoCartOutline className='w-[20px] h-[20px] text-[#333333]'/>
                </div>
                <div className='flex justify-center items-center w-[40px] bg-[#F8FCF8] rounded-full cursor-pointer h-[40px]'>
                    <IoNotificationsOutline  className='w-[20px] h-[20px] text-[#333333]'/>
                </div>
            
                <Listbox value={navigationSelected} onChange={setNavigationSelected}>
                    <div className="relative">
                        <Listbox.Button className="relative w-[40px]  flex items-center gap-2.5 justify-center cursor-default">
                            <img src={UserImage} alt='UserImage' />
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 w-[100px] mr-24 max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                {navigation.map((item, index) => (
                                    <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                            active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                            }`
                                        }
                                        value={item}
                                    >
                                    {({ selected }) => (
                                        <div className='flex items-center gap-2'>
                                            <div>{item?.icon}</div>
                                            <div
                                                className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                                } text-[#052011]`}
                                                onClick={() => navigate(item?.link)}
                                            >
                                                {item.name}
                                            </div>
                                        </div>
                                    )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
        

        </div>

    </div>
  )
}

export default Header