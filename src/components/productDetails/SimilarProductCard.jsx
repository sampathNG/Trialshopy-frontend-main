import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SimilarProductCard = ({ productDetails }) => {
	const { productName, description, rating, price, images, discount } =
		productDetails;

	return (
		<div className="p-2 flex flex-col gap-2 items-center border shadow-lg rounded max-h-min w-[150px] md:w-[176px] lg:w-[280px]">
			<div className="h-[98px] lg:h-40 relative w-[128px] md:w-[156px] lg:w-[250px] m-auto">
				<button className="hidden lg:block px-2 py-1 absolute right-2 top-2 border z-10 bg-white rounded-sm">
					<p className="text-xs">+ Follow</p>
				</button>
				<div className="px-1 lg:px-2 py-0.5 lg:py-1 flex flex-row items-center gap-2 cursor-pointer text-[10px] lg:text-xs absolute bottom-1 left-1  lg:bottom-2 lg:left-2 bg-white border z-10 rounded-sm">
					<p className="p-0.5 bg-gray-600 text-white rounded-sm">
						⭐{rating.rating}
					</p>
					<p className="p-1">{rating.count} Ratings</p>
				</div>
				<div className="absolute inset-0">
					<Image
						className="w-full h-full object-cover"
						src={images[0]?.url ?? 'https://picsum.photos/200/300'}
						width={300}
						height={200}
						alt={productName}
					/>
				</div>
			</div>

			<Link href={'#'}>
				<div className="flex h-5 w-[128px] md:w-[156px] lg:w-[250px] items-start">
					<p className="font-semibold hover:underline">{productName}</p>
				</div>
			</Link>

			<div className="flex flex-col w-[128px] md:w-[156px] lg:w-[250px] p-0">
				<div className="flex flex-row items-center gap-2 text-xs">
					<div className="w-full flex justify-between lg:inline lg:max-w-min lg:border-box p-2 lg:p-1 border border-gray-400 bg-gray-50 rounded-sm">
						<span className="font-bold">₹{price}</span>
						<span className="block lg:hidden">50% Off</span>
					</div>

					<p className="hidden lg:inline-block">{description}</p>
				</div>

				<ul className="text-xs hidden lg:block">
					<li className="flex items-center gap-1 w-60">
						<div className="">
							<Image
								src="/images/listmarker.svg"
								width={10}
								height={10}
								alt="SVG List Marker"
							/>
						</div>
						<span>Shirts starting from $599</span>
					</li>
					<li className="flex items-center gap-1 w-60">
						<div className="">
							<Image
								src="/images/listmarker.svg"
								width={10}
								height={10}
								alt="SVG List Marker"
							/>
						</div>
						<span> Free Delivery</span>
					</li>
				</ul>
			</div>

			<Link href={`/products/details?productId=${productDetails._id}`}>
				<button className="flex items-center justify-center gap-2 w-[128px] md:w-[156px] lg:w-[250px] py-1 lg:py-2 px-4 lg:px-6  border border-gray-400 bg-gray-50 rounded-sm hover:bg-black hover:text-white">
					<p className="font-semibold">View Details</p>
				</button>
			</Link>

			<div className="flex flex-col  items-start lg:flex-row lg:items-center justify-between text-xs w-[128px] md:w-[156px] lg:w-[250px]">
				<div className="flex flex-row items-center gap-1">
					<span className="text-green-600 font-bold">Open</span>
					<p className="font-light">until 10:30</p>
				</div>

				<div className="flex flex-row gap-1 items-center">
					<div className="">
						<Image
							src="/images/imap.svg"
							width={10}
							height={10}
							alt="SVG map icon"
						/>
					</div>
					<span className="font-light">10km away</span>
				</div>
			</div>
		</div>
	);
};

export default SimilarProductCard;
