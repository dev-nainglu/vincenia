import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addPoints,
	subtractPoints,
	updateLoadingStatus,
	updateResult,
	updateRound,
	updateWage,
	updateShowIntro
} from '../../../ducks/modules/Play';
import { RootState } from '../../../ducks/Store';
import { button, logic } from '../../../constants';
import { getRandomLoadingMsg, getResultString } from '../../../helpers';
import playStyles from '../../../styles/Play.module.css';
import Points from '../points';

const Play: NextPage = () => {
	const dispatch = useDispatch();
	const { data: session, status } = useSession();
	const loading = useSelector((state: RootState) => state.play.loading);
	const pointsData = useSelector((state: RootState) => state.play.points);
	const wageAmount = useSelector((state: RootState) => state.play.wageAmount);
	const currentRound = useSelector((state: any) => state.play.currentRound);
	const didWin = useSelector((state: any) => state.play.didWin);

	const stakeAmount = wageAmount * (currentRound + 1);

	const setIntroStatus = () => {
		dispatch(updateShowIntro(true));
	};

	useEffect(() => {
		dispatch(updateWage(stakeAmount));
	}, [currentRound]);

	const setCurrentRound = (round: number) => {
		dispatch(updateRound(round));
	};

	const setLoading = (status: boolean) => {
		dispatch(updateLoadingStatus(status));
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

		if (result === true) {
			dispatch(addPoints(stakeAmount));
		} else {
			dispatch(subtractPoints(stakeAmount));
		}
		setDidWin(result);
		setCurrentRound(currentRound + 1);

		// const timer = setTimeout(() => {
		// 	if (result === true) {
		// 		dispatch(addPoints(stakeAmount));
		// 	} else {
		// 		dispatch(subtractPoints(stakeAmount));
		// 	}
		// 	setDidWin(result);
		// 	setLoading(false);
		// 	setCurrentRound(currentRound + 1);
		// }, logic.waitingTime * 1000);
		// return () => clearTimeout(timer);
	};

	const restartSession = () => {
		setDidWin(null);
		setLoading(false);
		setCurrentRound(0);
		dispatch(updateWage(100));
	};

	return (
		<div className="playScreen grid justify-center ">
			<div className="bg-black/90 pl-10 pr-10 pb-10 pt-6">
				<main className="container">
					<h6 className="text-center title result mb-5">{loading ? getRandomLoadingMsg() : getResultString(didWin)}</h6>
					{didWin !== false && currentRound !== logic.maxRound && (
						<div className="mb-10 mt-10 title">
							You are at round : 
							{Array.from({ length: logic.maxRound }, (_, i) => i + 1).map((val, index) => {
								return (
									<p
										key={index}
										className={index === currentRound ? playStyles.roundActive : playStyles.round}
									>
										{val == 5 ? "final" : val }
									</p>
								);
							})}
							
						</div>
					)}
					
				</main>
				<Points points={pointsData} wageAmount={wageAmount} didWin={didWin} />
				{didWin !== false && currentRound !== logic.maxRound && (
					<button className="mt-5 expand bg-paleGray text-milk pushable" onClick={startRoll} disabled={loading}>
						<span className="front">
						{loading ? button.loading : !didWin ? button.start : button.retry}
						</span>
						
					</button>
				)}
				{didWin === false && (
					<div>
					<button className="expand mt-3 bg-paleGray text-milk pushable-low" onClick={restartSession} disabled={loading}>
						<span className='front-low'>
							Play Again!
						</span>
					</button>
					<button className="expand mt-3 bg-paleGray text-milk pushable-low" onClick={setIntroStatus} disabled={loading}>
						<span className='front-low'>
							Main Menu
						</span>
					</button>
					</div>
				)}
				
				
			</div>
			
			
			
		</div>
	);
};

export default Play;
