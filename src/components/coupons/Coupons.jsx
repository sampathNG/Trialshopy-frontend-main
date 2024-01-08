import React, { useState, useEffect } from 'react';
import column2Data from './column2Data.json';
import axios from 'axios';
import Image from 'next/image';
const Coupons = () => {
	const [couponsData, setCouponsData] = useState([]);
	const [isCopied, setIsCopied] = useState(false); // State for showing the "Copied" message

	useEffect(() => {
		// Fetch data from your API
		axios
			.get('https://trialshopy-backend.onrender.com/api/v1/coupons/getAll')
			.then((response) => {
				setCouponsData(response.data);
			})
			.catch((error) => {
				console.error('Error fetching coupons:', error);
			});
	}, []);

	const handleCopyClick = (code) => {
		// Create a temporary input element to copy the text
		const tempInput = document.createElement('input');
		tempInput.value = code;
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand('copy');
		document.body.removeChild(tempInput);

		// Set isCopied to true to display the "Copied" message
		setIsCopied(true);

		// Reset isCopied after a short delay
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

	const Column = ({ discount, validTo, price, code, time }) => (
		<>
			<div>
				<div className="flex flex-row  border-black border-[1px] m-4">
					<div className="w-2/5 md:w-1/5 border-r-gray-400    border-[1px] ">
						<div className="grid items-center text-[20px] text-[#059669] font-semibold justify-center py-4 h-2/3">
							<span>{discount}</span>
							<span>OFF</span>
						</div>
						<div className="flex items-center  border-t-gray-400  border-[1px] justify-center  text-[14px] h-1/3">
							Expiry:<span className="font-semibold">{validTo}</span>
						</div>
					</div>

					<div className="flex flex-col w-3/5 md:w-4/5">
						<div className="flex flex-col px-3 py-5 h-2/3">
							<span className="text-[#7C7C7C]">
								On minimum purchase of{' '}
								<span className="text-[#18181B] ">Rs.{price} </span>
							</span>
							<span className="flex flex-row ">
								<span>
									Code: <span className="px-1 font-semibold">{code} </span>
								</span>
								<span className="px-2" onClick={() => handleCopyClick(code)}>
									<Image
										src="/images/Vector8.svg"
										alt="Copy"
										style={{ cursor: 'pointer' }}
									/>
								</span>
							</span>
						</div>
						<div className="flex flex-row px-3 justify-between pt-3 sm:pt-2  border-t-gray-400  border-[1px] py-1 h-1/3">
							<span className="justify-start ">{time}</span>
							<span className="ml-auto text-[#EB8105] text-[14px] font-semibold ">
								<button>See Benefits</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);

	const Column2 = ({ coupon, desc, exp, Line }) => (
		<>
			<div className="flex flex-row w-full px-3 text-[#7C7C7C] text-[14px] py-1 my-1 ">
				<div className="flex justify-center w-1/4 ">{coupon}</div>
				<div className="flex justify-center w-1/2 ">{desc}</div>
				<div className="flex justify-center w-1/4 ">{exp}</div>
			</div>
			<div className="flex items-center justify-center">
				<Image src={`/images/${Line}`} alt="image" className="my-2 bg-black w-[95%] " />
			</div>
		</>
	);

	return (
		<>
			{isCopied && <div className="text-green-500">Copied!</div>}

			{couponsData.map((couponItem, index) => (
				<Column key={index} {...couponItem} />
			))}
			<div className="flex-row hidden w-full px-4 py-3 my-1 lg:flex text-[14px] font-medium">
				<div className="flex justify-center w-1/4">COUPON</div>
				<div className="flex justify-center w-2/4">DESCRIPTION</div>
				<div className="flex justify-center w-1/4">EXP. ON</div>
			</div>
			<div className="flex items-center justify-center">
				<Image src="/images/Line2.png" alt="" className="my-2 bg-black w-[95%]" />
			</div>
			<div className="hidden lg:block">
				{column2Data.map((item, index) => (
					<Column2 key={index} {...item} />
				))}
			</div>
		</>
	);
};

export default Coupons;
