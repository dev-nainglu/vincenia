import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { updateShowIntro, updateShowHowto } from '../../../ducks/modules/Play';
import pageStyles from '../../../styles/Page.module.css';

const Welcome: NextPage = () => {
    const IntroStatus = false;
	const HowtoStatus = true;
	const dispatch = useDispatch();
    
	const setIntroStatus = () => {
		dispatch(updateShowIntro(IntroStatus));
	};

	const setHowtoStatus = () => {
		dispatch(updateShowHowto(HowtoStatus));
	};

	return (
		<div className={pageStyles.welcomePage}>
			<h1 className={pageStyles.title}>Welcome to The Vaniac Roulette</h1>
			
			<button className={'expand pushable ' + pageStyles.playbutton}
			onClick={setIntroStatus}>
				<span className={"front text-milk"}>
					Play Now
				</span>
			</button>
			<h4 onClick={setHowtoStatus} className={pageStyles.howtobutt}>How To Play?</h4>
		</div>
	);
};

export default Welcome;
