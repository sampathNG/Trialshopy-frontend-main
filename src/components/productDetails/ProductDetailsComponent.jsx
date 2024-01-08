import { useState } from 'react';
import Bargain from './Bargain';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function ProductDetails({ productData }) {
	const serverURL = process.env.BASE_API_URL;
	const [bargain, setBargain] = useState(false);
	const [page, setPage] = useState(0);
	const [selectedImage, setSelectedImage] = useState(productData.images[0].url);
    
	const handleImageClick = (imageUrl) => {
		setSelectedImage(imageUrl);
	};
	return (
		<div className="px-4 lg:px-[120px] relative w-full">
			<div className="w-full mx-auto py-4 lg:py-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-[30px]">
				<div className="flex flex-col gap-2.5  items-center w-full">
					<div className="relative w-full">
						{productData.images.length === 1 ? null : (
							<button
								onClick={() => {
									if (page === 0) {
										setPage(productData.images.length - 1);
									} else {
										setPage(page - 1);
									}
									handleImageClick(productData.images[page].url);
								}}
								className="absolute left-0 flex p-3 ml-2 bg-white rounded-full top-36">
								<AiOutlineLeft className="text-3xl font-bold " />
							</button>
						)}

						<Image
							width={500}
							height={300}
							src={selectedImage}
							alt={`${productData.productName}`}
							className="w-full h-full object-cover max-h-[400px]"
						/>
						{productData.images.length === 1 ? null : (
							<button
								onClick={() => {
									if (page === productData.images.length - 1) {
										setPage(0);
									} else {
										setPage(page + 1);
									}
									handleImageClick(productData.images[page].url);
								}}
								className="absolute right-0 p-3 mr-2 bg-transparent bg-white rounded-full top-36">
								<AiOutlineRight className="text-3xl font-bold " />
							</button>
						)}
					</div>
					<div className="flex items-center w-full gap-4">
						{productData.images.map((image) => (
							<div
								className="border border-gray-400 w-[48px] h-[36px] md:w-[88px] md:h-[60px]"
								key={image._id}
								onClick={() => handleImageClick(image.url)}>
								<Image
									width={200}
									height={200}
									src={`${image.url}`}
									alt={image.filename}
									className="object-cover w-full h-full "
								/>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col items-start justify-between w-full h-full">
					<div className="flex flex-col justify-start w-full itmes-start ">
						<div className="w-full">
							<h1 className="text-xl font-semibold lg:text-3xl">
								{productData.productName}
							</h1>
							<h2 className="text-base font-semibold lg:text-xl">
								{productData.shortDescription}
							</h2>
						</div>

						<div className="w-full h-px mt-2 bg-gray-400"></div>
						<div className="flex flex-col items-start justify-between w-full gap-5 py-4 text-sm">
							<div className="flex flex-row items-center justify-between w-full">
								<span className="">Pricing</span>
								<span className="">{productData.price}</span>
							</div>
							{productData.attributes.map((attribute) => (
								<div
									className="flex flex-row items-center justify-between w-full"
									key={attribute.title}>
									<span>{attribute.title}</span>
									<span>{attribute.value}</span>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col items-start justify-between w-full gap-4">
						<div className="flex items-center justify-between w-full gap-4 ">
							<Link
								href={`/nearByStore/store?storeId=${productData.storeId._id}`}
								className="text-base border-2 border-[#EB8105] font-semibold text-center w-1/2 px-4 py-2">
								View Store
							</Link>

							<Link
								href={{
									pathname: '/checkout',
									query: { productId: productData._id}
									  
								  }}
								className="text-base bg-gradient-to-b from-[#FAAC06] to-[#EB8105] font-semibold  text-center w-1/2 px-4 py-2">
								Buy Now
							</Link>
						</div>
						<div className="flex items-center justify-between w-full gap-4">
							<button className="text-base  bg-gradient-to-b from-[#FAAC06] to-[#EB8105] font-semibold  w-1/2 px-4 py-2">
								Add to Live View
							</button>
							<button
								onClick={() => setBargain(!bargain)}
								className="text-base border-2 border-[#EB8105] font-semibold w-1/2 px-4 py-2">
								Let&apos;s bargain
							</button>
						</div>
					</div>
				</div>
			</div>

			{bargain && <Bargain bargain={bargain} setBargain={setBargain} />}
		</div>
	);
}
