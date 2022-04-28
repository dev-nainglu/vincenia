import type { NextPage } from 'next';
import ReactPlayer from 'react-player';

import styles from '../../styles/Home.module.css';
import Head from '../../components/Head';
import { play } from '../../constants';
import Play from './play';
import { useDispatch, useSelector } from 'react-redux';
import Wage from './wage';
import { RootState } from '../../ducks/Store';
import Points from './points';
import Background from '../../public/assets/images/Demo.jpg';
import { updateLoadingStatus } from '../../ducks/modules/Play';

const Game: NextPage = () => {
	const dispatch = useDispatch();

	const wageAmount = useSelector((state: RootState) => state.play.wageAmount);
	const pointsData = useSelector((state: RootState) => state.play.points);
	const didWin = useSelector((state: RootState) => state.play.didWin);
	const loading = useSelector((state: RootState) => state.play.loading);

	const currentRound = useSelector((state: any) => state.play.currentRound);
	const stakeAmount = wageAmount * (currentRound + 1);

	const stopLoading = () => {
		dispatch(updateLoadingStatus(false));
	};

	const backgroundStyle = {
		backgroundImage: `url(${Background.src})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};

	return loading === true ? (
		<ReactPlayer
			width={'100%'}
			height={'100%'}
			muted
			onEnded={stopLoading}
			playing={true}
			style={{
				position: 'fixed',
				zIndex: -1,
			}}
			url={'/assets/videos/loading.mp4'}
		/>
	) : (
		<div className={styles.container} style={backgroundStyle}>
			<Head title={play.headTitle} />
			<main className={styles.main}>
				<Points points={pointsData} wageAmount={wageAmount} didWin={didWin} />
				<br /> <br />
				{wageAmount ? <Play /> : <Wage />}
			</main>
		</div>
	);
};

export default Game;
