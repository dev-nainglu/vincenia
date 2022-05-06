import { NextPage } from 'next';
import styles from '../../styles/Home.module.css';

const faqs = [
	{
		question: `What is Vincenia`,
		answer: `The Vincenia is a 5555 unique pfp collection of outlaws assembled to carry out the wills of Vincent. A top of the notch community in Solana's NFT space? It's our desire.`,
	},
	{
		question: `What is the supply?`,
		answer: `5,555`,
	},
	{
		question: `When is the mint date?`,
		answer: `TBA`,
	},
	{
		question: `What is the minT price?`,
		answer: `TBA`,
	},
	{
		question: `Where will the Vincenia be launching?`,
		answer: `TBA`,
		// answer: `We will be launching our collection with Hydra Launchpad.`,
	},
];

const Faq: NextPage = () => {
	return (
		<div className="container mx-auto pt-8">
			<h2 className="text-xl">- FAQ -</h2>
			<div className=" p-5 mt-6 content-center" style={{ backgroundColor: '#403829' }}>
				{faqs.map((value) => {
					return (
						<div className="py-3">
							<h6>- [ ] {value.question}</h6>
							<p className="pl-2">{value.answer}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Faq;
