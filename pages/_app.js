import AppLayout from '../src/layouts/AppLayout';
import '../styles/globals.css';
import Script from 'next/script';
import { UserProvider } from '../src/UserContext';


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script src="https://checkout.razorpay.com/v1/checkout.js" />
			
			<AppLayout>
				<UserProvider>
					<Component {...pageProps} />
				</UserProvider>
			</AppLayout>
		
		</>
	);
}

export default MyApp;
