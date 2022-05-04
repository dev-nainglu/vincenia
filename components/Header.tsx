import { NextPage } from 'next';

const Header: NextPage = () => {
	return (
		<div className="flex flex-row justify-between container mx-auto pb-10 mb-8">
			<p className="bg-blue-600 text-white">The Vincenia</p>
			<div className="grid grid-cols-2 gap-3">
				<a className="text-white">Twitter</a>
				<a className="text-white">Discord</a>
			</div>
		</div>
	);
};

export default Header;
