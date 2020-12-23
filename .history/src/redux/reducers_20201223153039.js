import { combineReducers } from 'redux';

const initialState = {
    squares: Array(225).fill(null),
    isXNext: true,
    tilesBag: Array(100).fill(null),
    rackA: Array(7).fill(null),
    rackB: Array(7).fill(null),
    currentPlayer: PlayerA,
};

const board = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_SQUARES':
        return {
            ...state,
            squares: action.squares,
            isXNext: !state.isXNext,
        };

      default:
        return state;
    }
}

export default combineReducers({
    board,
})
