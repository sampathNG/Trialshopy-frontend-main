import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularCardGrid from '../../ProductCards/CircularCardGrid';

import ProductCard from '../../ProductCards/ProductCard';
import Checkoutcat from '../checkoutcat';
// import NewArrival1 from '../../store/NewArrival1';
// import Checkoutcat from '../Checkoutcat';
const NearByFashion = () => {
	const [userLocation, setUserLocation] = useState(null);
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState(null);
	const serverURL = process.env.BASE_API_URL;
	useEffect(() => {
		const storedLocation = localStorage.getItem('userLocation');
		if (storedLocation) {
			setUserLocation(JSON.parse(storedLocation));
		}
	}, []);

	useEffect(() => {
		const api = `${serverURL}/api/v1/categories`;
		axios
			.post(api, {
				filters: {
					parent: '64b9002188cb61a80b5cf503',
				},
			})
			.then((res) => setCategories(res.data))
			.catch((err) => console.error(err));
	}, [serverURL]);

	useEffect(() => {
		// console.log(userLocation);
		if (userLocation) {
			const api = `${serverURL}/api/v1/getNearFashion?latitude=${
				userLocation.latitude
			}&longitude=${userLocation.longitude}&maxDistance=${500000000000}`;

			axios
				.get(api)
				.then((res) => {
					setProducts(res.data);
					// console.log('data', res.data);
				})
				.catch((err) => console.error(err));
		}
	}, [userLocation, serverURL]);

	return (
		<div className="">
			{/* <Checkoutcat/> */}
			<div className='ml-2 sm:hidden'>
			<Checkoutcat/>
			</div>
			<CircularCardGrid title={'Fashion'} cards={categories} />

			{products ? (
				Object.keys(products).map((category) => (
					<div key={category}>
						<div className="flex px-4 font-poppins">
							<span className="mr-auto md:text-[20px] text-[16px] w-[80vw] font-medium  ">
								{category}
							</span>
							<span className="justify-end text-[14px] md:hidden ml-auto w-[15vw] text-black ">
								See All
							</span>
						</div>

						<div className="flex flex-row px-4 mb-2 overflow-x-auto grid-container ">
							<div className="flex flex-row gap-2 py-4">
								{products[category].map((item, index) => (
									<ProductCard productDetails={item} key={index} />
								))}
							</div>
						</div>
					</div>
				))
			) : (
				<p>NO STORES NEARBY</p>
			)}
		</div>
	);
};

export default NearByFashion;
