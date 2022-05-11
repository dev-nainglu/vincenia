import { NextPage } from 'next';
import { Carousel } from 'react-responsive-carousel';

import vincenian1 from '../../public/assets/images/vincenian/1.jpg';
import vincenian3 from '../../public/assets/images/vincenian/3.jpg';
import vincenian4 from '../../public/assets/images/vincenian/4.jpg';

const teams = [
	{
		name: 'Enzo | CEO',
		description: 'Professional in Strategist Business Management The Master Mind Behind Vincenia',
		image: vincenian1.src
	},
	
	{
		name: 'Richie | COO',
		description: 'Business analyst, with huge experience in branding and marketing. Mainly focus on project development and PR.',
		image: vincenian3.src
	},
	{
		name: 'Lansky | Art Director',
		description: 'An admirer of the Masterpieces Versatile Artist on a Journey',
		image: vincenian4.src
	},
	{
		name: 'Astrid | CTO',
		description: 'Real-life IT Support Specialist with holistic knowledge of project development and dev works.',
		image: vincenian1.src
	},
	{
		name: 'Sush | Marketing Manager',
		description: 'Professional Marketer with strong experience in content management. Proficient in client service and engagement.',
		image: vincenian3.src
	},
]

const Team: NextPage = () => {
	const customRenderItem = (item: any, props: any) => <item.type {...item.props} {...props} />;
	return (
		<div className="container pt-8 ">
			<h2 className="text-xl">- Meet the team -</h2>
			<div className="mt-6 content-center">
			<Carousel
					renderItem={customRenderItem}
					autoPlay={true}
					// showArrows={false}
					// showIndicators={false}
					showThumbs={false}
					showStatus={false}
					swipeable={true}
					infiniteLoop={true}
				>
				{
					teams.map((value, index) => {
						return (
							<div className="grid justify-items-stretch lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-20 mx-5">
							<img src={value.image} className="justify-self-center rounded-full w-28 justify-center" style={{width:'40%'}} alt="" />
							<div className="flex justify-center grid content-center ">
								<div>
									<h4 className="text-base">{value.name}</h4>
									<p className="text-xs">
										{value.description}
									</p>
								</div>
							</div>
						</div>
						)
					})
				}
				</Carousel>
		
			</div>
		</div>
	);
};

export default Team;
