import { NextPage } from 'next';
import { logic, play } from '../.../../../../constants';
import playStyles from '../../../styles/Play.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateWage } from '../../../ducks/modules/Play';

const Points: NextPage<PointsProp> = ({ points, wageAmount, didWin }) => {
	const currentRound = useSelector((state: any) => state.play.currentRound);
	const dispatch = useDispatch();

	const increaseBet = () => {
		if(wageAmount < ((points / 4) - wageAmount)){
			wageAmount = wageAmount + wageAmount
			dispatch(updateWage(wageAmount))
		}
	}

	const reduceBet = () => {
		if(100 < wageAmount){
			wageAmount = wageAmount - (wageAmount / 2)
			dispatch(updateWage(wageAmount))
		}else{
			dispatch(updateWage(100))
		}
	}

	return (
		<div className="mb-5">
			<div className={didWin !== false ? playStyles.balance : playStyles.finalbalance}>
				<h4 className={playStyles.text}>Balance</h4>
				<p>{points}</p>
			</div>
			{didWin !== false && (
				<div className={playStyles.balance + ' ' + playStyles.wage}>
					<h4 className={playStyles.text}>Bet Amount</h4>
					<div className={playStyles.wageContainer}>
						{didWin !== true && (
							<div className={playStyles.keys}>
								<div onClick={increaseBet}>+</div>
								<div onClick={reduceBet}>-</div>
							</div>
						)}
						<p>{wageAmount}</p>
					</div>
				</div>
			)}
			
		</div>
	);
};

interface PointsProp {
	points: number;
	wageAmount: number;
	didWin: boolean | null;
}

export default Points;
