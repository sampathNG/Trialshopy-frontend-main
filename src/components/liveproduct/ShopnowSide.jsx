import React from 'react'
import { useState } from 'react'
import { Spinner } from "@material-tailwind/react";
import { BiCommentAdd } from 'react-icons/bi'
import Storeoverview from '../store/StoreOverview'

function ShopnowSide() {
    const [follow, setFollow] = useState(false)
    const [follow2, setFollow2] = useState(false)
    const [bottom1, setBottom1] = useState(false)
    const [bottom2, setBottom2] = useState(false)
    const [bottom3, setBottom3] = useState(false)
    const followHandler = () => {
        setFollow(!follow)

    }
    const followHandler2 = () => {
        setFollow2(!follow2)

    }
    const bottomHandler=()=>{
        setBottom1(true)
        setBottom2(true)
        setBottom3(true)
    }
    return (
        <>
            <div className=' w-4/5 p-5'>
                <div className=' flex gap-4 w-full '>
                    <div className={follow ? " hidden " : "block"} >
                        <div className=" text-xs text-white p-2 w-[150px] justify-center flex items-center gap-1    bottom-5 left-36 lg:left-24 xl:left-36 bg-[#333333] px-2"
                            onClick={() => {
                                followHandler2()
                                setTimeout(() => {
                                    followHandler()
                                }, 1000)
                            }}>
                            <div className={follow2 ? "hidden" : "block "}>
                                <img src="/images/plus.svg" alt="" className="inline h-3" />
                            </div>
                            <div className={follow2 ? "block" : "hidden "}>
                                <Spinner className=" inline h-3" />
                            </div>
                            <div className={follow2 ? "hidden" : "block "}>
                                <button className=" inline ">Follow store </button>
                            </div>
                            <div className={follow2 ? "block" : "hidden "}>
                                <button className=" inline  ">Following </button>
                            </div>

                        </div>
                    </div>

                    <div className=' flex items-center gap-1 border-2 px-1 text-sm border-[#CDCDCD]'>
                        <BiCommentAdd />
                        <button>
                            Write a Review
                        </button>
                    </div>
                    <div className=' flex items-center gap-1 border-2 border-[#CDCDCD] px-1 text-sm'>
                        <img src="/images/shr.jpeg" alt="" className=' w-3 h-3' />
                        <button>
                            Share
                        </button>
                    </div>
                </div>
                <div className=' flex justify-between '>
                    <div className={setBottom1?"border-b-4 border-b-black px-5":'border-2'}>
                        Overview
                    </div>
                    <div className=' border-b-4 border-b-black px-5'>

                        Reviews

                    </div>
                    <div className=' border-b-4 border-b-black px-5'>
                        Offers
                    </div>
                </div>
                {/* <Storeoverview /> */}
            </div>


        </>
    )
}

export default ShopnowSide