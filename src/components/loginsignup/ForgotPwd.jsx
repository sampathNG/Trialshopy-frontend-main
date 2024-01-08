import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import Otp from './Otp';
const ForgotPwd = () => {

    return (
        <>
            <div className="flex items-center justify-center sm:h-screen h-[50vh] sm:justify-start sm:items-center ">
                <div className="flex items-center justify-center gap-5 p-0 m-0 text-black ">
                    <div className="sm:pl-4 flex sm:w-[480px] h-fit sm:ml-20 w-[340px] bg-white flex-col mx-29 p-3 justify-center rounded-md">
                        <div className="flex justify-center items-center sm:w-[440px]  mt-4 mb-3">
                            <Image
                                width={20}
                                height={20}
                                src={'/images/NameLogo.svg'}
                                className="ml-[-100px] sm:w-[260px] w-[210px] h-[47px] sm:ml-0 sm:h-[60px] sm:justify-center sm:items-center"
                                alt="Logo"
                            />
                        </div>
                        <div className="flex w-full flex-col sm:max-w-[450px]  justify-between">
                            <div className="flex flex-col w-full mb-2">
                                <p className="flex-wrap items-center my-2 mb-4 text-xl font-semibold text-center">
                                    Change Password						</p>
                                <p className="flex-wrap mb-2 text-xs text-center text-gray-500">
                                    An OTP wil be sent to your Registered Email or Mobile Number
                                </p>
                            </div>
                            <div className="flex flex-col w-full">
                                <input
                                    type="email"
                                    placeholder="Enter  Mobile number or Email"
                                    className={`w-full h-[47px] px-2 py-1 border border-gray-400 rounded-md `}
                                />
                            </div>
                            <Link href={'/account/Otpsent'}> <button
                                className="flex flex-col w-full my-1"
                                type="submit"
                            >
                                <div className="w-full text-white my-2 bg-orange-400  rounded-md h-[48px] p-1 text-center flex items-center justify-center">
                                    Request OTP						</div>
                            </button>
                            </Link>
                            <div className="flex flex-row justify-center mt-20 mb-1">
                                <button className="text-[14px] mb-1 text-gray-600 mx-2 hover:font-semibold">
                                    {' '}
                                    Help
                                </button>
                                <button className="text-[14px] mb-1 text-gray-600 mx-2 hover:font-semibold">
                                    Privacy
                                </button>
                                <button className="text-[14px] mb-1 text-gray-600 mx-2 hover:font-semibold">
                                    Terms
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default ForgotPwd
