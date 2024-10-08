import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GirlsCollection = ({ cards }) => {
	const serverURL = process.env.BASE_API_URL;
	return (
		<div className="py-8 w-full overflow-x-aut0">
			<div className="flex items-center justify-between text-xl font-bold text-left">
				<Link href={'/category/64cfdb52f6f996cacc408805'} className="">
					<h2 className="border-b-2 mb-5 border-red-700 inline-block">
						GIRLS COLLECTION
					</h2>
				</Link>
				<div className="flex flex-row items-center lg:hidden">
					<div>
						<Image
							src="/images/chevronleft.svg"
							width={24}
							height={24}
							alt=""
							className="w-[24px] h-[24px]"
						/>
					</div>
					<div>
						<Image
							src="/images/chevronright.svg"
							width={24}
							height={24}
							alt=""
							className="w-[24px] h-[24px]"
						/>
					</div>
				</div>
			</div>

			<div className="overflow-auto grid-container">
				<div className="flex flex-row items-center justify-between">
					<div className="flex flex-row items-center shrink-0">
						<div className="grid lg:grid-cols-2 w-24 md:w-44 lg:w-64">
							<div className="flex flex-col justify-end lg:pb-8">
							<Link href={'/category/64cfdb52f6f996cacc408805'} className="">
								<div className="flex flex-row items-center justify-center px-[5px] py-[10px] rounded-[3px] bg-black text-white  bg-opacity-50 w-[92px] lg:w-[124px] h-[27px] lg:h-[37px] z-10">
									<p className="font-Nunito font-semibold text-center">
										For Girls
									</p>
								</div>
								</Link>
							</div>

							<Image
								className="h-auto w-full "
								width={220}
								height={190}
								src="/images/girlscollectiongirl.png"
								alt=""
							/>
						</div>

						<div className="flex flex-row items-center justify-between gap-4 lg:gap-8">
							{cards.map((card) => (
								<Link key={card._id} href={`/subcategory/${card._id}`}>
								<div
									key={card._id}
									className="flex flex-col items-center gap-1 shrink-0 hover:font-semibold">
									<div className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden hover:shadow-lg">
										<Image
											className=" w-full h-full object-cover rounded-full"
											src={
												card?.image?.url
													? `${serverURL}/api/v1${card?.image?.url}`
													: '/images/girlscollection1.png'
											}
											width={164}
											height={164}
											alt=""
										/>
									</div>

									<p className="text-sm lg:text-base text-center">
										{card.name}
									</p>
								</div>
								</Link>
							))}

							{/* <div className="flex flex-col items-center gap-1 shrink-0 hover:font-semibold">
								<div className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden hover:shadow-lg">
									<Image
										className=" w-full h-full object-cover rounded-full"
										src="/images/girlscollection2.png"
										width={164}
										height={164}
										alt=""
									/>
								</div>
								<p className="text-sm lg:text-base text-center">Dresses</p>
							</div>
							<div className="flex flex-col items-center  gap-1 shrink-0 hover:font-semibold">
								<div className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden hover:shadow-lg"> */}
							{/* <Image
										className=" w-full h-full object-cover rounded-full"
										src="/images/girlscollection3.png"
										width={164}
										height={164}
										alt=""
									/>
								</div>
								<p className="text-sm lg:text-base text-center">
									Leggings & Pants
								</p>
							</div>
							<div className="flex flex-col items-center justify-start gap-1 shrink-0 hover:font-semibold">
								<div className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden hover:shadow-lg">
									<Image
										className=" w-full h-full object-cover rounded-full"
										src="/images/girlscollection4.png"
										width={164}
										height={164}
										alt=""
									/>
								</div>
								<p className="text-sm lg:text-base text-center">
									Jeans & Pajamas
								</p>
							</div>
							<div className=" flex flex-col items-center justify-start gap-1 shrink-0 hover:font-semibold">
								<div className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden hover:shadow-lg">
									<Image
										className=" w-full h-full object-cover rounded-full"
										src="/images/girlscollection5.png"
										width={164}
										height={164}
										alt=""
									/>
								</div>
								<p className="text-sm lg:text-base text-center">
									Skirts & Shorts
								</p>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GirlsCollection;
