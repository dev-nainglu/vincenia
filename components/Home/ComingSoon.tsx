import { NextPage } from 'next';
import VNCA from '../../public/assets/images/VNCA.png';
import Marquee from 'react-fast-marquee';

const ComingSoon: NextPage = () => {
	return (
		<div>
			<Marquee gradient={false} className="h-12">
				<img src={VNCA.src} alt="" />
			</Marquee>
			<div className="container py-6">
				<div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
					<div style={{ backgroundColor: '#3F3F3F' }} className="rounded-lg my-6 px-6 py-4">
						<h3 className="font-bold">Initial supply</h3>
						<p>666</p>
					</div>
					<div style={{ backgroundColor: '#3F3F3F' }} className="rounded-lg my-6 px-6 py-4">
						<h3 className="font-bold">Traits</h3>
						<p>TBA</p>
					</div>
					<div style={{ backgroundColor: '#3F3F3F' }} className="rounded-lg my-6 px-6 py-4">
						<h3 className="font-bold">Mint price</h3>
						<p>TBA</p>
					</div>
					<div style={{ backgroundColor: '#3F3F3F' }} className="rounded-lg my-6 px-6 py-4">
						<h3 className="font-bold">Launch</h3>
						<p>TBA</p>
					</div>
				</div>
			</div>
			<Marquee gradient={false} direction="right" className="h-12">
				<img src={VNCA.src} alt="" />
			</Marquee>
		</div>
	);
};

export default ComingSoon;
