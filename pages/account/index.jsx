import React, { useEffect } from 'react';
import SidebarLayout from '../../src/layouts/SidebarLayout';
import Account from '../../src/components/account/Account';
import { useUser } from './../../src/UserContext';
import { useRouter } from 'next/router';
export default function Index() {
	const { authenticated } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!authenticated) {
			router.push('/account/login');
		}
	});
	return (
		<>
			{authenticated ? (
				<SidebarLayout>
					<Account />
				</SidebarLayout>
			) : null}
		</>
	);
}
