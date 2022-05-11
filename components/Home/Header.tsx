import { NextPage } from 'next';
import twitterLogo from '../../public/assets/images/socialmedia/twitter.png';
import discordLogo from '../../public/assets/images/socialmedia/discord.png';
import vinceniaAbout from '../../public/assets/images/City.jpg';

const Header: NextPage = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${vinceniaAbout.src})`,
				// backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: 900,
			}}
		>
			<div className="flex flex-row justify-between pb-10 mb-8 p-6 items-center">
				<h1 className="text-3xl">The Vincenia</h1>
				<div className="grid grid-cols-2 gap-4 flex items-center">
					<a href="https://discord.gg/thevincenia" target="_blank" rel="noopener noreferrer">
						<img src={discordLogo.src} className="w-6" />
					</a>
					<a href="https://twitter.com/VinceniaNft" target="_blank" rel="noopener noreferrer">
						<img src={twitterLogo.src} className="w-6" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
