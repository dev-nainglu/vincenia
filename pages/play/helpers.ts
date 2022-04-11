import { play } from './constants';

export const getResultString = (didWin: boolean) => {
	switch (didWin) {
		case true:
			return play.winnerString;
		case false:
			return play.loserString;
		default:
			return play.defaultTitle;
	}
};

export const getRandomLoadingMsg = () => {
	return `${play.loading[Math.floor(Math.random() * play.loading.length)]} ...`;
};
