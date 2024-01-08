import React from 'react';
const StoreOffers = () => {
	const Column = ({
		imageName,

		Name,

		discription,
		time,
	}) => (
		<>
			<section className="m-2 hover:border-blue-700  w-full   overflow-hidden shadow-md border-[2px]     ">
				<div className="py-1 ">
					<div className=" flex flex-row ">
						<div className=" lg:w-full sm:w-4/5 w-3/5 bg-[#F1F1F180] lg:py-2 px-4 lg:bg-white  ">
							<h2 className="text-[14px] font-semibold pt-1 ">{Name}</h2>
							<div className="flex flex-row">
								<span className=" text-[#7C7C7C] text-[10px] lg:text-[14px] justify-start">
									{discription}
								</span>
							</div>
							<div className="text-[#7C7C7C] text-[12px] py-1">{time}</div>
						</div>
						<div className="w-2/5 px-2 sm:w-1/5 lg:w-fit">
							<a className="block relative  rounded overflow-hidden">
								<img
									alt="ecommerce"
									className=" p-2 mx-1 lg:h-[20vh] lg:w-[20vh] w-5/6 h-5/6 rounded"
									src={`/images/${imageName}`}
								/>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
	return (
		<div className="w-full">
			<div className="m-4 text-[18px] font-semibold"> Offers</div>
			<div>
				<Column
					imageName="bed.png"
					Name="Buy Google Pixel 7a Now!"
					time="17second ago"
					discription="Starting at Rs. 39,999, comes with Google Tensor G2 Processor & 64MP Camera Hurry. Get Early Bird Offers."
				/>
				<Column
					imageName="cloth2.png"
					Name="Buy Google Pixel 7a Now!"
					time="17second ago"
					discription="Starting at Rs. 39,999, comes with Google Tensor G2 Processor & 64MP Camera Hurry. Get Early Bird Offers."
				/>
				<Column
					imageName="cloth2.png"
					Name="Buy Google Pixel 7a Now!"
					time="17second ago"
					discription="Starting at Rs. 39,999, comes with Google Tensor G2 Processor & 64MP Camera Hurry. Get Early Bird Offers."
				/>
				<Column
					imageName="cloth2.png"
					Name="Buy Google Pixel 7a Now!"
					time="17second ago"
					discription="Starting at Rs. 39,999, comes with Google Tensor G2 Processor & 64MP Camera Hurry. Get Early Bird Offers."
				/>
				<Column
					imageName="cloth2.png"
					Name="Buy Google Pixel 7a Now!"
					time="17second ago"
					discription="Starting at Rs. 39,999, comes with Google Tensor G2 Processor & 64MP Camera Hurry. Get Early Bird Offers."
				/>
				<Column
					imageName="cloth2.png"
					Name="Buy Google Pixel 7a Now!"
					time="17second ago"
					discription="Starting at Rs. 39,999, comes with Google Tensor G2 Processor & 64MP Camera Hurry. Get Early Bird Offers."
				/>
			</div>
		</div>
	);
};

export default StoreOffers;
