import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import ContactLiveproduct from './ContactLiveproduct'
import Sidebar from './ShopnowSide'
function Shopnow() {
    return (
        <>
            <div>
                <div className=' w-full h-full flex items-end  '>
                    <div className=' relative flex w-full h-[306px]'>
                        <img src="/images/shopnow.png" alt="..." className=' w-full h-auto ' />
                    </div>
                    
                    <div className=' absolute   text-xs lg:ml-20 ml-5 mb-10 '>

                        <div className=' flex flex-col gap-3'>
                            <p className=' text-white font-bold  lg:text-xl  '>SAJAL FASHION STORE</p>
                            <div className='  text-white flex items-center gap-2'>
                                <div className=' bg-green-800 border-2 border-gray-200  rounded-md w-9 text-center'>
                                    4.0
                                </div>
                                <div className=' flex gap-1 text-lg'>
                                    <AiFillStar className=' text-yellow-800' />
                                    <AiFillStar className=' text-yellow-800' />
                                    <AiFillStar className=' text-yellow-800' />
                                    <AiFillStar className=' text-yellow-800' />
                                    <AiOutlineStar />
                                </div>
                                <div >
                                    4554 Reviews
                                </div>
                            </div>
                            <div className=' flex text-white gap-2'>
                                <img src="/images/gallary.svg" alt="" className=' w-5' />
                                <p>231 Photos added</p>
                            </div>
                            <div className=' flex text-white items-center gap-2'>
                                <img src="/images/rupees.png" alt="" className=' w-10' />
                                <p>Men’s Clothing, Women Western More..</p>
                            </div>
                            <div className=' text-white flex gap-2'>
                                <p className=' text-green-800  '>Open Now</p>
                                <p>Till 9:30pm, Danish Nagar Delhi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
           
                <div className='  p-10 w-full   justify-end flex'>
                    {/* <Sidebar/> */}
                    <ContactLiveproduct />
                </div>
          
        </>
    )
}

export default Shopnow