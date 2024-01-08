import { useContext } from 'react';
import { useState } from 'react';
import { createContext, useEffect } from 'react';

// create a context and export it.
export const AuthContext = createContext();

// create aprovider and export it; consumer will use it.
export const AuthProvider = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false);

	return (
		<AuthContext.Provider value={{ authenticated, setAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
