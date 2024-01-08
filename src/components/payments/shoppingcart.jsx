import React from 'react';
import PaymentProductCard from './paymentproductcard';
import OfferCard from './offercard';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AddressForm from './AddressForm.';
import SimilarProductCard from '../productDetails/SimilarProductCard';
import Loading from '../Loading';
const serverURL = process.env.BASE_API_URL;
const ShoppingCart = () => {
	const router = useRouter();
	const { productId } = router.query;

	const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [loading, setLoading]= useState(false);
	const [cart, setCart] = useState([]);
	const [address, setAddress] = useState(null);
	const [newAddress, setNewAddress] = useState(false);
	const [addressEdit, setAddressEdit] = useState(false);
	const [coupons, setCoupons] = useState([]);
	const [couponSelected, setCouponSelected] = useState(null);
	const [couponInputValue, setCouponInputValue] = useState('');
	const [couponApplied, setCouponApplied] = useState(null);
    const [couponFailed,setCouponFailed]=useState(false);
	const [couponAppliedSuccess, setCouponAppliedSuccess] = useState(false);
	const [similarProducts, setSimilarProducts] =useState([]);
	


	const handleAdressSubmit = () => {
		setNewAddress(false);
		setAddressEdit(false);
	};
	const handleCouponSelected = (coupon) => {
		setCouponSelected(coupon);
		setCouponInputValue(coupon.code);
		setCouponAppliedSuccess(false);
		setCouponFailed(false);
	};
	const handleCouponApply = () => {
		const selectedCoupon = coupons.find(
			(coupon) => coupon.code === couponInputValue
		);
		if (selectedCoupon) {
			// Set the applied coupon
			setCouponApplied(selectedCoupon);
			setCouponAppliedSuccess(true);
			setCouponFailed(false);
		
		} else {
			setCouponAppliedSuccess(false);
			setCouponFailed(true);
			
		}
	};
	const deleteAddress = async () => {
		try {
			const deleteAddressUrl = `${serverURL}/api/v1/address/${address._id}`;
			await axios.delete(deleteAddressUrl);
			console.log('deleted successfully');
			// You may want to refetch the addresses or update the UI accordingly
			// Example: refetchAddresses();
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
		  try {
			const apiUrl = `${serverURL}/api/v1/products/${productId}`;
			const response = await axios.get(apiUrl);
			setCart(response.data);
			setLoading(false);
			const apiUrl3 = `${serverURL}/api/v1/products`;

					axios
						.post(`${apiUrl3}`, {
							filters: { categories: response.data.categories },
						})
						.then((response) => {
							setSimilarProducts(response.data.data);
							console.log('Similar product: ', response.data.data);
						})
						.catch((err) => {
							console.error(err);
						});
		  } catch (error) {
			console.error(error);
		  }
		};
	
		if (productId) {
		  fetchData();
		}
	  }, [productId]);
	
	  // Fetch coupon data
	  useEffect(() => {
		const fetchCoupons = async () => {
		  try {
			const couponUrl = `${serverURL}/api/v1/coupons/getAll`;
			const response = await axios.get(couponUrl);
			setCoupons(response.data);
		  } catch (error) {
			console.log(error);
		  }
		};
	
		fetchCoupons();
	  }, []);
	
	  // Fetch customer address
	  useEffect(() => {
		const customerAddress = async () => {
		  try {
			const CustomerAddressUrl = `${serverURL}/api/v1/address/user/6f808c858e657b8e152f1716`;
			const res = await axios.get(CustomerAddressUrl);
	
			let addresses = res.data;
			let mostRecentUsed = null;
	
			addresses.forEach((address) => {
			  if (address.lastUsedAt) {
				if (
				  !mostRecentUsed ||
				  new Date(address.lastUsedAt) > new Date(mostRecentUsed.lastUsedAt)
				) {
				  mostRecentUsed = address;
				}
			  }
			});
	
			setAddress(mostRecentUsed);
		  } catch (error) {
			console.error(error);
		  }
		};
	
		customerAddress();
	  }, [newAddress]);
	

	// useEffect(() => {
	// 	axios
	// 		.get(`http://localhost:7000/api/v1/cart/64b161653d8484b51874229c`)
	// 		.then((response) => {
	// 			setCart(response.data);
	// 		});
	// }, []);

	let totalPrice = 0;
	let totalDiscount = 0;

	return (
		<>{cart && address &&
			<div className="w-full overflow-x-hidden ml-[2%]  md:ml-[10%] md:mr-[10%] ">
				<div className="flex flex-col lg:flex-row lg:justify-center ">
					<div className="w-full flex-col py-4 ">
						<div className="w-full md:w-3/4">
							<div
								className={`flex items-center text-sm  ${
									newAddress ? 'hidden' : ''
								}`}>
								<input
									type="radio"
									name="address"
									id="address1"
									className="mr-2"
								/>
								<div className="flex ">
									<div className=" relative">
										<label htmlFor="address1" className="text-lg ">
											<div className="flex  mt-[20px]">
												<h4 className="font-thin">Deliver to: </h4>
												<h4 className="font-bold">
													{address ? `${address.fullName}` : ''}
												</h4>
											</div>
										</label>
										<p className="mt-1">
											{address
												? `${address.landmark}, ${address.addressLine}, ${address.city}, ${address.state}, ${address.pincode}, ${address.country}`
												: ''}
										</p>
										<p>Contact : {address ? `${address.PhoneNumber}` : ''}</p>
										<div className="flex  justify-start absolute top-6 right-4 lg:right-3">
										<Image
											height={20}
											width={20}
											alt="Pen"
											src="/images/pen.svg"
											className=""
											onClick={() => {
												setNewAddress(true);
												setAddressEdit(true);
											}}/>
										<Image
											height={20}
											width={20}
											alt="Pen"
											src="/images/bin.svg"
											className="ml-[5px]"
											onClick={() => {
												// Call the function to delete the address
												deleteAddress();
											}}/>
									</div>
									</div>

									
								</div>
							</div>
							<div className={`${newAddress ? 'hidden' : ''}`}>
								<Image
								    height={100}
									width={100}
									src="/images/AddNew.svg"
									className="cursor-pointer pt-1"
									onClick={() => {
										setNewAddress(true);
									}}/>
							</div>

							<div
								className={` flex flex-col relative mt-2  ${
									newAddress ? '' : 'hidden'
								}`}>
								<AddressForm
									onAddressSubmit={handleAdressSubmit}
									isEditEnabled={addressEdit}
									Address={address}
								/>
								<Image
									className=" ml-[80px] sm:ml-[90px] lg:ml-[30px]  mb-auto absolute end-20"
									src="/images/x.svg"
									alt="Image"
									width={20}
									height={20}
									onClick={handleAdressSubmit}
								/>
							</div>
							<hr className="mt-[5px] w-full "></hr>
							<hr className="mt-[5px] w-full "></hr>
							<div class="relative">
								{cart && (
									<div className="w-full flex-row relative">
										<div className="mt-[30px] flex">
											<div className="w-full">
												<PaymentProductCard
													it={cart}
													onQuantityChange={(newQuantity) =>
														setSelectedQuantity(newQuantity)
													}
												/>
											</div>
											<Image
												className=" absolute top-0 right-3 max-sm:right-10%"
												src="/images/x.svg"
												alt="Image"
												width={20}
												height={20}
											/>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full md:w-3/4 ps-[1%]">
						<div className="w-full">
							<h3 className="font-normal text-[#7C7C7C] "> Coupons</h3>
							<div className="relative flex w-[340px] mt-[10px]">
								<input
									type="text"
									className="rounded py-2 ps-2 border border-orange-500 w-[300px]"
									value={couponInputValue}
									onChange={(e) => setCouponInputValue(e.target.value)}
								/>
								<button
									onClick={handleCouponApply}
									className="absolute rounded w-fit px-2 py-1 top-2 right-10 bottom-2 mr-[10px] flex items-center justify-center bg-orange-500 text-white">
									Apply
								</button>
							</div>
							{couponFailed && (
								<p className="text-[red] text-[12px]">
									Coupon code {couponInputValue} not found. Please check and try
									again.
								</p>
							)}
							{couponAppliedSuccess && (
								<p className="text-[green] text-[12px]">
									Coupon code {couponInputValue} applied successfully!
								</p>
							)}

							<div className="flex flex-row items-center w-[250px] mt-[10px]">
								<Image
									className="mr-1"
									src="/images/Percent.svg"
									alt="Image"
									width={20}
									height={20}
								/>
								Available offers
							</div>
							{coupons
							&& <div>
                                  {coupons.map((coupon, index) => (
								<div
									className="mt-[10px] offer-card" // Add the offer-card class here
									key={index}
									// Call handleCouponSelected with the current coupon
								>
									<OfferCard coupon={coupon} handleCouponSelected={handleCouponSelected} />
								</div>
							))}

							</div> 
							}
							
							{/* <div className="mt-[10px]">
								<OfferCard />
							</div>
							<div className="mt-[10px]">
								<OfferCard />
							</div> */}
						</div>

						<div className="w-full ">
							
							{/* <div className="relative flex w-fit mt-[10px]">
						<input
							type="text"
							className="px-4 py-2 border border-orange-500 "
						/>
						<button className="absolute top-2 right-2 bottom-2 mr-[20px] flex items-center justify-center  bg-orange-500 text-white">
							<h4 className="p-[3px] text-black">Apply</h4>
						</button>
					</div> */}
							
							<hr className="my-5" w-full/>

							<h3 className="font-normal text-[#7C7C7C] text-[13px] ml-[10px] mt-[15px]">
								Prices Detail({selectedQuantity})
							</h3>
							<div className="flex justify-between my-5">
								<div className="flex flex-col items-start justify-start ml-[10px] gap-3">
									<h3 className="font-poppins font-thin text-[14px]">
										TOTAL MRP
									</h3>
									<h3 className="font-poppins font-thin text-[14px]">
										Discount on MRP
									</h3>
									<h3 className="font-poppins font-thin text-[14px]">
										Coupon Discount
									</h3>
									<div className="flex">
										<h3 className="font-poppins font-thin text-[14px]">
											Convivence Fee
										</h3>
										<h3 className="font-poppins text-[#EB8105] font-normal pt-[1.5px] text-[13px] ml-[4px] cursor-pointer">
											Know More
										</h3>
									</div>
								</div>
								<div className="flex flex-col mr-[20px] items-end justify-end gap-3">
									<h3 className="font-poppins font-normal text-[14px]">
										₹ {cart.price * selectedQuantity}
									</h3>
									<h3 className="font-poppins font-normal text-[14px] text-[#059669]">
									-₹ {(couponAppliedSuccess? (cart.discount +(cart.price*couponApplied.discount/100)).toFixed(2)*selectedQuantity:cart.discount*selectedQuantity)}
										
									</h3>
									<h3 className="font-poppins font-normal text-[14px] text-[#DC2626] cursor-pointer">
									{couponAppliedSuccess ? (((cart.discount / cart.price) * 100) + couponApplied.discount).toFixed(2) : ((cart.discount / cart.price) * 100).toFixed(2)}%

									</h3>
									<h3 className="font-poppins font-normal text-[14px]">Free</h3>
								</div>
							</div>

							<hr className="mt-[20px]" />

							<div className="flex justify-between my-5">
								<div className="flex flex-col items-start justify-start ml-[10px] gap-3">
									<h3 className="font-normal">Total Amount</h3>
								</div>
								<div className="flex font-normal flex-col mr-[20px] items-end justify-end gap-3">
									<h3>₹ { ((cart.price* selectedQuantity )-(couponAppliedSuccess? (cart.discount +(cart.price*couponApplied.discount/100))*selectedQuantity:cart.discount*selectedQuantity)).toFixed(2)} </h3>
								</div>
							</div>

							{/* <Link href="/checkout/confirmation">
						<div className="w-full px-3 py-2 my-5 text-center rounded bg-gradient-to-b from-primary to-secondary">
							Pay Now
						</div>
					</Link> */}
							<Link
								href={{
									pathname: '/checkout/payment',
									query: {
										productId: productId,
										total: cart.price * selectedQuantity,
										discountonmrp:couponAppliedSuccess? (cart.discount +(cart.price*couponApplied.discount/100))*selectedQuantity:cart.discount*selectedQuantity ,
										totaldiscount: couponAppliedSuccess ? (((cart.discount / cart.price) * 100) + couponApplied.discount).toFixed(2) : ((cart.discount / cart.price) * 100).toFixed(2),
										tobepaid:  (cart.price* selectedQuantity )-(couponAppliedSuccess? (cart.discount +(cart.price*couponApplied.discount/100))*selectedQuantity:cart.discount*selectedQuantity).toFixed(2),
									},
								}}>
								<button className="mx-auto block w-3/4 md:w-full py-2 my-5 text-center rounded bg-gradient-to-b from-primary to-secondary">
									Place Order
								</button>
							</Link>

							<hr className="mt-[20px]" />
						</div>
					</div>
				</div>
				<div className="w-full mt-4 mb-5 overflow-auto md:m-0 grid-container ">
				{similarProducts && similarProducts.length ? (
					<div className="flex items-center justify-between w-full gap-4 md:gap-8 min-w-max">
						{similarProducts.map((product, key) => (
							<SimilarProductCard key={key} productDetails={product} />
						))}
					</div>
				) : (
					<p>No Products to show!</p>
				)}
			</div>
				{/* {produc.map((it, index) => {
									totalPrice += it.proprice;
									totalDiscount += it.productId.discount;
									return (
										<div key={index} className="w-[300px]">
											<div className="mt-[30px] flex">
												<PaymentProductCard it={it} />
												<Image
													className="sm:ml-[295px] ml-10 mb-auto"
													src="/images/x.svg"
													alt="Image"
													width={20}
													height={20}
												/>
											</div>
										</div>
									);
								})} */}
			</div>
}
		</>
	);
};

export default ShoppingCart;
