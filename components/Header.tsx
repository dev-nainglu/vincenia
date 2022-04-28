import { NextPage } from 'next';

const Header: NextPage = () => {
	return (
		<div className="flex flex-row justify-between">
			<p className="bg-blue-600 text-white">The Vincenia</p>
			<p className="bg-blue-600 text-white">Dropdown</p>
		</div>
	);
};

export default Header;
