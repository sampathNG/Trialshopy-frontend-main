import React from 'react';
import Image from 'next/image';
import StarRating from '../star_rating/StarRating';
const con = '/images/contact.png';
const y_star = '/images/yellow_star.png';
const w_star = '/images/white_star.png';
const image = '/images/image.png';

const Banner = ({ storeData }) => {
	const serverURL = process.env.BASE_API_URL;
	// console.log(storeData);
	const {
		storeName,
		storeDescription,
		rating = {
			rating: 0,
			count: 0,
		},
		followers = { count: 0 },
		images = [],
		openingHours,
		addressDetails = {},
	} = storeData;
	const banner =
		images.length > 0 ? `${images[0].url}` : '/images/banner_back.jpg';

	const currentDate = new Date();
	const currentHour = currentDate.getHours();

	const currentDayOfWeek = currentDate.getDay();

	const openingTime = openingHours[currentDayOfWeek]?.open;
	const closingTime = openingHours[currentDayOfWeek]?.close;

	const isStoreOpen =
		currentHour >= Number(openingTime) && currentHour < Number(closingTime);

	return (
		<div className="w-screen md:h-[500px] min-h-[300px] overflow-hidden relative">
			<Image
				className=" w-full"
				width={1000}
				height={500}
				src={banner}
				alt="img"
			/>
			<div className="absolute w-full h-[500px] bg-gradient-to-t from-black top-0"></div>
			<div className="absolute md:mx-28 md:w-3/5 mx-6 bottom-0">
				<div className="md:text-[28px] text-[20px] text-[#FFF] font-semibold md:mb-4 mb-3">
					{storeName}
				</div>
				<div className="flex items-center md:gap-[25px] gap-[20px] mb-3">
					<div className="border-[1px] border-[#CDCDCD] rounded md:rounded-[8px] text-[#FFF] text-[12px] bg-[#15790C] px-3 py-1">
						{rating.rating}
					</div>
					<div className="flex items-center md:gap-[20px] h-[16px] md:h-[25px] gap-[15px]">
						<StarRating stars={rating.rating}  className="h-full"/>
					</div>
					<div className="md:text-[18px] text-[14px] text-[#FFF]">
						{rating.count} Reviews
					</div>
				</div>

				<div className="flex items-center md:gap-[40px] gap-[20px] md:mb-3 mb-2">
					<div className="flex items-center">
						<div>
							<img className=" h-[25px]" src={con} alt="img" />
						</div>
						<div className="md:text-[20px] text-[12px] text-[#FFF] font-semibold ml-2">
							{followers.count} Followers
						</div>
					</div>
					<div className="flex items-center">
						<div>
							<img className=" h-[25px]" src={image} alt="img" />
						</div>
						<div className="md:text-[20px] text-[12px] text-[#FFF] font-semibold ml-2">
							{images.length} Photos added
						</div>
					</div>
				</div>

				<div className="flex items-start md:mb-3 mb-2">
					<div className="border-[1px] border-[#CDCDCD] rounded-[9px] md:rounded-[18px] md:text-[16px] text-[11px] text-center text-[#FFF] px-3 md:px-4 py-0.5 md:py-1">
						₹₹
					</div>
					<div className="md:text-[18px] text-[12px] text-[#FFF] font-semibold ml-2 text-ellipsis overflow-hidden">
						{/* {storeData.categories.map((category) => {
							<span>{category.categoryName}, </span>;
						})} */}
						{storeDescription}
					</div>
				</div>

				<div className="flex items-center mb-6">
					{isStoreOpen ? (
						<>
							<div className="text-[#15790C] font-semibold md:text-[20px] text-[12px] md:mb-1">
								Open Now
							</div>
							<span className="md:text-[18px] text-[12px] text-[#FFF] font-semibold ml-2">
								Till {closingTime}{' '}
							</span>
						</>
					) : (
						<>
							<div className="text-[red] font-semibold md:text-[20px] text-[12px] md:mb-1">
								Closed
							</div>
							<span className="md:text-[18px] text-[12px] text-[#FFF] font-semibold ml-2">
								{' '}
								Opens at {openingTime ?? 'UA*'}
							</span>
						</>
					)}

					<div className="md:text-[18px] text-[12px] text-[#FFF] font-semibold ml-2">
						{addressDetails.addressLine1}
						{addressDetails.townOrCity} {addressDetails.state}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
