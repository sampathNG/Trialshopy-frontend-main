// StoreReviewSec.js
import React, { useState } from 'react';
import StoreReviewsCard from './StoreReviwesCard';
import StoreReviewCardData from './StoreRewiesCardData';

const StoreReviewSec = () => {
	const [items, setItems] = useState(StoreReviewCardData);

	return (
		<div className="w-full">
			<span className="font-Poppins text-1xl  2xl:leading-1">
				Store Reviews
			</span>
			<div className="">
				<StoreReviewsCard items={items} />
			</div>

			
		</div>
	);
};

export default StoreReviewSec;
