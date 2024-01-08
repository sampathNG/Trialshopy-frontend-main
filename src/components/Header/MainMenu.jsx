import { useState } from 'react';
import Link from 'next/link';
import Select from './Select';
import SelectCountry from './SelectCountry';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdOutlineShoppingCart } from 'react-icons/md';
// import SearchBox from './SearchBox';
const Dropdown = ({
	signInClick,
	signOutClick,
	authenticated,
	isCart,
	setIsCart,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="z-[100]">
			<button
				type="button"
				className="px-1 py-2 text-gray-700 rounded-md duration-100"
				onClick={toggleDropdown}>
				{isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
			</button>

			<div
				className={`absolute left-0 top-4 z-10 w-[50vw] h-[100vh] min-h-fit bg-white shadow-xl rounded-lg transition-transform  ${
					isOpen ? 'translate-x-[0]' : '-translate-x-[100%]'
				}`}>
				<div className="p-2 flex justify-end">
					<button
						type="button"
						className="px-1 py-1 text-gray-700 rounded-md duration-100 border border-[#EB8105]"
						onClick={toggleDropdown}>
						{isOpen ? (
							<AiOutlineClose size={20} />
						) : (
							<AiOutlineMenu size={25} />
						)}
					</button>
				</div>
				<div className="">
					<ul className="flex flex-col items-center justify-center w-full gap-2">
						{authenticated && (
							<>
								<li className=" py-1 w-full" onClick={toggleDropdown}>
									<Link
										href="/account"
										className="px-4 py-2 text-lg font-poppins">
										Profile
									</Link>
								</li>
								<li className=" py-1 w-full" onClick={toggleDropdown}>
									<Link
										href="/account/wishlist"
										className="px-4 py-2 text-lg font-poppins">
										Wishlist
									</Link>
								</li>
								<li className=" py-1 w-full" onClick={toggleDropdown}>
									<span
										onClick={() => setIsCart(!isCart)}
										className="px-4 py-2 text-lg font-poppins">
										Cart
									</span>
								</li>
							</>
						)}

						<li className=" py-1 w-full">
							<span className="px-4 py-2 text-lg font-poppins ">
								<Select toggleDropdown={toggleDropdown} />
							</span>
						</li>
						<li className=" py-1 w-full">
							<span className="px-4 py-2 text-lg font-poppins ">
								<SelectCountry toggleDropdown={toggleDropdown} />
							</span>
						</li>
						<li className=" py-1 w-full" onClick={toggleDropdown}>
							<Link
								href="/account/contactus"
								className="px-4 py-2 text-lg font-poppins ">
								Contact Us
							</Link>
						</li>
						<li className=" py-1 w-full" onClick={toggleDropdown}>
							<Link
								href="/account/newsletter"
								className="px-4 py-2 text-lg font-poppins ">
								Newsletter
							</Link>
						</li>
						<li className=" py-1 w-full" onClick={toggleDropdown}>
							<Link
								href="/account/faq"
								className="px-4 py-2 text-lg font-poppins">
								FAQS
							</Link>
						</li>
					</ul>
				</div>
				{/* <SearchBox /> */}
				<div className="pl-4 mt-4" onClick={toggleDropdown}>
					{authenticated ? (
						<>
							<button
								onClick={signOutClick}
								className="block py-[5px] lg:py-2.5 px-[10px] lg:px-4 bg-gradient-to-b from-[#FAAC06] to-[#EB8105]  text-[14px] md:text-sm lg:w-52 text-black text-center font-semibold font-poppins rounded-md ">
								LOG OUT
							</button>
						</>
					) : (
						<button
							onClick={signInClick}
							className=" block py-[5px] lg:py-2.5 px-[10px] lg:px-4 bg-gradient-to-b from-[#FAAC06] to-[#EB8105]  text-[14px] md:text-sm w-[136px] lg:w-52 text-black text-center font-semibold font-poppins rounded-md ">
							LOG IN /SIGN UP
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
