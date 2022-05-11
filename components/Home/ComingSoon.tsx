import { NextPage } from 'next';
import pub from '../../public/assets/images/Pub.jpg';

const ComingSoon: NextPage = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${pub.src})`,
				backgroundSize: 'cover',
				height: 900,
			}}
			className="content-center py-20"
		>
			{/* Road map */}
			<div className="container py-8">
				<h2 className="text-xl py-8">- Roadmap -</h2>
				<p className="text-6xl pt-4 font-bold py-8">Coming soon...</p>
			</div>
			{/* End Road map */}
			{/* Whitepaper */}
			<div className="container py-8">
				<h2 className="text-xl text-right py-8">- Whitepaper -</h2>
				<p className="text-right text-6xl pt-4 font-bold py-8">Coming soon...</p>
			</div>
			{/* End Whitepaper */}
		</div>
	);
};

export default ComingSoon;
