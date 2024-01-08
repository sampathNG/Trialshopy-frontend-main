import React from 'react'
import Card from './LiveProductCard'
function StorePasgNew() {
    return (
        <>
            <div className=' m-14 flex flex-col gap-5  items-center '>
                <div className=' left-0  w-full flex font-bold'>
                    <p>Selected product</p>
                </div>
                <div className=' flex flex-col gap-8'>
                    <div className='  grid lg:grid-cols-4 md:grid-cols-2 place-items-center  gap-10'>
                        <Card img={'/images/sari2.jpeg'} />
                        <Card img={'/images/sari1.jpeg'} />
                        <Card img={'/images/sari2.jpeg'} />
                        <Card img={'/images/sari1.jpeg'} />
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 place-items-center  gap-10'>
                        <Card img={'/images/sari2.jpeg'} />
                        <Card img={'/images/sari1.jpeg'} />
                        <Card img={'/images/sari2.jpeg'} />
                        <Card img={'/images/sari1.jpeg'} />
                    </div>
                    <div className=' grid lg:grid-cols-4 md:grid-cols-2  place-items-center  gap-10'>
                        <Card img={'/images/sari2.jpeg'} />
                        <Card img={'/images/sari1.jpeg'} />
                        <Card img={'/images/sari2.jpeg'} />
                        <Card img={'/images/sari1.jpeg'} />
                    </div>
                </div>
                <div className=' w-full items-center flex justify-center gap-5 '>
                    <button className=' bg-[#333333] text-white py-1 px-2'>Accept</button>
                    <button className=' text-[#5B5B5B] border-2 border-[#CDCDCD] py-1 px-2'>Reject</button>
                </div>
            </div>
        </>
    )
}

export default StorePasgNew