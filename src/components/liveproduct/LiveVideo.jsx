import React from 'react'
import {CiPlay1,CiPause1} from 'react-icons/ci'
function LiveVideo() {
    const [play, setplay] = React.useState(false)
    const video = React.useRef(null)
    
    return (
        <>
            <div className=" relative  lg:m-14 bg-red-400 md:m-10 m-2">
            {play ? <CiPause1 className='z-20 text-white text-6xl  hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' onClick={()=>{
                    setplay(false)
                    video.current.pause()
                }} /> : <CiPlay1 className='z-20 text-white text-6xl  hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' onClick={()=>{
                    setplay(true)
                    video.current.play()
                }} />}
           
                <div className=' w-full relative h-auto rel flex items-center  justify-center'>
                <video src="/videos/product.mp4" ref={video}  className=' w-full  h-full ' />
                    <div className=' absolute  w-full flex flex-col gap-4 justify-start   left-5'>
                        <img src="/images/livemore.png" alt="" className=" md:w-8  w-5" />
                        <img src="/images/livepeople.png" alt="" className=" md:w-8  w-5" />
                        <img src="/images/calander.png" alt="" className=" md:w-8  w-5" />
                    </div>
                    <div className=" absolute h-full  bottom-4  flex items-end">
                        <img src="/images/liv.png" alt="" className=" w-10 " />
                    </div>
                    <div className=" absolute  right-2 top-2 ">
                        <img src="/images/replay.png" alt="" className=" md:w-8 w-5" />
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default LiveVideo