import React from 'react'

import Empty from "../../../assets/png/empty.png"
import LongMenu from "../../../assets/svg/longmenu.svg"

const Buyers = () => {

    const data = [
        {
            id: 1,
            name: "Ekomobong Enang",
            email: "solomonedemux@gmail.com",
            country: "Nigeria",
            phone: "xxxxx0885",
            status: "Active"
        },
        {
            id: 2,
            name: "Solomon Edem",
            email: "solomonedemux@gmail.com",
            country: "Nigeria",
            phone: "xxxxx0885",
            status: "Inactive"
        },
        {
            id: 3,
            name: "Unwana Bright",
            email: "solomonedemux@gmail.com",
            country: "Nigeria",
            phone: "xxxxx0885",
            status: "Inactive"
        },
        {
            id: 4,
            name: "Jacob Jones",
            email: "solomonedemux@gmail.com",
            country: "Nigeria",
            phone: "xxxxx0885",
            status: "Active"
        },
        {
            id: 5,
            name: "Guy Hawkins",
            email: "solomonedemux@gmail.com",
            country: "Nigeria",
            phone: "xxxxx0885",
            status: "Active"
        },
    ]

  return (
    <div className='mr-[30px] mb-[100px]'>
        <table className='w-full'>
            <tr className='h-[48px] bg-[#F9FAFB] rounded-lg'>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Buyer’s Name
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Email
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Country/Phone Number
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Status
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Action
                </th>
            </tr>
            {data?.length > 1 ? data?.map((item, index) => (
                <tr key={index} className='bg-white h-[56px] border-t cursor-pointer border-grey-100'>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-inter text-[#101828] text-left'>{item?.name}</p> 
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.email}</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm font-inter font-medium text-[#101828] text-left'>{item?.country}</p>
                            <p className='text-xs font-inter text-[#667185] text-left'>{item?.phone}</p>
                        </div>
                    </td>
                    <td className='h-[70px] px-4'>
                        <div className={`rounded-lg h-8 w-[64px] flex justify-center items-center ${item.status === 'Inactive' && ' bg-[#FFDCDC]'} ${item.status === 'Active' && 'bg-[#ECFDF3]'}`}>
                            <p className={`text-xs font-medium ${item.status === 'Inactive' && 'text-[#E53535]'} ${item.status === 'Active' && 'text-[#027A48] '} `}>{item?.status}</p> {/* {data.status} */}
                        </div>
                    </td>        
                    <td className='h-[70px] px-4 flex justify-center items-center'>
                        <img src={LongMenu} alt='LongMenu' className=' h-[16px]' />
                    </td>
                </tr>
                )) : (
                    <tr className='h-[654px] bg-white border-t border-grey-100'>
                        <td colSpan="8" className="relative">
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <div className='flex flex-col gap-2 items-center'>
                                    <img src={Empty} alt='empty' className='w-[159px] h-[103px]'/>
                                    <p>Oops! Nothing to see here.</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                )}
        </table>
        <div className='flex items-center border border-x-0 border-t bg-[#fff] px-4 py-4 justify-between'>
            <p className='text-[#344054] font-manrope font-medium'>Page 1 of 10</p>

            <div className='flex items-center gap-3'>
                <button className='w-[85px] h-[36px] flex items-center border border-[#D0D5DD] rounded-lg justify-center'>
                    <p className='text-[#344054] font-medium text-sm font-manrope'>Previous</p>
                </button>
                <button className='w-[85px] h-[36px] flex items-center border border-[#D0D5DD] rounded-lg justify-center'>
                    <p className='text-[#344054] font-medium text-sm font-manrope'>Next</p>
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Buyers