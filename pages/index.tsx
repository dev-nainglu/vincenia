import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from '../components/Head';
import Header from '../components/Home/Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Team from '../components/Home/Team';
import Faq from '../components/Home/Faq';
import ComingSoon from '../components/Home/ComingSoon';
import Info from '../components/Home/Info';
import Vincenian from '../components/Home/Vincenian';

const Home: NextPage = () => {
	const router = useRouter();

	return (
		<div
			style={{
				backgroundColor: 'black',
				color: '#DFC7AB',
			}}
		>
			<Head />
			<Header />
			{/* About Vincenia */}
			<div className="container">
				<div style={{ position: 'relative', zIndex: 1 }}>
					<h2 className="text-3xl font-bold py-8">About Vincenia</h2>
				</div>

				<div>
					<p>
						The Vincenia is a 5,555 unique art collection of outlaws assembled to carry out the
						wills of Vincent. A top-of-the-notch community in Solana NFT space? it's our desire!
					</p>
					<p>
						Solid vision & mission is essential for our project. We are in business and it should be
						profitable, don't worry we got you. We outlaws are ready to conquer the Solana, join the
						journey!
					</p>
				</div>
			</div>
			{/* End about Vincenia */}
			{/* Become a Vincenian */}
			<Vincenian />
			<Info />
			{/* End Become a Vincenian */}

			<ComingSoon />

			<Team />
			<Faq />
		</div>
	);
};

export default Home;
