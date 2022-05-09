import { NextPage } from 'next';

import vincenian1 from '../../public/assets/images/vincenian/1.jpg';
import vincenian3 from '../../public/assets/images/vincenian/3.jpg';
import vincenian4 from '../../public/assets/images/vincenian/4.jpg';

const Team: NextPage = () => {
	return (
		<div className="container pt-8 ">
			<h2 className="text-xl">- Meet the team -</h2>
			<div className="mt-6 content-center">
				<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-20 mx-5">
					<img src={vincenian1.src} className="rounded-full w-64" alt="" />
					<div className="flex justify-center grid content-center ">
						<div>
							<h4 className="text-base">Enzo | CEO </h4>
							<p className="text-xs">
								Professional in Strategist Business Management The Master Mind Behind Vincenia
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
