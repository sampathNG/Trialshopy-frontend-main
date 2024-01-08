import React, { useState, useEffect } from 'react';
import Login from '../../../src/components/loginsignup/Login';


export default function LoginPage() {
	const [isMobile, setIsMobile] = useState(false);
	

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<div
				className="bg-[#FFA51D] sm:pt-8 pt-[150px] flex-wrap sm:items-center h-full  "
				style={{
					backgroundImage: `url(${
						isMobile ? '/images/LoginMobile.png' : '/images/Login.png'
					})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					height:'120vh',
					padding:'20px 0px',
					paddingBottom:'25px'
				}}>
				<Login />
			</div>
		</>
	);
}
