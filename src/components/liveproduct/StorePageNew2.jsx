import React from 'react'
import Card from './LiveProductCard'

function StorePageNew2() {
    return (
        <>
            <div className=' flex flex-col gap-8 m-14'>
                <div  className=' flex flex-col gap-3'>
                    <div className=' flex gap-2 items-center'>
                        <div >
                            <img src="/images/newstore.png" alt="" />
                        </div>
                        <div>
                            <p>Devon Lane</p>
                            <p>Product <span className=' text-2xl text-[#FE7B2E]'>25</span></p>
                        </div>
                    </div>
                    <div className='  grid lg:grid-cols-4 md:grid-cols-2 place-items-center  gap-10'>
                        <Card img={'/images/sari2.jpeg'} />
                        <Card img={'/images/sari1.jpeg'} />
                        <Card img={'/images/sari2.jpeg'} />
                        <Card img={'/images/sari1.jpeg'} />
                    </div>
                </div>


                <div>
                    <div className=' flex gap-2 items-center'>
                        <div >
                            <img src="/images/newstore.png" alt="" />
                        </div>
                        <div>
                            <p>Devon Lane</p>
                            <p>Product <span className=' text-2xl text-[#FE7B2E]'>25</span></p>
                        </div>
                    </div>
                    <div className='  grid lg:grid-cols-4 md:grid-cols-2 place-items-center  gap-10'>
                        <Card img={'/images/sari2.jpeg'} />
                        <Card img={'/images/sari1.jpeg'} />
                        <Card img={'/images/sari2.jpeg'} />
                        <Card img={'/images/sari1.jpeg'} />
                    </div>
                </div>


                <div>
                    <div className=' flex gap-2 items-center'>
                        <div >
                            <img src="/images/newstore.png" alt="" />
                        </div>
                        <div>
                            <p>Devon Lane</p>
                            <p>Product <span className=' text-2xl text-[#FE7B2E]'>25</span></p>
                        </div>
                    </div>
                    <div className='  grid lg:grid-cols-4 md:grid-cols-2 place-items-center  gap-10'>
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

export default StorePageNew2