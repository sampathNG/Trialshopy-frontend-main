import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Select from '../Header/Select';
import CategoryNavbar from '../Header/CategoryNavbar';
import DropdownMenu from '../Header/MainMenu';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import Cart from '../cart/Cart';
import { useRouter } from 'next/router';
import SearchBox from './SearchBox';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
	const serverURL = process.env.BASE_API_URL;
	const { pathname } = useRouter();
	const [isCart, setIsCart] = useState(false);
	const router = useRouter();
	// authenticated -> global context
	// const [authenticated, setAuthenticated] = useState(false);
	// authenticated is globally set can be used anywhere; if it's true then user is logged in and if it's false then user is yet to login
	const { authenticated, setAuthenticated } = useAuth(); // -> Wrap it inside provider
	// which user logged in => localstorage.getItem('user'); email: while login
	// const [user, setUser] = useState({});
	const [categories, setCategories] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	// axios.defaults.withCredentials = true;

	// const isLoginPage =
	// 	pathname === '/loginsignup/login' ||
	// 	pathname === '/loginsignup/signup' ||
	// 	pathname === '/loginsignup/loginwithpwd' ||
	// 	pathname === '/loginsignup/loginwithOTP' ||
	// 	pathname === '/loginsignup/OTPpage';

	useEffect(() => {
		// const apiurl = 'http://localhost:7000/api/v1/homeCategories';
		// Redis data
		const apiurl = `${serverURL}/api/v1/homeCategories`;

		axios
			.get(apiurl)
			.then((response) => {
				// console.log('authenticated: ', authenticated);
				// console.log('homeCategories', response.data);
				setCategories(response.data);
				sessionStorage.setItem('homeCategories', JSON.stringify(response.data));
			})
			.catch((error) => {
				console.error('Error fetching categories:', error);
			});
	}, [authenticated, serverURL]);

	// Not required: Authentication will be checked from localStorage

	// useEffect(() => {
	// 	const checkAuthentication = async () => {
	// 		try {
	// 			// Check if the user is authenticated
	// 			const response = await axios.get(
	// 				'https://trialshopy-backend.onrender.com/api/v1/checklogin'
	// 			);
	// 			if (response.data.success) {
	// 				setAuthenticated(true);

	// 				const token = response.data.token;
	// 				if (token) {
	// 					const userDetails = response.data.userDetails;
	// 					const users = JSON.parse(userDetails);
	// 					setUser(users);
	// 				}
	// 			} else {
	// 				console.log('not found');
	// 				setAuthenticated(false);
	// 			}
	// 		} catch (err) {
	// 			console.log('Error checking authentication', err);
	// 			setAuthenticated(false);
	// 		}
	// 	};
	// 	checkAuthentication();
	// }, []);

	useEffect(() => {
		const customerId = localStorage.getItem('customerId');
		if (customerId) {
			setAuthenticated(true);
			axios
				.get(`${serverURL}/api/v1/cart/` + customerId)
				.then((response) => {
					let cartItem = [];
					let items = response.data[0].items;
					for (let item of items) {
						const { productName, price } = item.productId;
						const qty = item.count || 0;
						const total = qty * price;
						// console.log(
						// 	`ProductName: ${productName}, price: ${price}, count: ${qty}, total: ${total}`
						// );
						cartItem.push({
							productName,
							price,
							qty,
							total,
						});
					}
					setCartItems(cartItem);
					console.log('CartItems: ', cartItems);
				})
				.catch((err) => {
					throw new Error('CartAPI Error...');
				});
			// setIsCart(true);
		}
	}, [authenticated]);

	// Not required
	// if (isLoginPage) {
	// 	return null;
	// }

	const signInClick = () => {
		router.push('/account/login');
	};

	// axios.defaults.withCredentials = true;
	const signOutClick = () => {
		try {
			localStorage.removeItem('user');
			localStorage.removeItem('email');
			localStorage.removeItem('customerId');
			setIsCart(false);
			setAuthenticated(false);
			setCartItems([]);
			// window.location.href = '/';
			router.push('/');
		} catch (err) {
			console.log('Error logging out', err);
		}
	};

	return (
		<>
			{/* Header Row 1 starts: Locale, Country, ContactUs,NewsLetter & FAQs */}
			<div className="hidden w-full lg:block">
				<div className="border box-border flex flex-row items-center justify-between font-poppins px-[120px] w-full">
					<div className="flex flex-row items-center justify-start">
						<div className="border border-b-0  p-2.5 box-border">
							<Select />
						</div>
						<div className="border border-b-0  p-2.5 box-border">INDIA</div>
					</div>
					<div className="flex items-center justify-start">
						<div className="border border-b-0  p-2.5 box-border">
							<Link href="/account/contactus" className="">
								CONTACT US
							</Link>
						</div>

						<div className="border border-b-0  p-2.5 box-border">
							<Link href="/account/newsletter" className="">
								NEWSLETTER
							</Link>
						</div>
						<div className="border border-b-0 p-2.5 box-border">
							<Link href="/account/faq" className="">
								FAQS
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* Header Row 1 ends here: Locale, Country, ContactUs,NewsLetter & FAQs */}

			<div className="flex flex-col lg:flex-row  items-center lg:justify-between gap-2 lg:gap-4 px-4 py-4 lg:px-[120px] lg:py-[10px] w-full border bg-white">
				<div className="flex  items-center justify-between order-1 gap-1.5 w-full h-full lg:w-auto">
					{/* BrandName Header */}
					<div className="flex items-center h-full gap-1">
						{/* Dropdown - hamburger menu for smaller screen: shows Language, Country, ContactUs, NewsLetter, FAQs */}
						<span className="block lg:hidden ">
							<DropdownMenu
								signInClick={signInClick}
								signOutClick={signOutClick}
								authenticated={authenticated}
								isCart={isCart}
								setIsCart={setIsCart}
							/>
						</span>
						<Link
							href="/"
							className="lg:font-bold uppercase text-base md:text-lg lg:text-3xl text-[#18181B] font-poppins h-full">
							<Image
								src={'/images/logo/trialshoppy_mobile.svg'}
								width={232}
								height={44}
								alt="logo"
								className="hidden lg:block h-full w-full lg:min-w-[200px]"
							/>
							<Image
								src={'/images/logo/trialshoppy_mobile.svg'}
								width={80}
								height={25}
								alt="logo"
								className="block lg:hidden h-full w-full min-w-[100px]"
							/>
						</Link>
					</div>

					{/* lg:hidden Cart, Login/signup will be shown in screen except large screen*/}
					<div className="flex lg:hidden flex-row items-center justify-between gap-2.5 order-2 lg:order-4 w-full max-w-min ml-4">
						{authenticated ? (
							<>
								<div className="flex items-center justify-between gap-2">
									{/* <div
										className="block border border-[#EB8105] px-[5px] lg:px-2.5 py-[5px] lg:py-2.5 bg-white transition-all hover:cursor-pointer rounded-md"
										onClick={() => setIsCart(!isCart)}>
										<MdOutlineShoppingCart size={20} />
									</div> */}

									{/* <Link href={'/account'}>
										<div className="block border border-[#EB8105] px-[5px] lg:px-2.5 py-[5px] lg:py-2.5 bg-white transition-all hover:cursor-pointer rounded-md">
											<AiOutlineUser size={20} />
										</div>
									</Link> */}
								</div>

								{/* <button
									onClick={signOutClick}
									className="block py-[5px] lg:py-2.5 px-[10px] lg:px-4 bg-gradient-to-b from-[#FAAC06] to-[#EB8105]  text-[14px] md:text-sm lg:w-52 text-black text-center font-semibold font-poppins rounded-md ">
									LOG OUT
								</button> */}
							</>
						) : (
							<>
								{/* <button
									onClick={signInClick}
									className=" block py-[5px] lg:py-2.5 px-[10px] lg:px-4 bg-gradient-to-b from-[#FAAC06] to-[#EB8105]  text-[14px] md:text-sm w-[136px] lg:w-52 text-black text-center font-semibold font-poppins rounded-md ">
									LOG IN /SIGN UP
								</button> */}
							</>
						)}
					</div>
				</div>

				{/* hidden:  will be shown in larger screen only - wishlist, cart, login*/}
				<div className="hidden lg:flex lg:flex-row items-center justify-between gap-2.5 order-2 lg:order-4">
					{authenticated ? (
						<>
							<div className="flex gap-4">
								<Link
									href="/account/wishlist"
									className="block border border-[#EB8105] rounded px-1 lg:px-2.5 py-1 lg:py-2.5  bg-white">
									<AiOutlineHeart size={20} />
								</Link>
								<div
									className="block border border-[#EB8105] px-[5px] lg:px-2.5 py-[5px] lg:py-2.5 bg-white transition-all hover:cursor-pointer rounded-md"
									onClick={() => setIsCart(!isCart)}>
									<MdOutlineShoppingCart size={20} />
								</div>
								<Link
									href="/account"
									className="block border border-[#EB8105] rounded px-1 lg:px-2.5 py-1 lg:py-2.5  bg-white">
									<AiOutlineUser size={20} />
								</Link>
							</div>
							<button
								onClick={signOutClick}
								className="block rounded py-[5px] lg:py-2.5 px-[10px] lg:px-4 bg-gradient-to-t from-[#FAAC06] to-[#EB8105] text-[10px] lg:text-sm lg:w-52 text-black text-center font-semibold  font-poppins ">
								LOG OUT
							</button>
						</>
					) : (
						<button
							onClick={signInClick}
							className="block rounded py-[5px] lg:py-2.5 px-[10px] lg:px-4 bg-gradient-to-t from-[#FAAC06] to-[#EB8105] text-[10px] lg:text-sm lg:w-52 text-black text-center font-semibold  font-poppins ">
							LOG IN/SIGN UP
						</button>
					)}
				</div>
				{/*  Search box at center for all screen size at homepage */}
				<SearchBox />
			</div>

			{/* Navbar Categories dropdowns */}
			<CategoryNavbar categories={categories} />
			{/* Once isCart -> TRUE(loggedIn) : Display Cart */}
			{isCart && <Cart setIsCart={setIsCart} cartItems={cartItems} />}
		</>
	);
};

export default Header;
