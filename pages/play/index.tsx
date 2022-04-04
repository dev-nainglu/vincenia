import type { NextPage } from 'next';

import styles from '../../styles/Home.module.css';

import { signIn, signOut, useSession } from 'next-auth/react';
import Head from '../../componenets/Head';
const Game: NextPage = () => {
	const { data: session, status } = useSession();
	return (
		<div className={styles.container}>
			<Head title="Vangover | Game" />
			<main className={styles.main}>
				<h1 className={styles.title}>Let's play some games</h1>
			</main>
		</div>
	);
};

export default Game;
