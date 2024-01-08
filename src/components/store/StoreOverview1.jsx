import React from 'react';
import StoreProductCard from './StoreProductCard';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
// import NewArrival from '../homepage/arrival/NewArrival';
import NewArrival1 from './NewArrival1';
// import ProductGrid from '../ProductCards/ProductGrid';

function ProductComp({ category }) {
	const [products, setProducts] = useState([]);
	const serverURL = process.env.BASE_API_URL;

	// useEffect(() => {
	// 	const api = `${serverURL}/api/v1/products`;
	// 	axios
	// 		.post(api, { filters: { categories: [category._id] } })
	// 		.then((response) => {
	// 			setProducts(response.data);
	// 		})
	// 		.catch((err) => console.error(err));
	// }, [category, serverURL]);

	return (
		<div className="flex flex-col gap-2 my-3">
			{products.length > 0 && (
				<div className="text-xl font-semibold lg:block">{category.name}</div>
			)}
			<div className="flex flex-row items-center w-full gap-8 overflow-x-auto">
				{products?.length > 0
					? products?.map((item, index) => (
						<StoreProductCard key={index} product={item} />
					))
					: null}
			</div>
		</div>
	);
}

function CircularCard({ card }) {
	const serverURL = process.env.BASE_API_URL;
	return (
		<>
			<div className="flex flex-col items-center hover:font-semibold">
				<div className="transition-all ease-in-out duration-300 w-[72px] md:w-24 lg:w-36 h-[72px] md:h-24 lg:h-36 rounded-full overflow-hidden hover:shadow-lg p-2">
					<Image
						width={100}
						height={100}
						src={
							card?.image?.url
								? `${card?.image?.url}`
								: '/images/img-2.jpg'
						}
						alt={card.name}
						className="object-cover w-full h-full rounded-full"
					/>
				</div>

				<div className="w-full mt-2">
					<Link
						href={`/subcategory/${card._id}`}
					>
						<p className="w-full h-30 font-poppins text-center text-xs lg:text-base leading-[150%]">
							{card.name}
						</p>
					</Link>
				</div>
			</div>
		</>
	);
}

const CircularCardGrid = ({ category }) => {
	const [categoriesData, setCategoriesData] = useState([]);
	const serverURL = process.env.BASE_API_URL;

	useEffect(() => {
		axios
			.post(`${serverURL}/api/v1/categories`, {
				filters: { parent: category._id },
			})
			.then((res) => {
				// console.log(res.data);
				setCategoriesData(res.data);
			})
			.catch((err) => console.error(err));
	}, [category, serverURL]);

	return (
		<div className="flex flex-col my-5">
			<div className="text-2xl font-semibold lg:block">{category.name}</div>
			<div className="flex flex-row items-start justify-between w-full gap-2 overflow-auto lg:gap-4 grid-container">
				{categoriesData?.length > 0 &&
					categoriesData.map((cat) => (
						<CircularCard key={cat._id} card={cat} />
					))}
			</div>
			{/* <div className="w-full">
			
						<div className="text-xl font-bold text-left">
							<h2 className="inline-block mt-2 mb-1 border-b-2 border-red-700 ">
											NEW ARRIVALS
							</h2>
						</div>
					
				<NewArrival1 />
			</div> */}

			<div>
				{categoriesData?.length > 0 &&
					categoriesData.map((cat) => (
						<div key={cat._id}>
							<ProductComp category={cat} />
						</div>
					))}
			</div>
		</div>
	);
};

const StoreOverview1 = ({ storeData }) => {
	const categories = storeData.categories;
	const storeId = storeData._id ?? '64d28a5ed9cad463cd0e9552';

	const [products, setProducts] = useState([]);
	const serverURL = process.env.BASE_API_URL;

	useEffect(() => {
		const api = `${serverURL}/api/v1/products`;
		const filters = { storeId: storeId };

		axios
			.post(api, { filters: filters })
			.then((response) => {
				setProducts(response.data.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [storeId, serverURL]);

	return (
		<div className="flex flex-col items-start w-full gap-4 lg:gap-8">
			<div className="relative flex flex-col items-start w-full gap-4">
				{products.length > 0 ? (
					<>
						<h2 className="text-xl font-semibold">New Arrivals</h2>
						<div className="bg-white bg-opacity-80 absolute -left-2 top-[50%] z-10 py-2 px-1">
							<Image
								src="/images/store/arrow_left.svg"
								width={19}
								height={19}
								alt="arrow_left"
							/>
						</div>
						<div className="flex flex-row items-center justify-between w-full gap-4 overflow-auto grid-container">
							{products.map((product) => (
								<StoreProductCard key={product._id} product={product} />
							))}
						</div>
						<div className="bg-white bg-opacity-80 absolute -right-2 top-[50%] z-10 py-2 px-1">
							<Image
								src="/images/store/arrow_right.svg"
								width={20}
								height={20}
								alt="arrow_right"
							/>
						</div>
					</>
				) : null}
			</div>


			<div className="w-full">
				{categories.length > 0 &&
					categories.map((category) => (
						<CircularCardGrid key={category._id} category={category} />
					))}
			</div>


		</div>
	);
};

export default StoreOverview1;
