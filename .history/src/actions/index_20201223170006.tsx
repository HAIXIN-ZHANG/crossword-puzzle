import * as constants from '../constants'

export const updateSquares = (squares: string) => ({
    squares,
    type: 'UPDATE_SQUARES',
});

export const generateTilesBag = (tilesBag: Array<string>) => ({
    tilesBag,
    type: 'GENERATE_TILESBAG',
});