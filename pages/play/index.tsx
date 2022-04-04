import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from '../../componenets/Head';
import { useState } from 'react';

import { play, button, logic } from './constants';

const Game: NextPage = () => {
	// const rounds = logic.round
	type round = 0 | 1 | 2 | 3 | 4 | 5; //there will only be 5 rounds

	const { data: session, status } = useSession();
	const [loading, setLoading] = useState(false);
	const [didWin, setDidWin] = useState<boolean | null>(null);
	const [roundCount, setRoundCount] = useState<round>(0);

	const startRoll = () => {
		setLoading(true);
		setDidWin(null);

		const output = Math.random(); //randomly generate a value between 0.0 to 1.0 (float value)
		if (output < logic.chance / 100) {
			processResult(true); //true for win
		} else {
			processResult(false); //false for lose
		}
	};

	const processResult = (result: boolean) => {
		const timer = setTimeout(() => {
			setDidWin(result);
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	};

	const getResult = () => {
		switch (didWin) {
			case true:
				return play.winnerString;
			case false:
				return play.loserString;
			default:
				return play.defaultTitle;
		}
	};

	return (
		<div className={styles.container}>
			<Head title={play.headTitle} />
			<main className={styles.main}>
				<h4>{loading ? play.loading : getResult()}</h4>
				<button onClick={startRoll} disabled={loading}>
					{loading ? button.loading : !didWin ? button.start : button.retry}
				</button>
			</main>
		</div>
	);
};

export default Game;
