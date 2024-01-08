import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { MdArrowForwardIos, MdOutlinePhone } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import Link from 'next/link';

const OrderDetails = () => {
	return (
		<>
			<div className="m-3 overflow-x-hidden">
				<div className="flex flex-row my-3 ">
					<div className="flex flex-col mb-2 ">
						<span className="text-[18px] font-medium">All Orders</span>
						<span className="text-[#7C7C7C] text-[14px]"> from anytime</span>
					</div>
					<div className="flex flex-row justify-end m-2 ml-auto">
						<div className="md:flex hidden flex-row border-[1px]  border-black  mx-2">
							<span className="flex flex-row">
								<Image
									width={20}
									height={20}
									alt=""
									src={'/images/Vector18.png'}
									className="w-8 h-8 my-auto p-2"
								/>
							</span>
							<input
								type="text"
								placeholder="Search in orders"
								className=" -p-2"
							/>
						</div>
						<div className="flex items-center justify-center ">
							<button className="flex flex-row px-6 py-2 border-[1px] border-black">
								<span>
									<Image
										width={20}
										height={20}
										alt=""
										src={'/images/Vector19.png'}
										className="w-[30px] p-2"
									/>
								</span>
								Filter
							</button>
						</div>
					</div>
				</div>
				<div className="flex md:hidden w-max-[94vw] py-2 mb-4 flex-row border-[1px]  border-black  mx-2">
					<span className="flex flex-row">
						<Image
							width={20}
							height={20}
							alt=""
							src={'/images/Vector18.png'}
							className="w-[30px] p-2"
						/>
					</span>
					<input type="text" placeholder="Search in orders" className=" -p-2" />
				</div>
				<div className="flex flex-row my-3 mb-6 md:hidden">
					<button className="flex w-[93vw] py-2 justify-center flex-row text-white bg-black">
						<span>Help</span>
						<span>
							<Image
								width={20}
								height={20}
								// className="w-20 h-30"
								src={'/images/Vector26.png'}
								alt="imgg"
							/>
						</span>
					</button>
				</div>
				{/* ...... */}
				<div className="flex flex-row ">
					<div className="flex w-full md:flex-row md:w-1/2 ">
						<Image
							width={40}
							height={80}
							className="w-20 h-30"
							src={'/images/order/Allensolly.svg'}
							alt="imgg"
						/>
						<span className="mx-3">
							<h2 className="text-[18px] font-bold   tracking-widest text-black ">
								Allen Solly
							</h2>
							<h1 className="mb-1 text-[14px] md:text-[16px] text-[#7C7C7C]  ">
								Men Black Polo Collar T-shirt
							</h1>
							<h1 className="mb-1 text-[14px] md:text-[16px] text-[#7C7C7C]   ">
								Size: XL
							</h1>
							<h1 className="flex flex-row my-3 mb-1 ">
								<FaStar className="text-yellow-500 mx-0.5" />
								<FaStar className="text-yellow-500 mx-0.5" />
								<FaStar className="text-yellow-500 mx-0.5" />
								<FaStar className="text-yellow-500 mx-0.5" />
								<FaStar className="text-yellow-500 mx-0.5" />
								<span className="mx-2 text-[#A1A1AA] md:flex hidden text-[16px]">
									(4.5)
								</span>
							</h1>
						</span>
					</div>
					<div className="items-center hidden mx-4 md:grid md:w-1/2 py-auto ">
						<Link
							href="#"
							className="w-fit flex flex-row items-center bg-gradient-to-b from-primary to-secondary px-4 py-2 rounded-sm ml-auto">
							View Products
							<MdArrowForwardIos className="mx-1" />
						</Link>
					</div>
				</div>
				<div className="flex w-full py-3 my-3 bg-green-600">
					<span className="mx-2 mt-2">
						<Image
							width={20}
							height={20}
							className="w-10 h-10 p-2"
							src={'/images/Vector20.png'}
							alt="imgg"
						/>
					</span>
					<span className="flex flex-col">
						<span className="text-[16px] text-white font-medium">
							Delivered
						</span>
						<span className="text-[14px] text-white">On Fri,13 Jan</span>
					</span>
				</div>
				<div className="my-4">
					<div className="flex flex-row">
						<TbTruckDelivery className="text-red-400 text-2xl mr-2" />
						EXPRESS
						<span className="text-[#7C7C7C] text-[14px] mx-1">
							Order delivered in 30 Mint
						</span>
					</div>
					<div className="my-3">
						<span className="pl-2 font-bold">∙</span>
						<span className="px-2 text-[#7C7C7C] text-[14px]">
							Exchange/Return window closed on 12 Feb
						</span>
					</div>
				</div>

				<div className="text-[16px] font-medium">Delivery Address</div>
				<div className="flex flex-col my-3">
					<span className="text-[14px] font-medium">Charlotte</span>
					<span className="text-[14px] font-medium my-1">0124569789</span>
					<span className="text-[14px] text-[#7C7C7C]">
						225,Guitarmonk,vinod nagar,New Delhi
					</span>
				</div>
				<div className="text-[16px] font-medium">Payment Information</div>

				<div className="flex flex-row w-full px-3 text-[#7C7C7C] text-[14px] py-1 my-1 border-b border-gray-500">
					<div className="flex justify-start text-[16px] ">
						1 x Allen Solly Men Black Polo Collar T-shirt
					</div>

					<div className="flex justify-end ml-auto font-medium text-black ">
						₹899.00
					</div>
				</div>

				<div className="flex flex-row w-full px-3 text-[#7C7C7C] text-[14px] py-1 my-1 border-b border-gray-500">
					<div className="flex justify-start text-[16px] ">Discount</div>

					<div className="flex justify-end ml-auto font-medium text-black ">
						-₹315.00
					</div>
				</div>

				<div className="flex flex-row w-full px-3 text-[#7C7C7C] text-[14px] py-1 my-1 border-b border-gray-500">
					<div className="flex justify-start text-[16px] ">
						Discounted Price
					</div>

					<div className="flex justify-end ml-auto font-medium text-black ">
						₹584.00
					</div>
				</div>

				<div className="flex flex-row w-full px-3 text-[#7C7C7C] text-[14px] py-1 my-1 border-b border-gray-500">
					<div className="flex justify-start text-[18px] font-semibold text-black ">
						Total Paid
					</div>

					<div className="flex justify-end ml-auto font-medium text-black ">
						₹584.00
					</div>
				</div>

				<div className=" bg-[#F3F3F3] lg:w-1/5 md:w-1/3 w-3/5 flex flex-row py-4 my-3 px-6">
					<Image src="/images/bhim.svg" alt="myIcon" width={30} height={30} />
					<span className="text-[#7C7C7C] text-14px mx-2">Paid by UPI</span>
				</div>
				<div>
					<div className="my-1 text-[16px] font-medium">Updates sent to</div>
					<div className="flex flex-row items-center px-3 text-[#7C7C7C] text-xl">
						<MdOutlinePhone />
						01234568764
					</div>
				</div>
				<div className="my-3">
					<span className="text-[#7C7C7C]">Order ID</span>
					<span className="text-[#7C7C7C]"># 1234568 6543289900856</span>
				</div>
			</div>
		</>
	);
};

export default OrderDetails;
