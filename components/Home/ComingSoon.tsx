import { NextPage } from 'next';
import Router from 'next/router';
import pub from '../../public/assets/images/Pub.jpg';
import Countdown from 'react-countdown';
import { DateTime } from 'luxon';

const Completionist = () => (
	<a href="https://mint.creatormachine.com/vincenia">
		<span className="text-center text-5xl font-bold py-8 underline">MINT</span>
	</a>
);
const EndDate = DateTime.fromRFC2822('Wed, 01 Jun 2022 00:30:00 +0630').toISO();
// const EndDate = DateTime.fromRFC2822('Tue, 31 May 2022 21:50:15 +0630').toISO();

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
	if (completed) {
		// Render a completed state
		return <Completionist />;
	} else {
		// Render a countdown
		return (
			<span className="text-center text-5xl font-bold py-8">
				{`${days ? days + ' days ' : ''} ${hours} hours ${minutes} mintes ${seconds} seconds`}
			</span>
		);
	}
};

const ComingSoon: NextPage = () => {

	const goPlay = () => {
		Router.push({pathname: '/play'})
	}
	return (
		<div
			style={{
				backgroundImage: `url(${pub.src})`,
				backgroundSize: 'cover',
				height: 1100,
			}}
			className="grid place-items-center h-screen py-20"
		>
			<div className="container mt-20 py-8">
				<h2 className="text-6xl text-center">Vaniac Roulette</h2>
			</div>
			<div className="container py-10 text-center">
				<button className="pushable homebutt" onClick={goPlay}>
					<span className="front text-milk">
						Play Now
					</span>
				</button>
			</div>
			
		</div>
	);
};

export default ComingSoon;
