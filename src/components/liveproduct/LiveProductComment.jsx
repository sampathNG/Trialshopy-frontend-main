import React, { useState } from 'react'
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'


function LiveProductComment({ setComment }) {
    const [reply, setReply] = useState(null)
    const [reply2, setReply2] = useState("")
    const replayHandler = () => {
        setReply(!reply)
    }
    const crosshandler = () => {
        setComment(false)
    }
    const sendHandler = () => {
        alert(reply2)
        setReply2("")
        
    }
    const addHandler = () => {
        
    }

    return (
        <>
            {/* <div className=' flex items-center justify-center w-screen bg-pink-200'> */}
            <div class="fixed top-0 flex items-center justify-center left-0 right-0 z-50 p-4   overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-2xl max-h-full">
                    <div className='bg-white'>
                        <div >
                            <div className=' flex justify-between p-5 border-2 border-gray-200'>
                                <div> Comment(150)</div>
                                <img src="/images/cross.svg" alt=".." onClick={() => {
                                    crosshandler()
                                }} />
                            </div>

                            <div className=' border-2 border-gray-200  p-7'>


                                <div className='  flex flex-col gap-2 '>
                                    <div className=' flex items-center gap-3 ' >
                                        <img src="/images/prof.jpeg" alt="" />
                                        <p>Seajal Readymade clothes <span className=' text-gray-600'>1d nice suites</span></p>
                                    </div>
                                    <div className=' ml-14 flex flex-col gap-2 '>
                                        <div className=' flex w-1/2  items-center  gap-2 text-gray-600 text-sm '>
                                            <div><BiLike /></div>

                                            <p>66</p>
                                            <div><BiDislike /></div>
                                            <p>22</p>
                                            <p>Reply</p>
                                        </div>
                                        <div className=' text-[#FE7B2E] flex items-center gap-1 hover:cursor-pointer'
                                            onClick={() => {
                                                setReply(1)
                                            }
                                            }
                                        >
                                            <p>Reply </p>
                                            <AiOutlineDown />

                                        </div>
                                    </div>
                                    <div className={reply === 1 ? "block" : "hidden"}>
                                        <div className=' flex flex-col gap-2'>
                                            <div className=' ml-14  flex '>
                                                <img src="/images/prof2.svg" alt=".." />
                                                <input type="text" className=' h-9 w-full border-b-2 border-gray-400 focus-visible:outline-none placeholder:p-2 ml-2' placeholder='Type here.....' />
                                            </div>
                                            <div className=' w-full flex justify-end gap-3'>
                                                <button className=' border-2 border-gray-200 px-2 bg-white'
                                                    onClick={() => {
                                                        setReply(null)
                                                    }}
                                                >
                                                    Cancel
                                                </button>

                                                <button className=' border-2 border-gray-200 px-2 bg-[#888888]'
                                                >
                                                    Reply
                                                </button>
                                            </div>
                                            <div className=' ml-14'>

                                                <div className='  flex items-center gap-3 ' >
                                                    <img src="/images/prof2.svg" alt="" />
                                                    <p>Seajal Readymade clothes <span className=' text-gray-600'>1d nice suites</span></p>
                                                </div>


                                                <div className=' ml-14 flex flex-col gap-2 '>
                                                    <div className=' flex w-1/2  items-center  gap-2 text-gray-600 text-sm '>
                                                        <div><BiLike /></div>

                                                        <p>66</p>
                                                        <div><BiDislike /></div>
                                                        <p>22</p>
                                                        <p>Reply</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className=' flex items-center gap-3 ' >
                                        <img src="/images/prof.jpeg" alt="" />
                                        <p>Seajal Readymade clothes <span className=' text-gray-600'>1d nice suites</span></p>
                                    </div>


                                    <div className=' ml-14 flex flex-col gap-2 '>
                                        <div className=' flex w-1/2  items-center  gap-2 text-gray-600 text-sm '>
                                            <div><BiLike /></div>

                                            <p>66</p>
                                            <div><BiDislike /></div>
                                            <p>22</p>
                                            <p>Reply</p>
                                        </div>
                                        <div className=' text-[#FE7B2E] flex items-center gap-1 hover:cursor-pointer' onClick={() => {
                                            setReply(2)
                                        }}>
                                            <p>Reply </p>
                                            <AiOutlineDown />

                                        </div>

                                    </div>
                                    <div className={reply === 2 ? "block" : "hidden"}>
                                        <div className=' flex flex-col gap-2'>
                                            <div className=' ml-14  flex '>
                                                <img src="/images/prof2.svg" alt=".." />
                                                <input type="text" className=' h-9 w-full border-b-2 border-gray-400 focus-visible:outline-none placeholder:p-2 ml-2' placeholder='Type here.....' />
                                            </div>
                                            <div className=' w-full flex justify-end gap-3'>
                                                <button className=' border-2 border-gray-200 px-2 bg-white'
                                                    onClick={() => {
                                                        setReply(null)
                                                    }}
                                                >
                                                    Cancel
                                                </button>

                                                <button className=' border-2 border-gray-200 px-2 bg-[#888888]'
                                                >
                                                    Reply
                                                </button>
                                            </div>
                                            <div className=' ml-14'>

                                                <div className='  flex items-center gap-3 ' >
                                                    <img src="/images/prof2.svg" alt="" />
                                                    <p>Seajal Readymade clothes <span className=' text-gray-600'>1d nice suites</span></p>
                                                </div>


                                                <div className=' ml-14 flex flex-col gap-2 '>
                                                    <div className=' flex w-1/2  items-center  gap-2 text-gray-600 text-sm '>
                                                        <div><BiLike /></div>

                                                        <p>66</p>
                                                        <div><BiDislike /></div>
                                                        <p>22</p>
                                                        <p>Reply</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-3 ' >
                                        <img src="/images/prof.jpeg" alt="" />
                                        <p>Seajal Readymade clothes <span className=' text-gray-600'>1d nice suites</span></p>
                                    </div>


                                    <div className=' ml-14 flex flex-col gap-2 '>
                                        <div className=' flex w-1/2  items-center  gap-2 text-gray-600 text-sm '>
                                            <div><BiLike /></div>

                                            <p>66</p>
                                            <div><BiDislike /></div>
                                            <p>22</p>
                                            <p>Reply</p>
                                        </div>
                                        <div className=' text-[#FE7B2E] flex items-center gap-1'
                                            onClick={() => { setReply(3) }}>
                                            <p>Reply </p>
                                            <AiOutlineDown />

                                        </div>

                                    </div>

                                    <div className={reply === 3 ? "block" : "hidden"}>
                                        <div className=' flex flex-col gap-2'>
                                            <div className=' ml-14  flex '>
                                                <img src="/images/prof2.svg" alt=".." />
                                                <input type="text" className=' h-9 w-full border-b-2 border-gray-400 focus-visible:outline-none placeholder:p-2 ml-2' placeholder='Type here.....' />
                                            </div>
                                            <div className=' w-full flex justify-end gap-3'>
                                                <button className=' border-2 border-gray-200 px-2 bg-white'
                                                    onClick={() => {
                                                        setReply(null)
                                                    }}
                                                >
                                                    Cancel
                                                </button>

                                                <button className=' border-2 border-gray-200 px-2 bg-[#888888]'
                                                >
                                                    Reply
                                                </button>
                                            </div>
                                            <div className=' ml-14'>

                                                <div className='  flex items-center gap-3 ' >
                                                    <img src="/images/prof2.svg" alt="" />
                                                    <p>Seajal Readymade clothes <span className=' text-gray-600'>1d nice suites</span></p>
                                                </div>


                                                <div className=' ml-14 flex flex-col gap-2 '>
                                                    <div className=' flex w-1/2  items-center  gap-2 text-gray-600 text-sm '>
                                                        <div><BiLike /></div>

                                                        <p>66</p>
                                                        <div><BiDislike /></div>
                                                        <p>22</p>
                                                        <p>Reply</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-3 ' >
                                        <img src="/images/prof.jpeg" alt="" />
                                        <p>Seajal Readymade clothes <span className=' text-gray-600'>1d nice suites</span></p>
                                    </div>


                                    <div className=' ml-14 flex flex-col gap-2 '>
                                        <div className=' flex w-1/2  items-center  gap-2 text-gray-600 text-sm '>
                                            <div><BiLike /></div>

                                            <p>66</p>
                                            <div><BiDislike /></div>
                                            <p>22</p>
                                            <p>Reply</p>
                                        </div>
                                        <div className=' text-[#FE7B2E] flex items-center gap-1'
                                            onClick={() => { setReply(4) }}>
                                            <p>Reply </p>
                                            <AiOutlineDown />

                                        </div>
                                    </div>
                                    <div className={reply === 4 ? "block" : "hidden"}>
                                        <div className=' flex flex-col gap-2'>
                                            <div className=' ml-14  flex '>
                                                <img src="/images/prof2.svg" alt=".." />
                                                <input type="text" className=' h-9 w-full border-b-2 border-gray-400 focus-visible:outline-none placeholder:p-2 ml-2' placeholder='Type here.....' />
                                            </div>
                                            <div className=' w-full flex justify-end gap-3'>
                                                <button className=' border-2 border-gray-200 px-2 bg-white'
                                                    onClick={() => {
                                                        setReply(null)
                                                    }}
                                                >
                                                    Cancel
                                                </button>

                                                <button className=' border-2 border-gray-200 px-2 bg-[#888888]'
                                                >
                                                    Reply
                                                </button>
                                            </div>
                                            <div className=' ml-14'>

                                                <div className='  flex items-center gap-3 ' >
                                                    <img src="/images/prof2.svg" alt="" />
                                                    <p>Seajal Readymade clothes <span className=' text-gray-600'>1d nice suites</span></p>
                                                </div>


                                                <div className=' ml-14 flex flex-col gap-2 '>
                                                    <div className=' flex w-1/2  items-center  gap-2 text-gray-600 text-sm '>
                                                        <div><BiLike /></div>

                                                        <p>66</p>
                                                        <div><BiDislike /></div>
                                                        <p>22</p>
                                                        <p>Reply</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex p-2 border-2 border-gray-200 w-full justify-between'>
                                <div className=' flex'>
                                    <img src="/images/prof.jpeg" alt="" />
                                    <input type="text" className=' focus-visible:outline-none placeholder:p-2 ml-2' placeholder='Type here.....' onChange={(event)=>{
                                        setReply2(event.target.value)
                                       
                                    }} />
                                </div>
                                <img src="/images/send.jpeg" alt="" className=' w-10'
                                onClick={()=>{
                                    sendHandler()
                                   addHandler()
                                }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveProductComment