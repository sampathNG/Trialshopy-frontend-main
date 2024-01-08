import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './context/AuthContext';
const UserContext = createContext();

export function UserProvider({ children }) {
	const {authenticated1} = useAuth();
	const [authenticated, setAuthenticated] = useState(authenticated1);
	const [user, setUser] = useState({});
	const serverURL = process.env.BASE_API_URL;
	// const serverURL = 'http://localhost:7000'

	axios.defaults.withCredentials = true;
	useEffect(() => {
		const checkAuthentication = async () => {
			try {
				// Check if the user is authenticated
				const response = await axios.get(
					`${serverURL}/api/v1/checklogin`
				);
				if (response.data.success) {
					setAuthenticated(true);

					const token = response.data.token;
					if (token) {
						const userDetails = response.data.userDetails;
						const users = JSON.parse(userDetails);
						console.log(users);
						
						setUser(users);
					}
				} else {
					console.log('not found');
					setAuthenticated(false);
				}
			} catch (err) {
				console.log('Error checking authentication', err);
				setAuthenticated(false);
			}
		};

		checkAuthentication();
	}, [serverURL]);

	return (
		<UserContext.Provider
			value={{ user, setUser, authenticated, setAuthenticated }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	return useContext(UserContext);
}
