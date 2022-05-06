import { NextPage } from 'next';
import Logo from '../../public/assets/images/logo.png';
import twitterLogo from '../../public/assets/images/socialmedia/twitter.png';
import discordLogo from '../../public/assets/images/socialmedia/discord.png';

const Header: NextPage = () => {
	return (
		<div className="flex flex-row justify-between container pb-10 mb-8 items-center">
			<img src={Logo.src} style={{ width: 200 }} />
			<div className="grid grid-cols-2 gap-4 flex items-center">
				<a href="https://discord.gg/thevincenia" target="_blank" rel="noopener noreferrer">
					<img src={discordLogo.src} className="w-6" />
				</a>
				<a href="https://twitter.com/VinceniaNft" target="_blank" rel="noopener noreferrer">
					<img src={twitterLogo.src} className="w-6" />
				</a>
			</div>
		</div>
	);
};

export default Header;
