import { NextPage } from 'next';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Play: NextPage = () => {
	const pointsData = useSelector<number>((state: any) => state.play.points);
	const [points] = useState(pointsData);

	return <div>You have {points} points</div>;
};

export default Play;
