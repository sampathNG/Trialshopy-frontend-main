import React, { useState } from 'react';
import axios from 'axios';

const LoginwithOTP = ({ setIsOtp, mobileNumber, setMobileNumber }) => {
	// const [mobileNumber, setMobileNumber] = useState('');
	const [Error, setError] = useState('');
	const serverURL = process.env.BASE_API_URL;
	const handleSendOTP = async () => {
		setError('');
		try {
			if (mobileNumber === '') {
				setError('Please enter mobile number');
				return;
			}
			const formattedMobileNumber = mobileNumber.startsWith('+91')
				? mobileNumber
				: '+91' + mobileNumber;

			setMobileNumber(formattedMobileNumber);
			// Make an HTTP POST request to send the OTP
			const response = await axios.post(
				`${serverURL}/api/v1/send-otp`,
				{
					mobileNumber: formattedMobileNumber,
				}
			);

			setIsOtp(true);

			// console.log(response.data);
		} catch (error) {
			setError(error.response.data.message);
		}
	};

	return (
		<>
			<div>
				<div className="flex w-full flex-col mb-2">
					<p className="flex-wrap text-xl text-center items-center font-semibold my-2">
						Login
					</p>
					<p className="flex-wrap text-xs mb-2 text-center text-gray-500">
						Continue to Trialshopy
					</p>
				</div>

				<div className="flex w-full flex-col">
					<input
						type="tel"
						placeholder="Mobile number"
						className={`w-full h-[47px] py-1 border border-gray-400 rounded-md ${
							Error ? 'border-red-500' : ''
						}`}
						value={mobileNumber}
						onChange={(e) => setMobileNumber(e.target.value)}
					/>
				</div>
				{Error && <p className="text-red-500 text-xs mt-2">{Error}</p>}

				<div className="grid-flow-col max-md:gap-3 justify-between">
					<div className="flex justify-start">
						<input
							type="radio"
							className="w-4 h-4 mt-4 mr-2 p-1 border border-gray-400 rounded-sm appearance-none checked:bg-orange-600"
						/>

						<span className="text-xs mb-2 text-[14px] text-gray-900 mt-4">
							Remember Me
						</span>
					</div>

					<div className="w-full flex flex-col my-1">
						<button
							onClick={handleSendOTP}
							className="w-full text-white my-2 bg-orange-400 rounded-md h-[48px] text-center flex items-center justify-center">
							Request OTP
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginwithOTP;
