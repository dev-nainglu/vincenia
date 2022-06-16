import { NextPage } from 'next';
import Router from 'next/router';
import pub from '../../public/assets/images/Pub.jpg';

const ComingSoon: NextPage = () => {

	const goPlay = () => {
		Router.push({pathname: '/play'})
	}
	return (
		<div
			style={{
				backgroundImage: `url(${pub.src})`,
				backgroundSize: 'cover',
				height: 900,
			}}
			className="content-center py-20"
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
