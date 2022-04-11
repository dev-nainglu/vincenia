import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import Head from '../../componenets/Head';
import { play } from '../../constants';
import Play from './play';
import { useSelector } from 'react-redux';
import Wage from './wage';
import { RootState } from '../../ducks/Store';
import Points from './points';

const Game: NextPage = () => {
	const wageAmount = useSelector((state: RootState) => state.play.wageAmount);
	const pointsData = useSelector((state: RootState) => state.play.points);
	const didWin = useSelector((state: RootState) => state.play.didWin);

	return (
		<div className={styles.container}>
			<Head title={play.headTitle} />
			<main className={styles.main}>
				<Points points={pointsData} wageAmount={wageAmount} didWin={didWin} />
				{wageAmount ? <Play /> : <Wage />}
			</main>
		</div>
	);
};

export default Game;
