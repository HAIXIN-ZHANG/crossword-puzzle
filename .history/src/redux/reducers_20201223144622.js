import { combineReducers } from 'redux';

const initialState = {
    squares: Array(225).fill(null),
    bag:,
    rackA:,
    rackB:,
    currentPlayer:
    isXNext: true,
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
