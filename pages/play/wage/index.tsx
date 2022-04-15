import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWage } from '../../../ducks/modules/Play';
import { RootState } from '../../../ducks/Store';

import { button, logic } from '../../../constants';

const Wage: NextPage = () => {
	const pointsData = useSelector((state: RootState) => state.play.points);
	const [points, setPoints] = useState<number>(pointsData);
	const [userWage, setUserWage] = useState<any>(logic.minWageAmount);
	const dispatch = useDispatch();

	const setWage = () => {
		dispatch(updateWage(userWage));
	};

	return (
		<div>
			<input
				type="number"
				min={logic.minWageAmount}
				max={pointsData}
				value={userWage}
				onChange={(e) => {
					setUserWage(e.target.value);
					setPoints(pointsData - userWage);
				}}
				disabled
			/>
			<br />
			<br />
			<button onClick={setWage} disabled={userWage > pointsData}>
				{button.wage}
			</button>
		</div>
	);
};

export default Wage;
