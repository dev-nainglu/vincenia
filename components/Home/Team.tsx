import { NextPage } from 'next';

import vincenian1 from '../../public/assets/images/vincenian/1.jpg';
import vincenian3 from '../../public/assets/images/vincenian/3.jpg';
import vincenian4 from '../../public/assets/images/vincenian/4.jpg';

const Team: NextPage = () => {
	return (
		<div className="container pt-8 ">
			<h2 className="text-xl">- The Team -</h2>
			<div className="mt-6 content-center" style={{ backgroundColor: '#424242' }}>
				<div className="flex items-stretch grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-15 sm:gap-5 gap-2 p-4">
					<div>
						<img src={vincenian1.src} alt="" />
						<div className="m-2 text-center bg-yellow-800 text-sm p-2 flex self-stretch items-start animate-fade">
							<div className="content-center">
								<h4 className="text-base">Enzo | CEO </h4>
								<p className="text-xs">
									Professional in Strategist Business Management The Master Mind Behind Vincenia
								</p>
							</div>
						</div>
					</div>
					<div>
						<img src={vincenian1.src} alt="" />
						<div className="m-2 text-center bg-green-800 text-sm p-2 flex self-stretch items-start">
							<div className="content-center">
								<h4 className="text-base">Richie | COO</h4>
								<p className="text-xs">
									Business analyst, with huge experience in branding and marketing. Mainly focus on
									project development and PR.
								</p>
							</div>
						</div>
					</div>
					<div>
						<img src={vincenian3.src} alt="" />
						<div className="m-2 text-center bg-cyan-800 text-sm p-2 flex self-stretch items-start ">
							<div className="content-center">
								<h4 className="text-base">Lansky | Art Director</h4>
								<p className="text-xs">
									An admirer of the Masterpieces Versatile Artist on a Journey
								</p>
							</div>
						</div>
					</div>
					<div>
						<img src={vincenian3.src} alt="" />
						<div className="m-2 text-center bg-orange-800 text-sm p-2 flex self-stretch items-start">
							<div className="content-center">
								<h4 className="text-base">Astrid | CTO</h4>
								<p className="text-xs">
									Real-life IT Support Specialist with holistic knowledge of project development and
									dev works.
								</p>
							</div>
						</div>
					</div>
					<div>
						<img src={vincenian4.src} alt="" />
						<div className="m-2 text-center bg-blue-800 text-sm p-2 flex self-stretch items-start">
							<div className="content-center">
								<h4 className="text-base"> Sush | Marketing Manager</h4>
								<p className="text-xs">
									Professional Marketer with strong experience in content management. Proficient in
									client service and engagement.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
