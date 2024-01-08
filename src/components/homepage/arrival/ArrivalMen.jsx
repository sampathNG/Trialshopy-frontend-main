import React, { useState, useEffect } from 'react';
import { HiCurrencyRupee } from 'react-icons/hi';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

const Arrivalmen = () => {
	const [activeCategory, setActiveCategory] = useState(0);
	const [products, setProducts] = useState([]);
	const router = useRouter();
	const serverURL = process.env.BASE_API_URL;

	const categories = [
		'Best of the week',
		'Featured',
		'Upperwears',
		'Jeans',
		'Accessories',
	];

	const categoryFilters = [
		{},
		{},
		{},
		{ category: 'jeans' },
		{ category: 'accessories' },
	];

	useEffect(() => {
		// Fetch data for the active category using Axios
		const categoryEndpoints = categories.map((category, index) => ({
			endpoint: `${serverURL}/api/v1/products`,
			filter: categoryFilters[index],
		}));

		// Fetch data for the active category using Axios
		axios
			.post(categoryEndpoints[activeCategory].endpoint, {
				filters: categoryEndpoints[activeCategory].filter,
			})
			.then((response) => {
				const data = response.data['data'];
				// Assuming the API response returns an array of products
				setProducts(data); // Show only the top 8 products
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, [activeCategory]);

	const handleCategoryClick = (index) => {
		setActiveCategory(index);
	};

	const calledimg = async (index) => {
		// console.log(products[index]._id);
		const id = products[index]._id;
		router.push(`/products/details?productId=${id}`);
		// await axios.get(`https://trialshopy-backend.onrender.com/api/v1/products/${id}`)
		// .then((response)=>{console.log(response)});
	};

	// const [products, setproducts] = useState([]);
	// useEffect(() => {
	// 	axios
	// 		.post('https://trialshopy-backend.onrender.com/api/v1/products', {
	// 			filters: {},
	// 		})
	// 		.then((response) => setproducts(response.data['data']))
	// 		.catch((err) => console.error(err));
	// }, []);

	return (
		<div className="w-full">
			<div className="flex flex-col w-full gap-6 my-5 overflow-hidden md:flex-row md:gap-4">
				<div className="w-full h-[20vh] sm:h-full shrink-0 md:w-40 lg:w-52 ">
					<Image
						src="/images/trialshopy.png"
						width={200}
						height={200}
						alt=""
						className="w-full h-full"
					/>
					{/* <Image
					width={200}
					height={100}
					src="/images/start-img.jpg"
					alt="ads"
					className="w-full m-auto"
				/> */}
				</div>
				<div className="flex flex-col items-start justify-start w-full h-full gap-4">
					<div className="flex items-center justify-between w-full">
						<div className="flex flex-row items-center justify-start w-full gap-5">
							{/* <h1 className="text-xl font-bold underline uppercase underline-offset- decoration-red-700">
								Best of the week
							</h1> */}

							<div className="flex-row items-center justify-start gap-5 cursor-pointer md:flex">
								{categories.map((category, index) => (
									<p
										key={index}
										className={`${
											index === 0
												? 'text-xl font-bold uppercase'
												: 'text-sm font-semibold uppercase md:text-base sm:text-sm lg:text-md hidden md:flex'
										} ${
											activeCategory === index
												? 'underline uppercase underline-offset- decoration-red-700'
												: ''
										}`}
										onClick={() => handleCategoryClick(index)}>
										{category}
									</p>
								))}
								{/* <p className="text-sm font-semibold uppercase md:text-base sm:text-sm lg:text-md">
									Best of the week
								</p>
								<p className="text-sm font-semibold uppercase md:text-base sm:text-sm lg:text-md">
									Featured
								</p>
								<p className="text-sm font-semibold uppercase md:text-base sm:text-sm lg:text-md">
									Upperwears
								</p>
								<p className="text-sm font-semibold uppercase md:text-base sm:text-sm lg:text-md">
									Jeans
								</p>
								<p className="text-sm font-semibold uppercase md:text-base sm:text-sm lg:text-md">
									Accessories
								</p> */}
							</div>
						</div>

						<div className="flex flex-row items-center ">
							<div>
								<Image
									src="/images/chevronleft.svg"
									width={24}
									height={24}
									alt="logo"
									className="w-[24px] h-[24px]"
								/>
							</div>
							<div>
								<Image
									src="/images/chevronright.svg"
									width={24}
									height={24}
									alt="logo"
									className="w-[24px] h-[24px]"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-row items-center justify-between gap-4 w-full max-w-[100%] overflow-auto grid-container">
						{products.map((product, index) => (
							<div
								onClick={() => calledimg(index)}
								key={index}
								className="flex flex-col items-start justify-between h-full w-36 md:w-40 shrink-0 lg:w-44">
								<Image
									src={'/images/mentshirt.jpeg'}
									width={200}
									height={200}
									className="object-cover w-full h-full"
									alt=""
								/>
								<h2 className="text-sm font-semibold md:text-base">
									{product.productName}
								</h2>
								<p className="flex items-center text-xs md:text-sm">
									<HiCurrencyRupee size={20} />
									{product.price}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Arrivalmen;
