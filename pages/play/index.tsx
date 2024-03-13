import type { NextPage } from 'next';
import ReactPlayer from 'react-player';

import Head from '../../components/Head';
import { play } from '../../constants';
import Play from './play';
import { useDispatch, useSelector } from 'react-redux';
import Welcome from './welcome';
import Howto from './howto';
import { RootState } from '../../ducks/Store';
import Background from '../../public/assets/images/Demo.jpg';
import { updateLoadingStatus } from '../../ducks/modules/Play';

const Game: NextPage = () => {
	const dispatch = useDispatch();

	const wageAmount = useSelector((state: RootState) => state.play.wageAmount);
	// const pointsData = useSelector((state: RootState) => state.play.points);
	const didWin = useSelector((state: RootState) => state.play.didWin);
	const loading = useSelector((state: RootState) => state.play.loading);
	const showIntro = useSelector((state: RootState) => state.play.showIntro);
	const showHowto = useSelector((state: RootState) => state.play.showHowto);
	const currentRound = useSelector((state: any) => state.play.currentRound);

	

	const stopLoading = () => {
		dispatch(updateLoadingStatus(false));
	};

	const getVideo = () => {
		console.log(didWin);
		if (didWin === true) {
			return `/assets/videos/win.mp4`;
		}
		return `/assets/videos/lose.mp4`;
	};

	const backgroundStyle = {
		backgroundImage: `url(${Background.src})`,
		// backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};

	return loading === true ? (
		<ReactPlayer
			muted
			onEnded={stopLoading}
			playing={true}
			style={{
				minWidth: '100%',
				minHeight: '100%',
				position: 'fixed',
				right: 0,
				bottom: 0,
			}}
			url={getVideo()}
		/>
	) : (
		showIntro === true ? (
			showHowto === true ? (
				<div style={backgroundStyle} className="playScreen h-screen grid content-center justify-center text-milk">
					<div className="bg-black/90 p-9 main-container">
						<Head title={play.headTitle} />
						<main className="container ">
							<Howto />
						</main>
					</div>
				</div>
			) : (
				<div style={backgroundStyle} className="playScreen h-screen grid content-center justify-center text-milk">
					<div className="bg-black/90 p-9 main-container">
						<Head title={play.headTitle} />
						<main className="container ">
							<Welcome />
						</main>
					</div>
				</div>
			)
			
		) : (
			<div style={backgroundStyle} className="h-screen grid content-center justify-center text-milk">
				<Head title={play.headTitle} />
				{/* <Points points={pointsData} wageAmount={wageAmount} didWin={didWin} /> */}
				<Play />
			</div>
			
		)
		
	);
};

export default Game;
