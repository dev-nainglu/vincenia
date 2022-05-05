import { NextPage } from 'next';
import Logo from '../../public/assets/images/logo.png';
const Header: NextPage = () => {
	return (
		<div className="flex flex-row justify-between container mx-auto pb-10 mb-8 items-center">
			<img src={Logo.src} style={{ width: 200 }} />
			<div className="grid grid-cols-2 gap-3">
				<a href="/">
					<img
						src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png"
						className="w-8"
					/>
				</a>
				<a>
					<img
						src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
						className="w-6"
					/>
				</a>
			</div>
		</div>
	);
};

export default Header;
