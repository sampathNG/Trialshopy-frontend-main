import React from 'react';
import Image from 'next/image';
import { AiFillCaretDown } from 'react-icons/ai';
import ProgressBar from '@ramonak/react-progress-bar';
import StarRating from '../star_rating/StarRating';
import StarRatingInput from '../star_rating/StarRatingInput';
import { useUser } from '../../UserContext';


const StoreReview1 = ({ storeData }) => {
	const { user } = useUser();
	return (
		<div className="w-full">
			<section className="sm:w-full">
				<p className=" text-sm mx-4 p-4 font-fontBold">Recommended Reviews</p>
				<section className="flex flex-col sm:flex-row justify-center sm:h-auto  border sm:justify-between sm:w-full sm:px-4 ">
					<section className="flex sm:flex-row justify-center">
						<Image
							width={58}
							height={58}
							src={user?.profilePic?.url}
							className="py-2 sm:py-10"
							alt=""
						/>
						<section className="sm:justify-self-start items-center justify-center py-2 sm:py-10 mx-2 ">
							<p className="font-fontMedium text-lg">{user?.name}</p>
							<p className="font-light text-sm">{user?.email}</p>
							{/* <p className="font-fontMedium text-sm">{user?.phone_no}</p> */}

							{/* <p className="font-fontRegular text-xs">Delhi, India</p> */}
							{/* <section className="flex ">
								<Image
									width={14}
									height={14}
									src="/../public/icons/StoreReiviewVectorprofileBelow1.png"
									alt=""
								/>
								<label className="font-fontMedium text-xs text-slate-500 px-1">
									5
								</label>
								<Image
									width={14}
									height={14}
									src="/../public/icons/StoreReiviewVectorprofileBelow2.png"
									alt=""
								/>
								<label className="font-fontMedium text-xs text-slate-500 px-1">
									9
								</label>
								<Image
									width={14}
									height={14}
									src="/../public/icons/StoreReiviewVectorprofileBelow3.png"
									alt=""
								/>
								<label className="font-fontMedium text-xs text-slate-500 px-1">
									0
								</label>
							</section> */}
						</section>
					</section>

					<section className="flex flex-col items-center justify-around ">
						<StarRatingInput />
						<p className="sm:p-2 font-fontBold text-xs">
							Start your review of {storeData?.storeName}
						</p>
					</section>
				</section>
			</section>
			<section className="sm:w-full sm:py-3 border-y border-slate-400 ">
				<section className="flex justify-end p-4 ">
					<span className=" text-xs sm:mx-1 font-fontBold text-gray-400">
						Sort:
					</span>
					<span className="flex text-xs sm:mx-1 font-fontRegular">
						TS Sort
						<span className="sm:mx-1 flex items-center">
							<AiFillCaretDown />
						</span>
					</span>
					<span className=" text-xs sm:mx-1 font-fontBold text-gray-400">
						Filter By:
					</span>
					<span className="flex text-xs sm:mx-1 font-fontRegular">
						All Rating
						<span className="sm:mx-1 sm:py-1">
							<AiFillCaretDown />
						</span>
					</span>
				</section>

				<section className="flex flex-col sm:flex-row">
					<section className="sm:m-4 flex flex-col justify-center sm:justify-start sm:justify-self-end  items-center">
						<span className="font-fontMedium text-sm sm:m-5 ">
							Overall rating
						</span>
						<section className="flex sm:m-3">
							<span className="border w-[2rem] sm:w-[3rem] m-2 bg-green-700 text-white border-green-600 sm:text-lg rounded-lg text-center ">
								{storeData?.rating?.rating}
							</span>
							<StarRating stars={storeData?.rating?.rating} />
						</section>
						<section className="sm:m-5">
							{storeData?.rating?.count} Reviews
						</section>
					</section>

					<section className=" sm:ml-16 sm:py-7 sm:w-2/4 ">
						<section className="flex m-1">
							<label className="m-1 font-fontMedium text-xs">5 Stars</label>
							<ProgressBar
								height={10}
								completed={40}
								className="w-4/5 m-2"
								bgColor="grey"
								isLabelVisible={false}
							/>
						</section>

						<section className="flex m-1">
							<label className="m-1 font-fontMedium text-xs">4 Stars</label>
							<ProgressBar
								height={10}
								completed={40}
								className="w-4/5 m-2"
								bgColor="grey"
								isLabelVisible={false}
							/>
						</section>
						<section className="flex m-1">
							<label className="m-1 font-fontMedium text-xs">3 Stars</label>
							<ProgressBar
								height={10}
								completed={40}
								className="w-4/5 m-2"
								bgColor="grey"
								isLabelVisible={false}
							/>
						</section>
						<section className="flex m-1">
							<label className="m-1 font-fontMedium text-xs">2 Stars</label>
							<ProgressBar
								height={10}
								completed={40}
								className="w-4/5 m-2"
								bgColor="grey"
								isLabelVisible={false}
							/>
						</section>
						<section className="flex m-1">
							<label className="m-1 font-fontMedium text-xs">1 Stars</label>
							<ProgressBar
								height={10}
								completed={40}
								className="w-4/5 m-2"
								bgColor="grey"
								isLabelVisible={false}
							/>
						</section>
					</section>
				</section>
			</section>
		</div>
	);
};

export default StoreReview1;
