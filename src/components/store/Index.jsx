
// export default StorePage;
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Banner from './Banner';
import VisitStoreCard from './visitStoresCard_StoresOffersPage';
import StoreOverview1 from './StoreOverview1';
import StoreOverview from './StoreOverview';
import StoreReview from './StoreReview';
import StoreReview1 from './StoreReview1';
import StoreOffers from './StoreOffers';
import Loading from '../Loading';
import axios from 'axios';
import Review from './Review';
import StoreReviewSec from './StoreReviewSec';
const StorePage = ({ storeId }) => {
	const [storeData, setStoreData] = useState(null);
	const [storeReviews, setStoreReviews] = useState([]);
	const [activeTab, setActiveTab] = useState('overview');
	const [showFilePicker, setShowFilePicker] = useState(false);
	const [selectedPhotos, setSelectedPhotos] = useState([]);
	const [isFollowing, setIsFollowing] = useState(false);
	const [loading, setLoading] = useState(true);
	const [reviewBoxOpen, setReviewBoxOpen] = useState(false);

	const serverURL = process.env.BASE_API_URL;

	const userId = '64b161653d8484b51874229c'; // get user id from cookies or localstorage
	const storeId1 = storeId ?? '64d3dd30aa678cb287260752';

	useEffect(() => {
		// const apiUrl = `http://localhost:7000/api/v1/stores/${storeId}`
		setLoading(true);
		const apiUrl = `${serverURL}/api/v1/stores/${storeId1}`;
		axios
			.get(`${apiUrl}`)
			.then((response) => {
				console.log(response.data);
				setStoreData(response.data);

				if (response.data.followers !== null) {
					const isUserFollowingStore =
						response.data.followers.followers?.includes(userId);
					setIsFollowing(isUserFollowingStore);
				} else {
					setIsFollowing(false);
				}
			})
			.catch((err) => {
				console.error(err);
			});

		// const fetchStoreReviews = async () => {
		// 	// const apiUrl2 =
		// 	// 	'http://localhost:7000/api/v1/reviews';
		// 	const apiUrl2 = `${serverURL}/api/v1/reviews`;
		// 	axios
		// 		.get(`${apiUrl2}`, { filters: { storeId: storeId1 } })
		// 		.then((response) => setStoreReviews(response.data))
		// 		.catch((err) => {
		// 			console.error(err);
		// 		});
		// };

		// fetchStoreReviews();
		setLoading(false);
	}, [storeId, storeId1]);

	function handleActiveTab(value) {
		setActiveTab(value);
	}

	const handleFollowerClick = () => {
		const apiUrl = `${serverURL}/api/v1/stores/${storeId1}/addFollower`;
		const removeFollowerUrl = `${serverURL}/api/v1/stores/${storeId1}/removeFollower`;

		const requestConfig = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		// If the user is not following, add the follower
		if (!isFollowing) {
			axios
				.put(apiUrl, { userId }, requestConfig)
				.then((response) => {
					setIsFollowing(true);
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			// If the user is already following, remove the follower
			axios
				.put(removeFollowerUrl, { userId }, requestConfig)
				.then((response) => {
					setIsFollowing(false);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	};
	const handleAddPhotos = () => {
		setShowFilePicker(true);
	};

	const handleFileChange = (event) => {
		const files = event.target.files;

		const selectedPhotosArray = Array.from(files);
		setSelectedPhotos(selectedPhotosArray);
	};

	const handleUploadPhotos = () => {
		setShowFilePicker(false);
	};
	return storeData ? (
		<div className="w-full ">
			<Banner storeData={storeData} />
			{/* earlier px-[120px] */}
			<div className="flex flex-col w-full px-5 lg:px-[80px] pt-[40px] pb-[20px] items-start gap-4 lg:gap-8 relative">
				<div className="flex flex-col items-start justify-between w-full lg:flex-row">
					<div className=" flex flex-col items-start w-full gap-4 lg:w-3/4">
						<section className="flex  w-full   sm:flex-row sm:justify-evenly sm:py-2 ">
							<div className="flex   w-full">
								{isFollowing ? (
									<span
										className="bg-gray-600 m-2 text-white font-fontMedium text-xs w-[6rem] flex cursor-pointer justify-center items-center sm:h-7"
										onClick={handleFollowerClick}>
										Followed
									</span>
								) : (
									<span
										className="bg-gray-800 m-2   text-white font-fontMedium text-xs w-[9rem] flex cursor-pointer justify-center items-center sm:h-7"
										onClick={handleFollowerClick}>
										<span className="text-l font-fontMedium">+</span>
										Follow store
									</span>
								)}
								{/* <span
								className="bg-white m-2 border border-gray-400  text-gray-600 font-fontMedium cursor-pointer text-xs w-[8rem] flex flex-wrap justify-center items-center h-7"
								onClick={handleAddPhotos}>
								<span className="pb-1 pr-1 text-lg font-fontMedium">
									<Image
										width={10}
										height={10}
										src="/../public/icons/StoreReviewPageTop2.png"
										alt="writeAReiview"
										className="pt-1"
									/>
								</span>{' '}
								Add Photos
							</span>
							{showFilePicker && (
								<div className="absolute flex flex-col gap-2 p-4 bg-white border">
									<div className="flex items-center justify-between w-full">
										<input type="file" multiple onChange={handleFileChange} />
										<div
											className="cursor-pointer"
											onClick={() => setShowFilePicker(false)}>
											X
										</div>
									</div>
									<button
										className="p-2 text-center text-white bg-black rounded"
										onClick={handleUploadPhotos}>
										Upload
									</button>
								</div>
							)} */}
								<span
									className="bg-white m-2 border border-gray-400 cursor-pointer text-gray-600 font-fontMedium text-xs w-[11rem] flex justify-center items-center h-7"
									onClick={() => handleActiveTab('reviews')}>
									<span className="pb-1 pr-1 text-lg font-fontMedium">
										<Image
											width={10}
											height={10}
											src="/../public/icons/StoreReviewPageTop3.png"
											alt="writeAReiview"
											className="pt-1"
										/>
									</span>
									<div
										onClick={() => {
											setReviewBoxOpen(!reviewBoxOpen);
										}}>
										Write a Review
									</div>
								</span>
								<span className="bg-white m-2 border border-gray-400 cursor-pointer text-gray-600 font-fontMedium text-xs w-[8rem] flex flex-wrap justify-center items-center h-7">
									<span className="pb-1 pr-1 text-lg font-fontMedium">
										<Image
											width={10}
											height={10}
											src="/../public/icons/StoreReviewPageTop4.png"
											alt="writeAReiview"
											className="pt-1"
										/>
									</span>{' '}
									Share
								</span>
							</div>
						</section>
						<section className="flex justify-around w-full text-center sm:w-full">
							<span
								className={`sm:px-5 px-3 py-2 font-fontMedium w-full ${
									activeTab === 'overview'
										? 'border-b-2 border-black text-black'
										: 'text-gray-400 border-b'
								}`}
								onClick={() => handleActiveTab('overview')}>
								Overview
							</span>
							<span
								className={` sm:px-5 px-3 py-2 font-fontMedium w-full ${
									activeTab === 'reviews'
										? 'border-b-2 border-black text-black'
										: 'text-gray-400 border-b'
								}`}
								onClick={() => handleActiveTab('reviews')}>
								Reviews
							</span>
							<span
								className={` sm:px-5 px-3 py-2 font-fontMedium w-full  ${
									activeTab === 'offers'
										? 'border-b-2 border-black text-black'
										: 'text-gray-400 border-b'
								}`}
								onClick={() => handleActiveTab('offers')}>
								Offers
							</span>
						</section>
						{activeTab === 'overview' && (
							<StoreOverview1 storeData={storeData} />
						)}
						{activeTab === 'reviews' && <StoreReview1 storeData={storeData} />}
						{activeTab === 'offers' && <StoreOffers />}
					</div>
					<div className="   lg:w-[45vh]">
						<VisitStoreCard />
					</div>
				</div>
				<div className="absolute w-full lg:w-1/3  top-0 lg:left-1/2 shadow-lg ">
					{reviewBoxOpen && <Review setReviewBoxOpen={setReviewBoxOpen} />}
				</div>
				<div className="flex w-full">
					{activeTab === 'overview' && <StoreOverview storeData={storeData} />}
					{activeTab === 'reviews' && <StoreReview />}
					{/* {activeTab === 'offers' && <StoreOffers />} */}
				</div>
			</div>
		</div>
	) : (
		<h1>Can t load data please hit ctrl+R </h1>
	);
};

export default StorePage;
