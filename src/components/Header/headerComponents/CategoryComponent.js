import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function CategoryComponent({ setDropdown, categories, setIsDroOpen }) {
	const [nestedDropdowns, setNestedDropdowns] = useState(
		Array(categories.length).fill(false)
	);

	const handleNestedDropdownToggle = (index) => {
		setNestedDropdowns((prev) => {
			const updatedDropdowns = [...prev];
			updatedDropdowns[index] = !prev[index];
			return updatedDropdowns;
		});
	};

	return (
		<div className="w-full bg-white z-[100] absolute top-0 lg:px-[5rem] md:px-10 px-3 py-5 border shadow-lg">
			<div className="w-full text-center py-3">
				{categories.map((category, index) => (
					<div className="dropdown-section" key={index}>
						<div
							className={`dropdown-title flex items-center justify-between cursor-pointer bg-white text-black px-2 ${
								nestedDropdowns[index] ? 'open' : ''
							}`}
							onClick={() => handleNestedDropdownToggle(index)}>
							<div className="flex flex-row items-center my-2 font-medium">
								{category.name}
							</div>
							<span
								className={`dropdown-icon ${
									nestedDropdowns[index] ? 'open' : ''
								}`}>
								{nestedDropdowns[index] ? (
									<MdKeyboardArrowUp size={20} />
								) : (
									<MdKeyboardArrowDown size={20} />
								)}
							</span>
						</div>

						{nestedDropdowns[index] && (
							<div className="dropdown-content ">
								<div className="flex flex-col">
									{category.children.map((subCat, subIndex) => (
										<Link
											href={`/subcategory/${subCat._id}`}
											onClick={()=>setIsDroOpen(false)}
											key={subIndex}
											className="my-1 text-sm text-left pl-8 cursor-pointer">
											{subCat.name}
										</Link>
									))}
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default CategoryComponent;
