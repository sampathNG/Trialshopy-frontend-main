import NearbyCard from '../ProductCards/NearbyCard';
import DealsCard from '../ProductCards/DealsCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NearbyStore({ allStores }) {
	const serverURL = process.env.BASE_API_URL;
	const [stores, setStores] = useState([]);
	useEffect(() => {
		// Fetch data from the API
		axios
			.post(`${serverURL}/api/v1/stores`)
			.then((response) => {
				// setStores(response.data);
				setStores(response.data.data);
				// console.log(response.data.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);
	return (
		<>
			<div>
				<h1 className="md:text-[28px] text-[20px] font-poppins font-semibold px-4 py-2 ">
					Nearby Store
				</h1>

				{allStores ? (
					Object.keys(allStores).map((stores, index) => (
						<div key={index}>
							<div className="flex px-4 font-poppins">
								<span className="mr-auto md:text-[20px] text-[16px] w-[80vw] font-medium  ">
									{stores}
								</span>
								<span className="justify-end text-[14px] md:hidden ml-auto w-[15vw] text-black ">
									<button>See All</button>
								</span>
							</div>

							<div className="flex flex-row px-4 mb-2 overflow-x-auto grid-container ">
								<div className="flex flex-row px-2 py-4 ">
									{allStores[stores].map((item, index) => {
										return (
											<NearbyCard
												key={index}
												like={item?.rating?.rating}
												count={item?.rating?.count}
												imageName="store1"
												shop={item?.storeName}
												logo="bxs_offer.png"
												discount="Flat 20% OFF "
												text={item?.status}
												location="New Delhi"
												distance="-8km"

												store={item}
											/>
										);
									})}
								</div>
							</div>
						</div>
					))
				) : (
					<p> NO Stores Nearby</p>
				)}
				<div className="text-[20px] font-poppins underline py-2 font-semibold px-4   ">
					BEST DEALS OF THE DAY
				</div>
				{/* card of 5 */}
				<div className="flex flex-row px-3 my-4 mb-2 overflow-x-auto grid-container">
					{
						stores.map((item, index) => (
							<section key={index} className='text-xs'>
							<DealsCard
								image={item.images[0]?.url||'/noImage.png'}
								title={item.storeName}
								offer={item.offers[0]?.description}
								id={item._id}
							/>
						</section>
						)
						)
					}
				</div>
			</div>
		</>
	);
}
