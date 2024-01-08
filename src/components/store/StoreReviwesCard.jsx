import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const StoreReviwesCard = ({ items }) => {
	const renderRatingStars = (rating) => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		const starIcons = [];

		for (let i = 0; i < fullStars; i++) {
			starIcons.push(<AiFillStar key={i} className="text-[#FAC50C] mr-0.5" />);
		}

		if (hasHalfStar) {
			starIcons.push(
				<AiOutlineStar key={fullStars} className="text-gray-400" />
			);
		}

		return starIcons;
	};

	if (!items || !Array.isArray(items) || items.length === 0) {
		return (
			<div className="flex items-center justify-center text-black">
				<p>No Reviews yet!</p>
			</div>
		);
	}

	return (
		<div className="flex flex-row items-center justify-between w-full gap-3 overflow-auto grid-container">
			{items.map((el) => {
				const { id, name, image,rating, discription } = el;

				return (
					<div
						key={id}
						className=" 2xl:w-[360px] md:w-[360px]  w-[184px] sm:w-[184px] h-auto bg-gray-800 ml-0 text-white flex flex-col items-center shrink-0  cursor-pointer pb-5">
						<div className="gap-2.5 flex w-full mt-5">
							<img
								src={image}
								alt={name}
								className="w-[34px] h-[34px] items-start ml-5"
							/>
							<p className="w-full h-30 font-poppins text-sm lg:text-base leading-[150%] font-[600] ml-3 items-center mt-1">
								{name}
							</p>
						</div>

						<div className="w-full">
							<div className="flex flex-row text-gray-500 text-xl my-2 mt-3 ml-5 gap-2">
								{renderRatingStars(rating)}
							</div>
							<div className="title ml-5 px-1">
								<p>{discription}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default StoreReviwesCard;
