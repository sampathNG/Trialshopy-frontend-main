import React, { useEffect, useState } from 'react';
import {
	AiOutlineRight,
	AiOutlineStar,
	AiFillCheckCircle,
} from 'react-icons/ai';
import { BsFillRecordFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

const Orders = () => {
	const [orderData, setOrderData] = useState([]);
	let iconStyles = { color: '#7C7C7C', fontSize: '8px' };

	useEffect(() => {
		// Fetch data from your API using Axios
		const userId = '64b161653d8484b51874229c'; // Replace with the actual userId
		axios
			.get(`https://trialshopy-backend.onrender.com/api/v1/${userId}/myOrders`)
			.then((response) => {
				if (response.data.data) {
					setOrderData(response.data.data);
				}
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	return (
		<>
			<div className="md:flex mx-6">
				<div className="w-full md:w-full md:ml-6 p-4 bg-gray-100 h-full flex flex-col justify-">
					{orderData.map((item, index) => {
						return (
							<Link
								href={`/account/orders/order-details/${item._id}`} // You might want to replace this URL with the actual order details page URL
								key={index}
								className="md:w-full mb-4 bg-white p-6 rounded-md">
								<div className="flex items-center">
									<div className="w-fit h-fit rounded-full">
										<Image
											width={30}
											height={30}
											className="w-full"
											src={item.products.product?.images?.[0]?.url} // Display the first product's image or a default image
											alt="Product Image"
										/>
									</div>
									<div className="ml-4">
										<div className="flex items-center text-[#059669]">
											<div className="mr-1 md:text-[16px] text-[14px]">
												{item.products[0].status}{' '}
												{/* Display the status of the first product */}
											</div>
											<AiFillCheckCircle />
										</div>
										<p className="md:text-[14px] text-[12px] text-[#7C7C7C]">
											{item.orderDate} {/* Display the order date */}
										</p>
									</div>
								</div>
								<div className="flex items-center my-3 justify-between">
									<div className="flex items-center p-1">
										<div className="">
											<Image
												width={40}
												height={80}
												className="w-20 h-30"
												src={item.products.product?.images?.[0]?.url} // Display the first product's image or a default image
												alt="Product Image"
											/>
										</div>
										<div className="ml-4">
											<div className="md:text-[18px] text-[16px]">
												{item.products[0].product.productName}{' '}
												{/* Display the product name */}
											</div>
											<div className="md:text-[14px] text-[12px] text-[#7C7C7C]">
												{item.products[0].product.shortDescription}{' '}
												{/* Display the product description */}
											</div>
											<div className="md:text-[14px] text-[12px] text-[#7C7C7C]">
												Price: ${item.products[0].product.price}{' '}
												{/* Display the product price */}
											</div>
											<div className="flex flex-row items-center text-[#7C7C7C]">
												<Image
													width={40}
													height={80}
													className="w-5 h-5"
													src={'/images/order/HalfStar.svg'}
													alt="imgg"
												/>
												{item.products[0].product.rating}{' '}
												{/* Display the product rating */}
											</div>
										</div>
									</div>
									<div className="text-[#7C7C7C] w-[7.14px] h-[12px]">
										<AiOutlineRight />
									</div>
								</div>
								<div className="bg-[#F3F3F3] text-[#7C7C7C]  pl-2 my-2 flex items-center">
									<div>
										<BsFillRecordFill {...iconStyles} />
									</div>
									<div className=" md:text-[14px] py-2 ml-2 text-[12px]">
										{item.products[0].status}{' '}
										{/* Display the status of the first product */}
									</div>
								</div>
								<div className="flex items-center bg-[#F3F3F3] text-[#7C7C7C] py-2 pl-2 my-2">
									<div className="md:text-[14px] text-[12px]">
										Rate Product
										{/* Total Price: ${item.totalPrice} Display the total price */}
									</div>
									<div className="flex items-center ml-3">
										<AiOutlineStar />
										<AiOutlineStar />
										<AiOutlineStar />
										<AiOutlineStar />
										<AiOutlineStar />
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Orders;
