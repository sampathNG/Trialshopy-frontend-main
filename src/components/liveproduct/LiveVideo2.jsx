import React, { useEffect } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { VscEye } from 'react-icons/vsc'
import { AiOutlineSend } from 'react-icons/ai'
import { BiCommentAdd } from 'react-icons/bi'
import {CiPlay1,CiPause1} from 'react-icons/ci'
function LiveVideo2() {
    const [comment, setcomment] = React.useState('')
    const [show, setcShow] = React.useState(false)
    const [play, setplay] = React.useState(false)
    const [showControls, setshowControls] = React.useState(true)
    const video = React.useRef(null)

    const clickhendler = () => {
        comments.push(
            ...comments,
            {
            name: 'Devon Lane',
            content: comment,
            image: "/images/lvprof2.png"
        })
        setcomment('')
    }


    const comments = [{
        name: 'Devon Lane',
        content: "Men Solid Pure Cotton T-shirt",
        image: "/images/lvprof2.png"
    },
    {
        name: 'Devon Lane',
        content: "Men Solid Pure Cotton T-shirt",
        image: "/images/lvprof2.png"
    },
    {
        name: 'Devon Lane',
        content: "Men Solid Pure Cotton T-shirt",
        image: "/images/lvprof2.png"
    },
    ]
    useEffect(() => {
        setTimeout(() => {
            setshowControls(false)
        },5000)
    },[showControls])
    return (
        <div className="  lg:mx-40   md:m-16 m-2" onClick={()=>{
            setshowControls(true)
        }}>

            <div className=' w-full relative h-full rel flex items-center  justify-center'>
                {showControls&&
                <>
                {play ? <CiPause1 className='z-20 text-white text-6xl  hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' onClick={()=>{
                    setplay(false)
                    video.current.pause()
                }} /> : <CiPlay1 className='z-20 text-white text-6xl  hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' onClick={()=>{
                    setplay(true)
                    video.current.play()
                }} />}
                </>
                }
                
                <video src="https://www.youtube.com/watch?v=R_2VbKLKzJY&pp=ygUYbXludHJhIGJyYW5kZWQgYmFncyBoYXVs" ref={video}  className=' w-full  h-full ' />

                <div className=' absolute flex gap-2 items-center md:top-5 top-2 left-5  w-1/4  sm:w-auto'>
                    <img src="/images/livprof.png" alt="" className=' lg:w-16 md:w-8 w-5' />
                    <p className=' text-white text-xs md:text-sm lg:text-lg  overflow-hidden'>SAJAL FASHION STORE</p>
                </div>
                <div className=' absolute flex md:flex-row gap-3 items-center md:top-5 top-2 right-5'>
                    <img src="/images/live.svg" alt="" className=' lg:w-16 md:w-8 w-5' />
                    <VscEye className=' text-white lg:text-2xl ' />
                    <p className=' text-white text-xs md:text-md'>4,525</p>
                    {show ? <RxCross1
                        onClick={() => {
                            setcShow(false)
                        }
                        }
                        className=' text-white text-xl sm:text-3xl  hover:cursor-pointer' /> : <BiCommentAdd onClick={() => {
                            setcShow(true)
                        }} className=' text-white text-xl sm:text-3xl hover:cursor-pointer ' />}


                </div>
                
            
                {show &&
                    <div className='absolute hidden md:inline text-lg w-full items-start overflow-y-auto  gap-3 pl-3 bottom-2'>
                        {comments.map((comment, index) => (
                            <div className=' flex   items-center gap-2' key={index}>
                                <img src={comment.image} alt="" />
                                <div>
                                    <p className='w-full text-white'>{comment.name}</p>
                                    <p className=' text-white'>{comment.content}</p>
                                </div>
                            </div>
                        ))}


                        <div className=' flex items-center  border-t-2 border-[#D9D9D9] p-3'>
                            {/* <textarea name="" className=' w-full  bg-transparent text-white  placeholder:p-3 focus:outline-none flex items-center  ' placeholder='Type here...'></textarea> */}
                            <input type="text" className=' w-full bg-transparent text-white  placeholder:p-3 focus:outline-none flex items-center  ' value={comment} placeholder='Type here...'
                                onChange={(e) => {
                                    setcomment(e.target.value)
                                }} />
                            <AiOutlineSend className=' text-white w-20 text-3xl ' onClick={() => {
                                clickhendler()
                            }} />
                        </div>
                    </div>
                }




            </div>
            {show &&
                    <div className='md:hidden text-xs sm:text-lg w-full items-start overflow-y-auto gap-3 pl-3 bottom-2'>
                        {comments.map((comment, index) => (
                            <div className=' flex items-center gap-2' key={index}>
                                <img src={comment.image} alt="" />
                                <div>
                                    <p className=' text-black'>{comment.name}</p>
                                    <p className=' text-black'>{comment.content}</p>
                                </div>
                            </div>
                        ))}


                        <div className=' flex items-center  border-t-2 border-black p-3 '>
                            {/* <textarea name="" className=' w-full  bg-transparent text-white  placeholder:p-3 focus:outline-none flex items-center  ' placeholder='Type here...'></textarea> */}
                            <input type="text" className=' w-full bg-transparent text-black  placeholder:p-3 focus:outline-none flex items-center  ' value={comment} placeholder='Type here...'
                                onChange={(e) => {
                                    setcomment(e.target.value)
                                }} />
                            <AiOutlineSend className=' text-black w-20 text-3xl ' onClick={() => {
                                clickhendler()
                            }} />
                        </div>
                    </div>
                }
        </div>
    )
}

export default LiveVideo2