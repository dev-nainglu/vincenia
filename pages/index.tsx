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

import vincenian1 from '../public/assets/images/vincenian/1.jpg';
import vincenian3 from '../public/assets/images/vincenian/3.jpg';
import vincenian4 from '../public/assets/images/vincenian/4.jpg';
import Team from '../components/Home/Team';
import Faq from '../components/Home/Faq';

const customRenderItem = (item: any, props: any) => <item.type {...item.props} {...props} />;

const Home: NextPage = () => {
	const { data: session, status } = useSession();
	const router = useRouter();

	return (
		<div
			className="p-6"
			style={{
				backgroundColor: '#2D2D36',
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
				<img src={vinceniaAbout.src} alt="" />
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
				<div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
					<div style={{ backgroundColor: '#3F3F3F' }} className="rounded-lg my-6 px-6 py-4">
						<h3 className="font-bold">Initial supply</h3>
						<p>666</p>
					</div>
					<div style={{ backgroundColor: '#3F3F3F' }} className="rounded-lg my-6 px-6 py-4">
						<h3 className="font-bold">Traits</h3>
						<p>TBA</p>
					</div>
					<div style={{ backgroundColor: '#3F3F3F' }} className="rounded-lg my-6 px-6 py-4">
						<h3 className="font-bold">Mint price</h3>
						<p>TBA</p>
					</div>
					<div style={{ backgroundColor: '#3F3F3F' }} className="rounded-lg my-6 px-6 py-4">
						<h3 className="font-bold">Launch</h3>
						<p>TBA</p>
					</div>
				</div>
			</div>
			{/* End Become a Vincenian */}
			{/* Vaniac Russian Roulette	 */}
			{/* <div className="container mx-auto pt-6">
				<h2 className="text-xl text-center">- Vaniac Russian Roulette -</h2>
				<div className="grid grid-cols-7 lg:gap-20 sm:gap-10 gap-5 pt-4 h-96 content-center">
					<div className="col-span-2 text-center">
						<img src={gunShotLeft.src} alt="" />
					</div>
					<div className="col-span-3 text-center">[Coming soon]</div>
					<div className="col-span-2 text-center">
						<button
							className="border rounded border-black px-3"
							onClick={() => alert('Be patient son!')}
						>
							Play
						</button>
					</div>
				</div>
				<div className="pt-4 content-center">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni veritatis aliquam!
						Dolore iure corrupti libero esse perspiciatis? Vitae nam modi consequuntur esse quasi
						dolore animi, ducimus labore ex sequi.
					</p>
				</div>
			</div> */}
			{/* End Vaniac Russian Roulette	 */}
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
			<Team />
			<Faq />
		</div>
	);
};

export default Home;
