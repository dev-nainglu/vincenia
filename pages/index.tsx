import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

import { signIn, signOut, useSession } from 'next-auth/react';
import Head from '../componenets/Head';
const Home: NextPage = () => {
	const { data: session, status } = useSession();
	return (
		<div className={styles.container}>
			<Head />
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="#">Vangover</a>
				</h1>
				<br />

				{status === 'authenticated' ? (
					<div>
						<img src={session?.user?.image ?? ''} alt="" />
						<br />
						{`Hello, ${session?.user?.name}`}
						<br />
						<button onClick={() => signOut()}>Logout</button>
					</div>
				) : (
					<button onClick={() => signIn('discord')}>Login with discord</button>
				)}
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Home;
