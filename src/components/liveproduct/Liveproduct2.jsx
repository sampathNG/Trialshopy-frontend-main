import React from 'react'
import LiveproductCard from './LiveproductChat'
import LiveProductSide from './LiveProcuctSide'
import Card from './LiveProductCard'
function Liveproduct2() {
    return (
        <>
            <div className=' '>


                <div className=' flex flex-col justify-center items-center  p-1 md:mx-20 mx-5'>
                    <div className=' w-full '>
                        <img src="/images/ytvideo.jpeg" alt="" className=' h-auto w-full ' />
                    </div>
                </div>
                <div className='  md:flex-row flex flex-col  justify-between md:justify-evenly  p-1 md:mx-20 gap-20  md:gap-32'>

                    <LiveProductSide />
                    <LiveproductCard />

                </div>
                <div className='  p-1 md:mx-20 gap-20  md:gap-32'>
                    <h1>
                        Selected product
                    </h1>
                    <div className=' flex flex-col gap-5'>


                        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 place-items-center xl:grid-cols-4 '>
                            <Card img={'/images/sari2.jpeg'} />
                            <Card img={'/images/sari1.jpeg'} />
                            <Card img={'/images/sari2.jpeg'} />
                            <Card img={'/images/sari1.jpeg'} />

                        </div>


                        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 place-items-center xl:grid-cols-4 '>
                            <Card img={'/images/sari2.jpeg'} />
                            <Card img={'/images/sari1.jpeg'} />
                            <Card img={'/images/sari2.jpeg'} />
                            <Card img={'/images/sari1.jpeg'} />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Liveproduct2