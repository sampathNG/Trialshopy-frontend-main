import React from 'react';
import StarRatingInput from '../star_rating/StarRatingInput';

const Review = ({ setReviewBoxOpen }) => {
	return (
		<>
			<div className="flex flex-col w-full h-full z-[100] p-5 bg-white">
				<div className="flex w-full md:justify-center md:items-center ">
					<div className="w-full ">
						<div className="flex flex-col  bg-white">
							<div className="text-[32px] font-semibold ">Write a Review</div>
							<div className="text-[16px]  font-medium ">Rate the product</div>
							<div className="py-2">
								{/* <img src='/star.svg'/> */}
								<StarRatingInput />
							</div>

							<div className="py-1">Message(13 from 999 symbol)</div>
							<textarea
								type="text"
								id="horizontalInput"
								className="w-full h-[125px] px-4 py-2 mb-4 leading-tight text-gray-700 bg-transparent border-[1px] appearance-none border-[#BBC1CC] focus:outline-none"
								placeholder="Write message"
							/>
							<div className="py-1 mb-1">Add Photo</div>

							<div>
								<div className="flex flex-col items-center justify-center px-[20] py-12 border-[1px] border-[#BBC1CC] ">
									<div>
										<img src="/upload.svg" />
									</div>
									<div>Click to upload</div>
								</div>
							</div>
							<div className="flex py-2 my-2">
								<button className="p-3text-[16px] rounded-[8px] w-1/2 mr-1 bg-[#EB8105] text-black ">
									Save
								</button>
								<button
									className="p-3  text-[16px] rounded-[8px] w-1/2 ml-1 bg-black text-white "
									onClick={() => setReviewBoxOpen(false)}>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Review;
