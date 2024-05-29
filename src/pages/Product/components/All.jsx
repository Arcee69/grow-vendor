import React from 'react'


import Empty from "../../../assets/png/empty.png"
import LongMenu from "../../../assets/svg/longmenu.svg"

const All = () => { 

    const data = [
        {
            productId: "PRD001",
            name: "Product A",
            seller: "Ekomobong Enang",
            category: "Clothing",
            price: "₦100,000",
            date: "2023-05-21",
            status: "Active"
        },
        {
            productId: "PRD002",
            name: "Product B",
            seller: "Solomon Edem",
            category: "Furniture",
            price: "₦100,000",
            date: "2023-05-21",
            status: "Pending"
        },
        {
            productId: "PRD003",
            name: "Product C",
            seller: "Unwana Bright",
            category: "Stationery",
            price: "₦100,000",
            date: "2023-05-21",
            status: "Flagged"
        },
        {
            productId: "PRD004",
            name: "Product D",
            seller: "Jacob Jones",
            category: "Clothing",
            price: "₦100,000",
            date: "2023-05-21",
            status: "Active"
        },
        {
            productId: "PRD005",
            name: "Product E",
            seller: "Guy Hawkins",
            category: "Food & Beverage",
            price: "₦100,000",
            date: "2023-05-21",
            status: "Active"
        },
    ]

  return (
    <div className='mr-[30px] mb-[100px]'>
        <table className='w-full'>
            <tr className='h-[48px] bg-[#F9FAFB] rounded-lg'>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Product Name
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Product ID
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Seller
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Category    
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Price    
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Status
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Date Added
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
                        <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.productId}</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.seller}</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.category}</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.price}</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <div className={`rounded-lg h-8 w-[64px] flex justify-center items-center ${item.status === 'Flagged' && ' bg-[#FFDCDC]'} ${item.status === 'Pending' && ' bg-[#FEF7EB]'} ${item.status === 'Active' && 'bg-[#ECFDF3]'}`}>
                            <p className={`text-xs font-medium ${item.status === 'Flagged' && 'text-[#E53535]'} ${item.status === 'Pending' && 'text-[#FFC837]'} ${item.status === 'Active' && 'text-[#027A48] '} `}>{item?.status}</p> {/* {data.status} */}
                        </div>
                    </td> 
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.date}</p>
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

export default All