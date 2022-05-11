import { NextPage } from 'next';
import { Carousel } from 'react-responsive-carousel';
import vincenian1 from '../../public/assets/images/vincenian/1.jpg';
import vincenian2 from '../../public/assets/images/vincenian/2.jpg';
import vincenian3 from '../../public/assets/images/vincenian/3.jpg';
import vincenian4 from '../../public/assets/images/vincenian/4.jpg';
import vincenian5 from '../../public/assets/images/vincenian/5.jpg';
import vincenian6 from '../../public/assets/images/vincenian/6.jpg';

// const CarouselItem = () => {
// 	const images = [
// 		[vincenian1.src, vincenian2.src, vincenian3.src],
// 		[vincenian4.src, vincenian5.src, vincenian6.src],
// 	];
// 	images.map((values, index) => {
// 		console.log(values);
// 		return (
// 			<div key={index} className="grid grid-cols-3 lg:gap-20 sm:gap-10 gap-5 pt-4">
// 				{values.map((value) => {
// 					return (
// 						<div>
// 							<img src={value} alt="" />
// 						</div>
// 					);
// 				})}
// 			</div>
// 		);
// 	});
// };

const Vincenian: NextPage = () => {
	const customRenderItem = (item: any, props: any) => <item.type {...item.props} {...props} />;
	return (
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
						<img src={vincenian2.src} alt="" />
					</div>
					<div>
						<img src={vincenian3.src} alt="" />
					</div>
				</div>
				<div className="grid grid-cols-3 lg:gap-20 sm:gap-10 gap-5 pt-4">
					<div>
						<img src={vincenian4.src} alt="" />
					</div>
					<div>
						<img src={vincenian5.src} alt="" />
					</div>
					<div>
						<img src={vincenian6.src} alt="" />
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Vincenian;
