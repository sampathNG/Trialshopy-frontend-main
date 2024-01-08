import React, { useState, useEffect } from 'react';
import mock from './wishlistData.json';

export default function Wishlist() {
	const [wishlistData, setWishlistData] = useState([]);

	useEffect(() => {
		setWishlistData(mock);

		//fetch product id ke data ko and then map on it

		//new state product data to store product data
	}, []);

	const Column = ({
		imageName,
		like,
		count,
		Name,
		price,
		discount,
		discription,
	}) => (
		<>
			<section className=" m-2  hover:border-blue-700  lg:px-4 lg:m-0 lg:w-full w-[95vw]   overflow-hidden shadow-md border-[2px]     ">
				<div className="py-2 ">
					<div className=" flex flex-row ">
						{/* //start */}
						<div className="relative">
							<a className="block relative  rounded overflow-hidden">
								<img
									alt="ecommerce"
									className=" lg:w-[20vh] lg:p-2 lg:h-[20vh] w-full h-full rounded"
									src={`/images/${imageName}`}
								/>
							</a>
						</div>
						{/* end */}

						<div className=" w-full bg-[#F1F1F180] py-4 px-4 lg:bg-white  ">
							<h2 className="text-[14px font-semibold pt-1 ">{Name}</h2>
							<div className="flex flex-row">
								<span className=" text-[#7C7C7C] text-[10px] lg:text-[14px] justify-start">
									{discription}
								</span>
								<span className="items-end justify-end ml-auto lg:flex">
									<img
										alt="ecommerce"
										className=" px-2 pb-2 "
										src="/images/Vector5.svg"
									/>
								</span>
							</div>
							<div className="pt-2 lg:pt-0 text-[14px]">
								<span className="font-semibold  ">₹{price}</span>
								<span className=" px-2 text-[#7C7C7C]">({discount})</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);

	return (
		<>
			<div className="p-4 -pb-2 font-semibold text-[18px]">Wishlist</div>
			<div className="flex flex-col py-1 lg:py-0">
				{wishlistData.map((item, index) => (
					<Column key={index} {...item} />
				))}
			</div>
		</>
	);
}

// import React, { useState, useEffect } from "react";
// import mock from "./wishlistData.json";

// export default function Wishlist() {
//   const [wishlistData, setWishlistData] = useState([]);

//   useEffect(() => {
//     // Fetch data from the JSON file or API
//     setWishlistData(mock);
//   }, []);

//   const fetchProductById = (productId) => {
//     return wishlistData.find(product => product.id === productId);
//   };

//   const Column = ({ id }) => {
//     const product = fetchProductById(id);

//     if (!product) {
//       return null;
//     }

//     const { imageName, Name, description, price, discount } = product;

//     return (
//       <section className="m-2 hover:border-blue-700 lg:px-4 lg:m-0 lg:w-full w-[95vw] overflow-hidden shadow-md border-[2px]">
//         <div className="py-2">
//           <div className="flex flex-row">
//             <div className="relative">
//               <a className="block relative rounded overflow-hidden">
//                 <img
//                   alt="ecommerce"
//                   className="lg:w-[20vh] lg:p-2 lg:h-[20vh] w-full h-full rounded"
//                 //   src={`/images/${imageName}`}
// 				  src={"https://trialshopy-backend.onrender.com/api/v1"+imageName?.url}
//                 />
//               </a>
//             </div>

//             <div className="w-full bg-[#F1F1F180] py-4 px-4 lg:bg-white">
//               <h2 className="text-[14px font-semibold pt-1 ]">{Name}</h2>
//               <div className="flex flex-row">
//                 <span className="text-[#7C7C7C] text-[10px] lg:text-[14px] justify-start">
//                   {description}
//                 </span>
//                 <span className="items-end justify-end ml-auto lg:flex">
//                   <img
//                     alt="ecommerce"
//                     className="px-2 pb-2"
//                     src="/images/Vector5.svg"
//                   />
//                 </span>
//               </div>
//               <div className="pt-2 lg:pt-0 text-[14px]">
//                 <span className="font-semibold">₹{price}</span>
//                 <span className="px-2 text-[#7C7C7C]">({discount})</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   return (
//     <>
//       <div className="p-4 -pb-2 font-semibold text-[18px]">Wishlist</div>
//       <div className="flex flex-col py-1 lg:py-0">
//         {wishlistData.map((product) => (
//           <Column key={product.id} id={product.id} />
//         ))}
//       </div>
//     </>
//   );
// }
