import React, { useState, useEffect } from 'react';
import Review from '../store/Review';
import Image from 'next/image';

const AddProductReview = () => {
	const [reviewBoxOpen, setReviewBoxOpen] = useState(false);

	return (
		<div className="flex flex-col w-full">
			{/* Use flex-col to arrange items vertically */}
			<div className="flex justify-between w-full">
				<div>
					<h1 className="text-base font-semibold lg:text-xl">Review</h1>
				</div>
				<div
					className="bg-black text-white  border border-gray-400 cursor-pointer font-fontMedium text-xs px-4 sm:px-8 py-2 "
					onClick={() => setReviewBoxOpen(!reviewBoxOpen)}>
					<div className="">Write a Review</div>
				</div>
			</div>
			{reviewBoxOpen && (
				<div className="absolute w-full lg:w-4/5 xl:w-[600px] xl:ml-[170px] mt-16 2xl:w-[600px] 2xl:ml-96 shadow-lg  ">
					<Review setReviewBoxOpen={setReviewBoxOpen} />
				</div>
			)}
		</div>
	);
};

export default AddProductReview;
