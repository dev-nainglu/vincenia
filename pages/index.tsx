import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

import { project } from '../utils/const';
import { useRouter } from 'next/router';
import Head from '../components/Head';
import Header from '../components/Header';

const Home: NextPage = () => {
	const { data: session, status } = useSession();
	const router = useRouter();
	const banana = () => {
		return 1 + '1';
	};
	return (
		<div className="mx-auto p-6">
			<Head />
			<Header />
			<div className="flex flex-col items-center justify-center m-6">
				<p>Contract</p>
				<p>of</p>
				<h1 className="text-2xl">Vincenia</h1>
			</div>
			{/* About Vincenia */}
			<div className="container mx-auto">
				<h2 className="text-xl font-bold">About Vincenia</h2>
				<div className="grid mr-20 pt-4">
					<p>
						Vincenia is a decentralized, open-source, and decentralized Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Temporibus quibusdam quod laborum veniam doloribus
						distinctio dolore explicabo totam cum a modi eveniet praesentium quam aspernatur, eaque
						nulla, ullam ratione numquam.
					</p>
				</div>

				<div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-5 grid-cols-3 gap-4 pt-4">
					<button className="border rounded border-black px-3">Twitter</button>
					<button className="border rounded border-black px-3">Discord</button>
					<button className="border rounded border-black px-3">Mint</button>
				</div>
			</div>
			{/* End about Vincenia */}

			{/* Become a Vincenian */}
			<div className="container mx-auto pt-6">
				<h2 className="text-xl text-center">Become a Vincenian</h2>
				<div className="grid grid-cols-3 lg:gap-20 sm:gap-10 gap-5 pt-4">
					<div>
						<img
							src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960"
							alt=""
						/>
						<p className="pt-4">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae labore recusandae
							voluptas ex quam, consectetur iure tempora saepe est qui harum vel incidunt expedita
							minus aspernatur? Ipsum quia rem earum.
						</p>
					</div>
					<div>
						<img
							src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960"
							alt=""
						/>
						<p className="pt-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos eum iste
							corrupti consequuntur, consequatur pariatur nemo odio fugit magni adipisci
							voluptatibus velit inventore exercitationem hic dicta consectetur temporibus corporis?
						</p>
					</div>
					<div>
						<img
							src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960"
							alt=""
						/>
						<p className="pt-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae,
							reprehenderit, atque error, dolore eaque assumenda pariatur est harum quibusdam saepe
							dicta eos. Fugit, repellendus similique eveniet recusandae nam aspernatur?
						</p>
					</div>
				</div>
			</div>
			{/* End Become a Vincenian */}

			{/* Vaniac Russian Roulette	 */}
			<div className="container mx-auto pt-6">
				<h2 className="text-xl text-center">- Vaniac Russian Roulette -</h2>
				<div className="grid grid-cols-7 lg:gap-20 sm:gap-10 gap-5 pt-4 h-96 content-center">
					<div className="col-span-2 text-center">Gun icon</div>
					<div className="col-span-3 text-center">[Comming soon]</div>
					<div className="col-span-2 text-center">
						<button className="border rounded border-black px-3">Play</button>
					</div>
				</div>
				<div className="pt-4 content-center">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni veritatis aliquam!
						Dolore iure corrupti libero esse perspiciatis? Vitae nam modi consequuntur esse quasi
						dolore animi, ducimus labore ex sequi.
					</p>
				</div>
			</div>
			{/* End Vaniac Russian Roulette	 */}

			{/* FAQ */}
			<div className="container mx-auto pt-8">
				<h2 className="text-xl">- FAQ -</h2>
				<div className=" h-96 mt-6 bg-slate-300 content-center"></div>
			</div>
			{/* End FAQ */}

			{/* Team */}
			<div className="container mx-auto pt-8">
				<h2 className="text-xl">- TEAM -</h2>
				<div className="mt-6 bg-slate-300 content-center">
					<div className="grid grid-cols-4 lg:gap-20 sm:gap-10 gap-5 p-4">
						<div>
							<img
								src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960"
								alt=""
							/>
							<p className="m-4 text-center bg-yellow-400">Mofo 1</p>
						</div>
						<div>
							<img
								src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960"
								alt=""
							/>
							<p className="m-4 text-center bg-cyan-400">Mofo 2</p>
						</div>
						<div>
							<img
								src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960"
								alt=""
							/>
							<p className="m-4 text-center bg-orange-400">Mofo 3</p>
						</div>
						<div>
							<img
								src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960"
								alt=""
							/>
							<p className="m-4 text-center bg-blue-400">Mofo 4</p>
						</div>
					</div>
				</div>
			</div>
			{/* End Team */}
		</div>
	);
};

export default Home;
