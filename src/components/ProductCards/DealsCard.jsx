import Image from 'next/image';
import Router from 'next/router';
export default function DealsCard({ image, title, offer,id }) {
	const handleClick = () => {
		// window.location.href=`/nearByStore/store?storeId=${id}`
		Router.push(`/nearByStore/store?storeId=${id}`);
	};
	return (
		<>
			<div className="flex px-2 md:mb-6 mb-4 w-[60vw] md:w-fit m-0 hover:cursor-pointer text-gray-900"
			onClick={handleClick}
			>
				<div className="flex flex-col items-center justify-center h-[180px] w-[170px] md:h-[200px] md:w-[210px] my-2">
					<img
						width={20}
						height={20}
						src={image}
						alt="Deal imgee"
						className="w-44 h-44"
					/>
					<div className="relative w-[80%] rounded -mt-10">
						<div className="bg-white p-1 shadow-md">
							<div className="mt-1 h-[44px] overflow-hidden font-medium uppercase text-xs justify-center flex  md:text-base">
								{title}
							</div>
							<div className="mt-2 h-[20px] overflow-hidden text-center text-xs text-gray-600">
								{offer}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
