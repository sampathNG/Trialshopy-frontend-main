import React, { useState } from 'react';
import SimilarProductCard from './SimilarProductCard';
import { useRouter } from 'next/router';
import ProductReviews from '../productReview/ProductReview';
import AddProductReview from './AddProductReview';
const SimilarProducts = ({ similarProducts }) => {
	const router = useRouter();

	const seeAllPage = () => {
		// Redirect to another page when the button is clicked
		router.push('/products');
	};

	return (
		<div className="px-4 lg:px-[120px] flex flex-col items-start w-full gap-6 py-4 lg:py-8 overflow-auto">
			<div>
				<AddProductReview />
				<div className="w-full h-px bg-gradient-to-r from-gray-700"></div>
				<ProductReviews />
			</div>
			<div className="flex items-center justify-between w-full">
				<h1 className="text-xl font-semibold lg:text-3xl">Similar Products</h1>
				<button
					onClick={seeAllPage}
					className="flex items-center gap-1 p-2 text-white bg-black">
					See All
					<div>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_76_7020)">
								<path
									d="M7.49988 4.5L6.44238 5.5575L9.87738 9L6.44238 12.4425L7.49988 13.5L11.9999 9L7.49988 4.5Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0_76_7020">
									<rect width="18" height="18" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
				</button>
			</div>

			<div className="w-full mt-4 overflow-auto md:m-0 grid-container ">
				{similarProducts && similarProducts.length ? (
					<div className="flex items-center justify-between w-full gap-4 md:gap-8 min-w-max">
						{similarProducts.map((product, key) => (
							<SimilarProductCard key={key} productDetails={product} />
						))}
					</div>
				) : (
					<p>No Products to show!</p>
				)}
			</div>
		</div>
	);
};

export default SimilarProducts;
