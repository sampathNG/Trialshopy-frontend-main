import React from 'react'

function Liveproduct3Card() {
    return (
        <>
           <div className=' p-5'>
           <div>
                <div className=' relative flex bg-pink-200 w-60 items-center justify-center'>
                    <img src="/images/livproduct3.jpeg" alt="" className=' w-60 h-58 ' />
                    <img src="/images/play.svg" alt="mmm" className=' absolute -' />
                </div>
                <div className=' w-60  mt-2'>
                    <div className=' flex'>
                    <div className=' flex items-center gap-2  '>
                        <img src="/images/prof.jpeg" alt="" className=' w-9' />
                        <p>Seajal Readymade clotes</p>
                       
                    </div>
                    <div>
                    <img src="/images/mor.svg" alt="" />
                    </div>
                    </div>
                    <div className=' text-center items-center'>
                        <p className=' text-[#888888] mt-2'>54k Watching, 2 week ago</p>
                        <img src="/images/live.svg" alt="" className=' mt-2 mb-2 ml-4 w-12' />
                    </div>
                    <div className='bg-[#FAAC06] text-center p-1 rounded-md w-58 mt-2'>
                        <button>Shop now</button>
                    </div>
                </div>
            </div>
           </div>
        </>
    )
}

export default Liveproduct3Card