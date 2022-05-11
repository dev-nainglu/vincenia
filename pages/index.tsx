import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

import { useRouter } from 'next/router';
import Head from '../components/Head';
import Header from '../components/Home/Header';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import gunShotRight from '../public/assets/images/gunshot_right.png';
import vinceniaAbout from '../public/assets/images/vincenia.jpg';
import pub from '../public/assets/images/Pub.jpg';

import vincenian1 from '../public/assets/images/vincenian/1.jpg';
import vincenian3 from '../public/assets/images/vincenian/3.jpg';
import vincenian4 from '../public/assets/images/vincenian/4.jpg';
import Team from '../components/Home/Team';
import Faq from '../components/Home/Faq';
import VNCA from '../public/assets/images/VNCA.png';
import Marquee from 'react-fast-marquee';
import ComingSoon from '../components/Home/ComingSoon';

const customRenderItem = (item: any, props: any) => <item.type {...item.props} {...props} />;

const Home: NextPage = () => {
	const { data: session, status } = useSession();
	const router = useRouter();

	return (
		<div
			style={{
				backgroundColor: 'black',
				color: '#DFC7AB',
				// backgroundImage: `url(${backgroundImage.src})`,
				// backgroundRepeat: 'no-repeat',
				// backgroundSize: 'cover',
			}}
		>
			<Head />
			<Header />
			{/* About Vincenia */}
			<div className="container">
				<div style={{ position: 'relative', zIndex: 1 }}>
					<h2 className="text-xl font-bold py-8">About Vincenia</h2>
				</div>

				<div>
					<p>
						Vincenia is a decentralized, open-source, and decentralized Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Temporibus quibusdam quod laborum veniam doloribus
						distinctio dolore explicabo totam cum a modi eveniet praesentium quam aspernatur, eaque
						nulla, ullam ratione numquam.
					</p>
				</div>
			</div>
			{/* End about Vincenia */}
			{/* Become a Vincenian */}
			<div className="container py-8">
				{/* <h2 className="text-xl text-center">Become a Vincenian</h2> */}
				<Carousel
					renderItem={customRenderItem}
					autoPlay={true}
					showArrows={false}
					showIndicators={false}
					showThumbs={false}
					showStatus={false}
					swipeable={true}
					infiniteLoop={true}
				>
					<div className="grid grid-cols-3 lg:gap-20 sm:gap-10 gap-5 pt-4">
						<div>
							<img src={vincenian1.src} alt="" />
						</div>
						<div>
							<img src={vincenian3.src} alt="" />
						</div>
						<div>
							<img src={vincenian4.src} alt="" />
						</div>
					</div>
					<div className="grid grid-cols-3 lg:gap-20 sm:gap-10 gap-5 pt-4">
						<div>
							<img src={vincenian4.src} alt="" />
						</div>
						<div>
							<img src={vincenian3.src} alt="" />
						</div>
						<div>
							<img src={vincenian1.src} alt="" />
						</div>
					</div>
				</Carousel>
			</div>

			<ComingSoon />
			{/* End Become a Vincenian */}

			<div
				style={{
					backgroundImage: `url(${pub.src})`,
					// backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					height: 900,
				}}
				className="content-center"
			>
				<div className="container">
					<hr style={{ backgroundColor: '#DFC7AB' }} />
				</div>
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
				<div className="container">
					<hr style={{ backgroundColor: '#DFC7AB' }} />
				</div>
			</div>

			<Team />
			<Faq />
		</div>
	);
};

export default Home;
