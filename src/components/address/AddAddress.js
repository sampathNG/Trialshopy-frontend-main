import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function AddAddress({ onClose }) {
	const [address, setAddress] = useState('');
	const [state, setState] = useState('');
	const [pincode, setPincode] = useState('');
	

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Address:', address);
		console.log('State:', state);
		console.log('Pincode:', pincode);

		setAddress('');
		setState('');
		setPincode('');
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-4 rounded shadow-md w-96 h-66">
				<div className="flex flex-row justify-between p-3">
					<div className="font-semibold text-2xl mb-4">Add New Address</div>
					<div className="hover:cursor-pointer" onClick={onClose}>
						<AiOutlineClose size={20} />
					</div>
				</div>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<input
							type="text"
							id="address"
							className="w-full border rounded-md p-2"
							placeholder="Address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<select
							id="state"
							className="w-full border rounded-md p-2"
							value={state}
							onChange={(e) => setState(e.target.value)}
							required>
							<option value="">Select state</option>
							<option value="state1">State 1</option>
							<option value="state2">State 2</option>
							<option value="state3">State 3</option>
						</select>
					</div>
					<div className="mb-4">
						<input
							type="text"
							id="pincode"
							className="w-full border rounded-md p-2"
							placeholder="Pin code"
							value={pincode}
							onChange={(e) => setPincode(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="bg-gradient-to-b from-primary to-secondary rounded hover:bg-red-600 text-black px-4 py-1">
						Add Address
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddAddress;
