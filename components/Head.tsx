import { NextPage } from 'next';
import Header from 'next/head';
import { project } from '../utils/const';

const Head: NextPage<HeadProps> = ({ title }) => {
	return (
		<Header>
			<title>{title}</title>
			<meta name="description" content="Keep it simple, son." />
			<link rel="icon" href="/favicon.ico" />
		</Header>
	);
};

interface HeadProps {
	title?: string;
}

const defaultProps: HeadProps = {
	title: project.name,
};

Head.defaultProps = defaultProps;

export default Head;
