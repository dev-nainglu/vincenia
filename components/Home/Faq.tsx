import { NextPage } from 'next';
import { useState } from 'react';
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

const FaqItems = ({ question, answer, key }: { question: string; answer: string; key: number }) => {
	const [show, setShow] = useState(false);
	return (
		<div onClick={() => setShow(!show)} key={key} className="py-3">
			<h6>
				{show ? `-` : `+`} {question}
			</h6>
			{show && <p className="pl-2 animate-fade">{answer}</p>}
		</div>
	);
};

const Faq: NextPage = () => {
	return (
		<div className="container pt-8">
			<h2 className="text-xl">- FAQ -</h2>
			<div className=" p-5 mt-6 content-center" style={{ backgroundColor: '#403829' }}>
				{faqs.map((value, index) => {
					return <FaqItems question={value.question} answer={value.answer} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Faq;
