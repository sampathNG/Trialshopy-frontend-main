import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewCard = ({
	reviewerName,
	location,
	rating,
	description,
	images,
}) => {
	const [likes, setLikes] = useState(0);
	const [loves, setLoves] = useState(0);
	const [lols, setLols] = useState(0);

	const handleLike = () => {
		setLikes(likes + 1);
	};

	const handleLove = () => {
		setLoves(loves + 1);
	};

	const handleLol = () => {
		setLols(lols + 1);
	};

	const renderRatingStars = () => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		const starIcons = [];

		for (let i = 0; i < fullStars; i++) {
			starIcons.push(
				<AiFillStar
					key={i}
					icon={AiFillStar}
					className="text-[#FAC50C] mr-0.5"
				/>
			);
		}
		if (hasHalfStar) {
			starIcons.push(
				<AiOutlineStar key={fullStars} className="text-gray-400" />
			);
		}

		return starIcons;
	};
	return (
		<div className="product-review my-2 bg-white px-2 md:px-5 py-3 rounded-lg border-b">
			<div className="flex items-center mb-4">
				<div className="mr-4">
					<Image
						width={20}
						height={20}
						src="/images/product/Reviewer.svg"
						alt="Reviewer Profile"
						className="w-14 h-14 rounded-full"
					/>
				</div>
				<div>
					<div className="flex flex-col items-start justify-start gap-1">
						<div className="text-xl font-semibold">{reviewerName}</div>
						<div className="text-gray-500 text-sm">{location}</div>
						<div className="flex flex-row">
							<div className="flex flex-row items-center text-gray-500 mr-2">
								<Image
									width={0}
									height={20}
									src="/images/product/AddImage.svg"
									alt="Reviewer Profile"
									className="w-5 h-5 rounded-full mr-1"
								/>{' '}
								5
							</div>
							<div className="flex flex-row items-center text-gray-500 mr-2">
								<Image
									width={20}
									height={20}
									src="/images/product/Reviews.svg"
									alt="Reviewer Profile"
									className="w-5 h-5 rounded-full mr-1"
								/>{' '}
								9
							</div>
							<div className="flex flex-row items-center text-gray-500 mr-2">
								<Image
									width={20}
									height={20}
									src="/images/product/Following.svg"
									alt="Reviewer Profile"
									className="w-5 h-5 rounded-full mr-1"
								/>{' '}
								0
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-row text-gray-500 text-xl my-2">
				{renderRatingStars()}
			</div>
			<div className="mb-4 w-full md:w-[70%]">
				<p>{description}</p>
			</div>
			<div className="flex mb-4 overflow-auto">
				{images.map((image, index) => (
					<Image
						key={index}
						width={20}
						height={20}
						src={`/images/product/${image}.svg`}
						alt="Reviewer Profile"
						className="w-24 h-24 md:h-40 md:w-40 object-cover rounded-md mr-2"
					/>
				))}
			</div>
			<div className="flex items-center">
				<button
					className="flex items-center border border-gray-300 text-gray-500 mr-4 px-2 py-1 rounded"
					onClick={handleLike}>
					<Image
						width={20}
						height={20}
						src="/images/product/Like.svg"
						alt="Reviewer Profile"
						className="w-5 h-5 mr-2"
					/>
					Like {likes}
				</button>
				<button
					className="flex items-center border border-gray-300 text-gray-500 mr-4 px-2 py-1 rounded"
					onClick={handleLove}>
					<Image
						width={20}
						height={20}
						src="/images/product/Love.svg"
						alt="Reviewer Profile"
						className="w-5 h-5 mr-2"
					/>{' '}
					Love {loves}
				</button>
				<button
					className="flex items-center border border-gray-300 text-gray-500 mr-4 px-2 py-1 rounded"
					onClick={handleLol}>
					<Image
						width={20}
						height={20}
						src="/images/product/Lol.svg"
						alt="Reviewer Profile"
						className="w-5 h-5"
					/>{' '}
					Lol {lols}
				</button>
			</div>
		</div>
	);
};

export default ReviewCard;
