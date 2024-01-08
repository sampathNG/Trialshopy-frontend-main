import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect,useState } from 'react';
import CartItemCard from './CartItemCard';

export default function Cart({ setIsCart, cartItems }) {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, []);

	

	return (
		<>
			<div className="absolute bg-black bg-opacity-50 z-20 w-full h-full flex items-center justify-center">
				<div className="absolute top-auto right-5 lg:top-0 lg:right-0 bg-white w-[90vw] md:w-[60vw] lg:w-[40vw] h-[80vh] lg:h-full rounded shadow-2xl flex flex-col justify-between overflow-auto">
					<div>
						<div className="flex flex-row justify-between p-5">
							<div className='flex justify-between text-xl'>
								<h1 className='font-bold text-2xl'>Cart</h1>

							</div>
							<div
								className="hover:cursor-pointer border border-[#EB8105] rounded p-1"
								onClick={() => {
									setIsCart(false);
								}}>
								<AiOutlineClose size={20} />
							</div>
						</div>
						{setIsCart && cartItems.length > 0 ? (
							<>
								{cartItems.map((item) => {
									{console.log(item)}
									
									return (
										<>
											<CartItemCard
												product={item}
												key={Math.floor(Math.random() * 10 + 1)}
											/>
										</>
									);
								})}

								<div className='flex flex-col px-5'>
									<div className='flex justify-between'>
										<h1 className='text-lg'>Product Pricing:</h1>
										<div className='flex text-lg '><h1 className='pr-[5px] font-bold'> 125</h1></div>
									</div>
								</div>
								<div className='flex flex-col my-[12px] px-5'>
									<div className='flex justify-between'>
										<h1 className='text-lg'>Discount:</h1>
										<div className='flex text-lg '><h1 className='pr-[5px] font-bold text-[#16A34A]'>2.5%</h1></div>
									</div>
								</div>
								<hr />
								<div className='flex flex-col my-[12px] px-5'>
									<div className='flex justify-between'>
										<h1 className='text-lg'>Subtotal:</h1>
										<div className='flex text-lg '><h1 className='pr-[5px] font-bold'> 125</h1></div>
									</div>
								</div>
							</>
						) : (
							<div className="h-[50vh]">
								<Image
									width={20}
									height={20}
									alt="empty_cart"
									loading="eager"
									unoptimized={true}
									src={'/images/cart/Empty_box.gif'}
									className="w-[70vw] md:w-[40vw] lg:w-[20vw] m-auto lg:mt-20"
								/>
								<div className="text-center">
									Looks like your cart is empty!
								</div>
							</div>

						)}
					</div>
					<div className="px-1 md:px-5 w-full flex flex-row items-center justify-start py-4">
						<Link
							href="/account/wishlist"
							className="bg-gradient-to-b from-primary to-secondary w-full rounded mr-1 px-2 py-1 flex flex-row items-center justify-center">
							<AiFillHeart size="1rem" className="mr-1" />
							My Wishlist
						</Link>
						{cartItems.length!==0?(<Link
							href="/checkout"
							onClick={() => {
								setIsCart(false);
							}}
							className="text-center bg-gradient-to-b from-primary to-secondary w-full rounded ml-1 px-2 py-1">
							Checkout
						</Link>):
						(<Link
							href="/"
							onClick={() => {
								setIsCart(false);
							}}
							className="text-center bg-gradient-to-b from-primary to-secondary w-full rounded ml-1 px-2 py-1">
							Continue Shopping
						</Link>)}
					</div>
				</div>
			</div>
		</>
	);
}
