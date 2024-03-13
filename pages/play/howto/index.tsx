import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { updateShowIntro, updateShowHowto } from '../../../ducks/modules/Play';
import pageStyles from '../../../styles/Page.module.css';

const Howto: NextPage = () => {
    const IntroStatus = true;
	const HowtoStatus = false;
	const dispatch = useDispatch();
    
	const closeHowTo = () => {
		dispatch(updateShowHowto(HowtoStatus));
		dispatch(updateShowIntro(IntroStatus));

	};

	return (
		<div className={pageStyles.howToPage}>
			<h1 className={pageStyles.title}>How To Play</h1>
            <div className={pageStyles.howToContainer}>
                <h3>Mechanism </h3>
                <p className={pageStyles.normalpara}>The Vaniac Roullete is a play-to-earn game where you can double your solana rounds after rounds. 
                    Total 5 rounds of roulette can be played. If a player plays and doesn't lose in the first round, 
                    he can play round 2 with a 3x Reward. And then round 3 with 4x, Level 4 with 5x, and the final 
                    round will be 6x. If the player loses at any stage within round 1 to final, all the rewards 
                    will be lost including his betted amount. 
                </p>
                <h3>Win or Lose?</h3>
                <p className={pageStyles.normalpara}>Our gameplay is simple. If the bullet comes out and kills Van Gogh, the game will result in a loss. 
                    On the other hand, if the bullet doesn't come out from the gun, the game will result in a win and
                    you can play the next round.
                </p>
                <h3>What coins do I need to put in order to play? </h3>
                <p className={pageStyles.normalpara}>Vaniac Roullete can be played with Solana. You need respective wallets which support solana in order to play.</p>
            </div>
            
			<h4 onClick={closeHowTo} className={pageStyles.howtobutt}>Close</h4>
		</div>
	);
};

export default Howto;
