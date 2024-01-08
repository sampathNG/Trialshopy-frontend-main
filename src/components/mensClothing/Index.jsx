import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import FiltersMenu from '../filterMenu/FiltersMenu';
import ProductGrid from '../ProductCards/ProductGrid';
import { semiformaltshirts } from './cardsData';

import Checkoutcat from '../NearbyStore/checkoutcat';
import BrandDeals from './BrandDeals';
import DealsByCategory from './DealsByCategory';
import CircularCardGrid from '../ProductCards/CircularCardGrid';
import axios from 'axios';

const MensClothing = ({ CategoryId }) => {
	// const MensClothing = ({ CategoryId = "64cf85a0a192afa1c023210f" }) => {
	//For Filters
	// const [selectedFilters, setSelectedFilters] = useState(null);
	// const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
	const [activeImage, setActiveImage] = useState(1);

	const [products, setProducts] = useState(semiformaltshirts);
	const [title, setTitle] = useState('');

	const [circularCatgData, setCircularCatgData] = useState([]);
	const serverURL = process.env.BASE_API_URL;

	useEffect(() => {
		const fetchTitle = async () => {
			try {
				// // console.log("🚀 ~ file: Index.jsx:38 ~ fetchTitle ~ CategoryId:", CategoryId)
				const responseTitle = await axios.get(
					`${serverURL}/api/v1/categories/${CategoryId}`
				);
				setTitle(responseTitle.data.name);
			} catch (error) {
				console.error('Error fetching categories:', error);
			}
		};

		const fetchData = async () => {
			try {
				const response = await axios.post(
					`${serverURL}/api/v1/categories`,
					{
						filters: { parent: CategoryId },
					}
				);
				setCircularCatgData(response.data);
			} catch (error) {
				console.error('Error fetching categories:', error);
			}
		};

		fetchTitle();
		fetchData();
	}, [CategoryId]);

	// function toggleFilterMenu() {
	// 	setFilterMenuOpen(!isFilterMenuOpen);
	// }
	useEffect(() => {
		const timer = setInterval(() => {
			setActiveImage((activeImage + 1) % 4);
		}, 1500);
		return () => clearInterval(timer);
	}, [activeImage]);

	return (
		<div >
			<div className='ml-6 text-[14px] font-fontMedium md:hidden'> Mens Clothing </div>
			<div className='ml-2 sm:hidden'>
			<Checkoutcat/>
			</div>
			<CircularCardGrid title={title} cards={circularCatgData} />
			<div className="w-full px-5 lg:p-0">
				{circularCatgData.map((item) => (
					<ProductGrid key={item._id} title={item.name} cards={item._id} />
				))}
			</div>

			{/* 
				<div className="w-full px-5 lg:p-0">
					<ProductGrid title={'Semi-formal Shirts'} cards={products} />
				</div> */}

			<div className="flex flex-col items-start w-full gap-8">
				<div className="order-1 w-full px-5 lg:order-2 lg:p-0">
					<DealsByCategory />
				</div>

				<div className="order-3 w-full overflow-x-auto lg:order-1">
					<BrandDeals />
				</div>
			</div>
		</div>
	);
};

export default MensClothing;
