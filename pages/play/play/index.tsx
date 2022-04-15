import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addPoints,
	subtractPoints,
	updateResult,
	updateRound,
	updateWage,
} from '../../../ducks/modules/Play';
import { RootState } from '../../../ducks/Store';
import { button, logic } from '../../../constants';
import { getRandomLoadingMsg, getResultString } from '../../../helpers';
import playStyles from '../../../styles/Play.module.css';

const Play: NextPage = () => {
	const dispatch = useDispatch();
	const { data: session, status } = useSession();
	const [loading, setLoading] = useState(false);
	// const pointsData = useSelector<number>((state: RootState) => state.play.points);
	const wageAmount = useSelector((state: RootState) => state.play.wageAmount);
	const currentRound = useSelector((state: any) => state.play.currentRound);
	const didWin = useSelector((state: any) => state.play.didWin);

	const stakeAmount = wageAmount * (currentRound + 1);

	useEffect(() => {
		dispatch(updateWage(stakeAmount));
	}, [currentRound]);

	const setCurrentRound = (round: number) => {
		dispatch(updateRound(round));
	};

	const setDidWin = (result: boolean | null) => {
		dispatch(updateResult(result));
	};

	const startRoll = () => {
		setLoading(true);
		const output = Math.random(); //randomly generate a value between 0.0 to 1.0 (float value)
		processResult(output < logic.chance / 100 ? true : false);
	};

	const processResult = (result: boolean) => {
		// main logic

		const timer = setTimeout(() => {
			if (result === true) {
				dispatch(addPoints(stakeAmount));
			} else {
				dispatch(subtractPoints(stakeAmount));
			}
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
		dispatch(updateWage(null));
	};

	return (
		<>
			{didWin !== false && currentRound !== logic.maxRound && (
				<div>
					<br />
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
				</div>
			)}

			<h6 className="center">{loading ? getRandomLoadingMsg() : getResultString(didWin)}</h6>

			{didWin !== false && currentRound !== logic.maxRound && (
				<button onClick={startRoll} disabled={loading}>
					{loading ? button.loading : !didWin ? button.start : button.retry}
				</button>
			)}
			<br />
			<button onClick={restartSession} disabled={loading}>
				{button.cancel}
			</button>
		</>
	);
};

export default Play;
