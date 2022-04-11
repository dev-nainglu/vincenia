import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import playStyles from '../../styles/Play.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from '../../componenets/Head';
import { useEffect, useState } from 'react';
import { play, button, logic } from './constants';
import Play from './play';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult, updateRound } from '../../ducks/modules/Play';
import { getResultString, getRandomLoadingMsg } from './helpers';

const Game: NextPage = () => {
	type chanceType = 1 | 2 | 3 | 5; //multiplying the wager points

	const dispatch = useDispatch();
	const { data: session, status } = useSession();
	const [loading, setLoading] = useState(false);
	const [currentChance, setCurrentChance] = useState<chanceType>(1);

	const currentRound = useSelector((state: any) => state.play.currentRound);
	const didWin = useSelector((state: any) => state.play.didWin);

	const setCurrentRound = (round: number) => {
		dispatch(updateRound(round));
	};

	const setDidWin = (result: boolean | null) => {
		dispatch(updateResult(result));
	};

	useEffect(() => {
		if (currentRound === logic.maxRound) {
			console.log(currentRound, 'End of round');
			setCurrentRound(0);
		}
	}, [currentRound]);

	const startRoll = () => {
		setLoading(true);
		const output = Math.random(); //randomly generate a value between 0.0 to 1.0 (float value)
		processResult(output < logic.chance / 100 ? true : false);
	};

	const processResult = (result: boolean) => {
		// main logic
		const timer = setTimeout(() => {
			setDidWin(result);
			setLoading(false);
			setCurrentRound(currentRound + 1);
		}, logic.waitingTime * 1000);
		return () => clearTimeout(timer);
	};

	const restartSession = () => {
		setDidWin(null);
		setLoading(false);
		setCurrentRound(0);
	};

	return (
		<div className={styles.container}>
			<Head title={play.headTitle} />
			<main className={styles.main}>
				<div>
					{didWin !== false && (
						<>
							<Play />
							{Array.from({ length: logic.maxRound }, (_, i) => i + 1).map((val, index) => {
								return (
									<p
										key={index}
										className={index === currentRound ? playStyles.roundActive : playStyles.round}
									>
										{val}
									</p>
								);
							})}
						</>
					)}
				</div>

				<h6>{loading ? getRandomLoadingMsg() : getResultString(didWin)}</h6>
				{didWin !== false ? (
					<button onClick={startRoll} disabled={loading}>
						{loading ? button.loading : !didWin ? button.start : button.retry}
					</button>
				) : (
					<button onClick={restartSession} disabled={loading}>
						{`Restart session`}
					</button>
				)}
			</main>
		</div>
	);
};

export default Game;
