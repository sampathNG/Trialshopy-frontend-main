import React from 'react'

function LiveProductCard({img}) {
    return (
        <>
            <div>
                <div className=' w-[261px] h-[281px]  relative'>
                    <img src={img} alt="" className=' w-[261px] h-[281px]' />
                    <div className=' bg-white absolute bottom-2 p-1 rounded-2xl left-2 text-center '>
                        <div className='flex gap-1 items-center px-1'>
                        4.2 <img src="/images/star.svg" alt="" className=' w-4 inline' />
                        <span className='text-[#7C7C7C]'>|</span>
                        <span>75</span>

                        </div>
                    </div>
                </div>
                <div>
                    <p className=' font-bold text-lg '>
                        Allen Solly
                    </p>
                    <p className=' text-[#7C7C7C]'> Men Solid Pure Cotton T-shirt</p>
                    <p className=' gap-2 flex'>
                        ₹1156
                        <span className=' text-[#7C7C7C] line-through'>₹1299 </span>
                        <span className='text-red-600'> (11% off)</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default LiveProductCard