import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const Paymentproductcard = ({it,onQuantityChange}) => {
	const [quantity,setQuantity] =useState(1)
	let totalStocks = it.stock;

	if (totalStocks > 6) totalStocks = 6;
	let stockCheck = it.inStock == true ? 'In Stock' : 'Coming Soom';
	const quantityOptions = Array.from(
		{ length: totalStocks },
		(_, index) => index + 1
	);
	const handleQuantityChange = (e) => {
		
		setQuantity(e.target.value, 10);
		// Call the parent component callback with the new quantity
		onQuantityChange(e.target.value, 10);
	  };
	let discountCheck = it.isDiscount == true ? `₹ ${it.price}` : null;
	return (
		<div className="paymentcard flex w-full flex-row">
			<h3 className="font-bold mt-[5px]">1.</h3>
			<div className="w-40 h-40">
				<Image
					src={
						it.images && it.images.length > 0
							? it.images[0].url
							: '/images/Rect.png'
					}
					alt="Image"
					width={1000}
					height={1000}
					className="ml-[10px] w-full h-full   object-cover rounded-lg  "
				/>
			</div>
			<div>
				<div className="flex ml-[15px]">
					<h2 className="font-semibold">{it.productName}</h2>
					<h3 className="text-[14px] ml-[-10px] mt-[2px] text-[#EB8105]">
						{stockCheck}
					</h3>
				</div>
				<p className="text-[#7C7C7C] text-[13px] ml-[15px]">
					sold by{/* Sold by {it.sellerId} */}
				</p>
				<span className="line-through text-[#71717A] text-[14px] ml-[15px]">
					{discountCheck}
				</span>
				<span className="text-[#000000] text-[14px] ml-[5px]">
					₹ {(it.price - it.discount)*quantity}
				</span>
				<div className="flex mt-[5px]">
					<select className="w-[70px] ml-[8%] h-[30px] border rounded-lg border-[#000000] mr-2">
						<optgroup label="Dropdown 1">
							<option value="option1">Size 6</option>
							<option value="option2">Size 7</option>
							<option value="option3">Size 8</option>
						</optgroup>
					</select>
					<select
      className="w-[70px] ml-[0px] h-[30px] border rounded-lg border-[#000000] mr-2"
      value={quantity}
      onChange={handleQuantityChange}
    >
      {quantityOptions.map((quantity, index) => (
        <option key={index} value={quantity}>
          Qty: {quantity}
        </option>
      ))}
    </select>
				</div>
				<div className="flex flex-row items-center mt-[5px] ">
					<img
						src="/images/Arrow.svg"
						alt="Image"
						className="w-[18px] h-[18px] ml-[15px]"
					/>

					<span className="text-lg ml-[4px] font-base text-[15px]">
						14 days return available
					</span>
				</div>
				<div className="flex items-center ">
					<img
						src="/images/VectorTick.svg"
						alt="Image"
						className="w-[18px] h-[18px] ml-[15px]"
					/>

					<span className="text-lg ml-[4px] text-[15px]">Delivery by</span>
					<span className="text-lg ml-[4px] font-medium text-[15px]">
						12 June 2023
					</span>
				</div>
			</div>
		</div>
	);
};

export default Paymentproductcard;
