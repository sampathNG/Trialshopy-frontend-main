import React, { useState, useEffect } from 'react';
import BrandGrid from './BrandGrid';
import { getBrands } from './getBrands';
import axios, { all } from 'axios';
// import Image from 'next/image';

const activeTabClass = 'pb-2 font-bold border-b-2 border-black';

const PopularMerchant = () => {
	const [allstores, setAllStores] = useState([]);
	const [popular_fashion, setPopularFashion] = useState([]);
	const [popular_jewellery, setPopularJewellery] = useState([]);
	const [popular_electronics, setPopularElectronics] = useState([]);
	const [data, setData] = useState([]);
	let sellerId = '64ca8e852eb496c7f2bf4e50';
	const serverURL = process.env.BASE_API_URL;
	useEffect(() => {
		// Fetch data from the API
		axios
			.post(`${serverURL}/api/v1/${sellerId}/stores`)
			.then((response) => {
				setAllStores(response.data.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
		axios
			.get(`https://trialshopy-backend-rk8d.onrender.com/api/v1/getPopularBrand`)
			.then((response) => {
				setData(response.data);
		
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	useEffect(() => {
		categorizeStores(allstores);
	}, [allstores]);

	useEffect(() => {
		setProductList(popular_fashion);
	}, [popular_fashion]);

	const categorizeStores = (stores) => {
		setPopularFashion([]);
		setPopularJewellery([]);
		setPopularElectronics([]);

		let fashion_count = 0;
		let jewellery_count = 0;
		let electronics_count = 0;

		stores.forEach((item) => {
			const items = item.categories;
			for (const obj of items) {
				if (obj === '64b9002188cb61a80b5cf503') {
					if (fashion_count < 13) {
						setPopularFashion((prevFashion) => [...prevFashion, item]);
						fashion_count++;
					}
				} else if (obj === '64b9004688cb61a80b5cf509') {
					if (jewellery_count < 13) {
						setPopularJewellery((prevJewellery) => [...prevJewellery, item]);
						jewellery_count++;
					}
				} else if (obj === '64b9001088cb61a80b5cf501') {
					if (electronics_count < 13) {
						setPopularElectronics((prevElectronics) => [
							...prevElectronics,
							item,
						]);
						electronics_count++;
					}
				}
			}
		});
	};

	const [activeTab, setActiveTab] = useState('fashion');
	const [productList, setProductList] = useState(getBrands('fashion'));
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
		const products = getBrands(
			activeTab,
			popular_fashion,
			popular_electronics,
			popular_jewellery
		);
		console.log(products);
		setProductList(products);
		setMobileMenuOpen(false);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	useEffect(() => {
		const products = getBrands(
			activeTab,
			popular_fashion,
			popular_electronics,
			popular_jewellery
		);
		setProductList(products);
	}, []);

	useEffect(() => {
		const products = getBrands(
			activeTab,
			popular_fashion,
			popular_electronics,
			popular_jewellery
		);
		setProductList(products);
	}, [activeTab]);

	return (
		<div className="m-auto">
			<div className="text-xl font-bold text-left">
				<h2 className="border-b-2 mb-5 border-red-700 inline-block ">
					BRAND DEALS
				</h2>
			</div>

			<div className="flex flex-row justify-start gap-8 w-full">
				<div className="hidden lg:block w-1/4 mt-3">
					<ul className="flex flex-col gap-14 ">
						<li onClick={() => handleTabClick('fashion')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'fashion' ? activeTabClass : ''
								}`}>
								{/* Popular in Fashion */}
								Popular Brands
							</p>
						</li>

						<li onClick={() => handleTabClick('jewellery')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'jewellery' ? activeTabClass : ''
								}`}>
								{/* Popular in Jewellery */}
								Popular Brands For Man&apos;s
							</p>
						</li>
						<li onClick={() => handleTabClick('electronics')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'electronics' ? activeTabClass : ''
								}`}>
								{/* Popular in Electronics */}
								Popular Brands For Woman&apos;s
							</p>
						</li>
					</ul>
				</div>
				<div className="mt-4 lg:m-0 overflow-auto w-full grid-container">
					<BrandGrid products={data} />
				</div>
			</div>
		</div>
	);
};

export default PopularMerchant;
