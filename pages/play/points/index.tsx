import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { logic } from '../.../../../../constants';

const Points: NextPage<PointsProp> = ({ points, wageAmount, didWin }) => {
	const currentRound = useSelector((state: any) => state.play.currentRound);
	return (
		<>
			<>
				You have {points} points{' '}
				{wageAmount &&
					didWin !== false &&
					currentRound !== logic.maxRound &&
					`and you have waged ${wageAmount}`}
			</>
		</>
	);
};

interface PointsProp {
	points: number;
	wageAmount: number;
	didWin: boolean | null;
}

export default Points;
