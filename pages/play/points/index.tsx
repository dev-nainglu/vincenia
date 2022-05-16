import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { logic } from '../.../../../../constants';
import playStyles from '../../../styles/Play.module.css';

const Points: NextPage<PointsProp> = ({ points, wageAmount, didWin }) => {
	const currentRound = useSelector((state: any) => state.play.currentRound);
	return (
		<div className="mb-5">
			<p className={playStyles.pointsInfo}>
				You have {points} points{' '}
				{wageAmount &&
					didWin !== false &&
					currentRound !== logic.maxRound &&
					`and you have waged ${wageAmount}`}
			</p>
		</div>
	);
};

interface PointsProp {
	points: number;
	wageAmount: number;
	didWin: boolean | null;
}

export default Points;
