import React, { useEffect, useState } from 'react';
import { IoSearch, IoClose } from 'react-icons/io5';
import axios from 'axios';
import Link from 'next/link';
const SearchBox = () => {
	const [searchText, setSearchText] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [showResults, setShowResults] = useState(true);
	const serverURL = process.env.BASE_API_URL;
	const handleInputChange = (e) => {
		setSearchText(e.target.value);
		// setSearchResults([]);
		setShowResults(true);
	};

	useEffect(() => {
		const searchtext = searchText.trim();
		if (searchtext !== '') {
			axios
				.get(`${serverURL}/api/v1/search?q=${searchtext}`)
				.then((res) => {
					// console.log(res.data);
					setSearchResults(res.data);
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			setSearchResults([]);
		}
	}, [searchText]);

	const handleClearInput = () => {
		setSearchText('');
	};

	return (
		<div className=" flex flex-row items-center justify-center order-4 lg:order-2 w-full">
			<div className="relative rounded flex items-center justify-between w-full font-poppins pl-4 pr-2 py-1 border border-gray-200 lg:w-[400px]">
				<input
					value={searchText}
					onChange={handleInputChange}
					placeholder="Search here...."
					className="w-full focus:outline-none"
				/>
				<div
					onClick={handleClearInput}
					className="rounded flex p-2 bg-gradient-to-t from-[#FAAC06] to-[#EB8105] cursor-pointer">
					{searchText.trim() === '' ? (
						<IoSearch size={24} />
					) : (
						<IoClose size={24} />
					)}
				</div>
				{showResults &&  searchResults.length > 0 && searchText.trim() !== '' && (
					<div className="bg-white w-full p-4 flex items-start justify-center  flex-col z-[100] absolute top-12 ">
						{searchResults.slice(0, 7).map((result) => (
							<div
								className="cursor-pointer border-b w-full py-1"
								key={result._id}>
								<Link
									href={`/products/details?productId=${result._id}`}
									onClick={() => {
										setSearchText(result.productName);
										setShowResults(false);
										setSearchResults([]);
									}}>
									{result.productName}
								</Link>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchBox;
