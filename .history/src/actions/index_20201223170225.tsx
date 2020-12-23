import * as constants from '../constants'

export interface updateSquare {
    type: constants.UPDATE_SQUARES;
}
export interface generateTilesBag {
    type: constants.GENERATE_TILESBAG;
}


export const updateSquares = (squares: string) => ({
    squares,
    type: 'UPDATE_SQUARES',
});

export const generateTilesBag = (tilesBag: Array<string>) => ({
    tilesBag,
    type: 'GENERATE_TILESBAG',
});

export type BoardAction = updateSquare | generateTilesBag