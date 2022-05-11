import { NextPage } from 'next';

const ComingSoon: NextPage = () => {
	return (
		<div>
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
		</div>
	);
};

export default ComingSoon;
