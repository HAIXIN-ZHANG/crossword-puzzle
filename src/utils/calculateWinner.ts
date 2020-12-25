import { PLAYER_A_IS_WINNER, PLAYER_B_IS_WINNER, NO_WINNER } from '../constants'

export const calculateWinner = (scoreA: number, scoreB: number) => {
    if(scoreA > scoreB) {
        return PLAYER_A_IS_WINNER;
    };
    if(scoreA < scoreB) {
        return PLAYER_B_IS_WINNER;
    };
    if(scoreA === scoreB) {
        return NO_WINNER;
    };
    return null;
};