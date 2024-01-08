import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';
import { AuthProvider } from '../context/AuthContext';

const AppLayout = ({ children }) => {
	return (
		<div className="h-screen flex flex-col">
			<AuthProvider>
				<Header />
				<div className="flex flex-row flex-1">
					<main className="w-full">{children}</main>
				</div>
				<Footer />
			</AuthProvider>
		</div>
	);
};

export default AppLayout;
