import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { HiEye } from 'react-icons/hi';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';
import { useUser } from '../../UserContext';


const LoginwithPwd = () => {
	const { setAuthenticated } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const userType = 'customer';
	const router = useRouter();

	const [showPassword, setShowPassword] = useState(false);
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [loginError, setLoginError] = useState('');

	const [rememberMe, setRememberMe] = useState(false);

	const serverURL = process.env.BASE_API_URL;

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const forgotPassword = () => {
		// console.log("password forgot")
		router.push('account/forgotPwd');
	}

	axios.defaults.withCredentials = true;
	const handleLogin = async () => {
		setEmailError('');
		setPasswordError('');
		setLoginError('');

		if (!email) {
			setEmailError('Email is required');
			return;
		}

		if (!password) {
			setPasswordError('Password is required');
			return;
		}

		try {
			const response = await axios.post(`${serverURL}/api/v1/login`, {
				email,
				password,
				userType,
			});
			if (response.data.Login === 'Unsuccessful') {
				setLoginError(response.data.error);
				return;
			}
			// router.push('/account/');
			if (rememberMe) {
				console.log(response);
				localStorage.setItem('user', response.data.token);
				localStorage.setItem('email', email);
				localStorage.setItem('customerId', response.data.result.UserData._id);
			}
			const currentPathname = window.location.pathname;
			if (currentPathname === '/account/login') {
				// window.location.href = '/';
				setAuthenticated(true);
				router.push('/');
			} else {
				window.location.reload();
			}
		} catch (error) {
			// Handle the error response
			console.error('Error logging in:', error);
		}
	};

	return (
		<>
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
					type="email"
					placeholder="Email"
					className={`w-full h-[47px] px-2 py-1 border border-gray-400 rounded-md ${
						emailError ? 'border-red-500' : ''
					}`}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				{emailError && <p className="text-red-500 text-xs">{emailError}</p>}
			</div>

			<div className="grid-flow-col max-md:gap-3 justify-between">
				<div className="relative flex">
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder="Password"
						className={`flex border w-full h-[47px] border-gray-400 py-1 px-2 rounded-md my-2 ${passwordError ? 'border-red-500' : ''
							}`}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<HiEye
						name="eye-fill"
						onClick={togglePasswordVisibility}
						className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
					/>
				</div>
				{passwordError && (
					<p className="text-red-500 text-xs">{passwordError}</p>
				)}
				{loginError && <p className="text-red-500 text-xs">{loginError}</p>}




				<div className='flex justify-between'>
					<Link
						href={'/account/forgotPwd'}
						className="text-xs mb-2 text-[14px] text-gray-900 cursor-pointer">
						Forgot Password ?
					</Link>
					<div className='flex justify-center'>
						<input
						type="checkbox"
						className="w-4 h-4 mr-2 accent-orange-400"
						checked={rememberMe}
						onChange={(e) => setRememberMe(e.target.checked)}
					/>
						<span className="text-xs mb-2 text-[14px] text-gray-900">
							Remember Me
						</span>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-col my-1">
				<button
					onClick={handleLogin}
					className="w-full text-white my-2 bg-orange-400 rounded-md h-[48px] text-center flex items-center justify-center">
					Login
				</button>
			</div>
		</>
	);
};

export default LoginwithPwd;
