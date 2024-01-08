import {
    AiOutlineLike,
    AiOutlineDislike,
    AiFillLike,
    AiFillDislike,
} from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { FaShare } from 'react-icons/fa';
import { SlOptions } from 'react-icons/sl';
import { useState, useEffect, useRef } from 'react';
import { BsFillVolumeMuteFill } from 'react-icons/bs';
import { VscUnmute } from 'react-icons/vsc';
import { BsPlay } from 'react-icons/bs';
import { AiOutlinePause } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from '@material-tailwind/react';
// import Upload from './UploadPhoto';


function LiveProduct({ liveProductData, setShare, src, setComment }) {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(100);
    const [dislike, setDislike] = useState(false);
    const [dislikeCount, setDislikeCount] = useState(10);
    const [play, setPlay] = useState(false);
    const [mute, setMute] = useState(false);
    const videoRef = useRef(null);
    const [follow, setFollow] = useState(false);
    const [follow2, setFollow2] = useState(false);



    const followHandler = () => {
        setFollow(!follow);
    };
    const followHandler2 = () => {
        setFollow2(!follow2);
    };

    return (
        <>
            <div className=' w-full  flex justify-center  flex-row '>
               
                    <div className="w-72 relative h-[520px] items-center bg-gray-200 flex my-12  ">
                        <div className=' w-72 '>
                            <video width={'320'} src={src}  ref={videoRef} className='w-72'  />
                            <div className="  items-center text-center mr-5 absolute  right-0 bottom-20 md:bottom-0 sm:left-80 gap-1 pb-2 sm:gap-3 flex flex-col  justify-end ">
                                <div className=" gap-1 flex  flex-col">
                                    {like ? (
                                        <div className="bg-white sm:bg-gray-400 rounded-full h-10 w-10 flex items-center">
                                            <AiFillLike
                                                className="text-2xl w-12   text-blue-500"
                                                onClick={() => {
                                                    setLike(false);
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="bg-white sm:bg-gray-400 rounded-full h-10 w-10 flex items-center">
                                            <AiOutlineLike
                                                className="text-2xl w-12 "
                                                onClick={() => {
                                                    setLike(true);
                                                    setLikeCount(likeCount + 1);
                                                    if (dislike) {
                                                        setDislike(false);
                                                        setDislikeCount(dislikeCount - 1);
                                                    }
                                                }}
                                            />
                                        </div>
                                    )}
                                    <p className="font-bold sm:font-normal sm:inline text-white sm:text-black text-xs ">
                                        {likeCount}
                                    </p>
                                </div>
                                <div className=" gap-1 flex   flex-col">
                                    {dislike ? (
                                        <div className="bg-white sm:bg-gray-400 rounded-full h-10 w-10 flex items-center">
                                            {' '}
                                            <AiFillDislike
                                                className="text-2xl w-12 text-blue-500"
                                                onClick={() => {
                                                    setDislike(false);
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="bg-white sm:bg-gray-400 rounded-full h-10 w-10 flex items-center">
                                            {' '}
                                            <AiOutlineDislike
                                                className="text-2xl w-12"
                                                onClick={() => {
                                                    setDislike(true);
                                                    setDislikeCount(dislikeCount + 1);
                                                    if (like) {
                                                        setLike(false);
                                                        setLikeCount(likeCount - 1);
                                                    }
                                                }}
                                            />
                                        </div>
                                    )}
                                    <p className="font-bold sm:font-normal sm:inline text-white sm:text-black text-xs ">
                                        {dislikeCount}
                                    </p>
                                </div>
                                <div
                                    className=" gap-1 flex items-center flex-col"
                                    onClick={() => {
                                        setComment(true);
                                    }}>
                                    <div className="bg-white sm:bg-gray-400 rounded-full h-10 w-10 flex items-center">
                                        <BiCommentDetail className="text-2xl w-12" />
                                    </div>
                                    <p className="font-bold sm:font-normal sm:inline text-white sm:text-black text-xs ">
                                        {33}
                                    </p>
                                </div>
                                <div
                                    className=" gap-1 flex  flex-col"
                                    onClick={() => {
                                        setShare(true);
                                    }}>
                                    <div className="bg-white sm:bg-gray-400 rounded-full h-10 w-10 flex items-center">
                                        <FaShare className="text-2xl w-12" />
                                    </div>
                                    <p className="font-bold sm:font-normal sm:inline text-white sm:text-black text-xs  ">
                                        Share
                                    </p>
                                </div>
                                <div className=" gap-1 flex  flex-col ">
                                    <div className="bg-white sm:bg-gray-400 rounded-full h-10 w-10 flex items-center ">
                                        <SlOptions className="text-2xl w-12 " />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=" flex mt-2">
                            {play ? (
                                <AiOutlinePause
                                    className=" absolute text-3xl text-white top-60 left-32"
                                    onClick={() => {
                                        setPlay(false);
                                        videoRef.current.pause();
                                    }}
                                />
                            ) : (
                                <BsPlay
                                    className=" absolute top-60 left-32 text-3xl text-white"
                                    onClick={() => {
                                        setPlay(true);
                                        videoRef.current.play();
                                    }}
                                />
                            )}
                            {mute ? (
                                <BsFillVolumeMuteFill
                                    className="absolute  text-4xl text-white  right-0"
                                    onClick={() => {
                                        setMute(false);
                                        videoRef.current.muted = false;
                                    }}
                                />
                            ) : (
                                <VscUnmute
                                    className="absolute  text-2xl h-9 text-white top-2 right-1 "
                                    onClick={() => {
                                        setMute(true);
                                        videoRef.current.muted = true;
                                    }}
                                />
                            )}
                        </div>
                        <a href="nearByStore/store?storeId=653ce437b3b44b12a4776cdc">
                            <button className="absolute  w-[110px]  bottom-14 text-xs left-40 lg:left-24 xl:left-44 bg-[#EB8105] px-2 py-1 ">
                                Shop now
                            </button>
                        </a>
                        <div className={follow ? ' hidden ' : 'block'}>
                            <div
                                className=" text-xs text-white p-1 w-[110px] flex items-center gap-1  absolute  bottom-5 left-40 lg:left-24 xl:left-44 bg-[#333333] px-2"
                                onClick={() => {
                                    followHandler2();
                                    setTimeout(() => {
                                        followHandler();
                                    }, 1000);
                                }}>
                                <div className={follow2 ? 'hidden' : 'block '}>
                                    <img src="/images/plus.svg" alt="" className="inline h-3" />
                                </div>
                                <div className={follow2 ? 'block' : 'hidden '}>
                                    <Spinner className=" inline h-3" />
                                </div>
                                <div className={follow2 ? 'hidden' : 'block '}>
                                    <button className=" inline ">Follow store </button>
                                </div>
                                <div className={follow2 ? 'block' : 'hidden '}>
                                    <button className=" inline  ">Following </button>
                                </div>
                            </div>
                        </div>
                        <div className=" flex ">
                            <img
                                src="/images/prof.jpeg"
                                alt=".."
                                className=" left-1 absolute bottom-10 h-6"
                            />
                            <p className=" absolute text-white bottom-11 text-xs w-32 overflow-hidden  left-8">
                                Seajal Readymade clothes{' '}
                            </p>
                        </div>
                    </div>


              
            </div>
        </>
    );
}

export default LiveProduct;
