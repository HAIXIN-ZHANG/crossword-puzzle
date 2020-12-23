import * as constants from '../constants'

export interface UpdateSquare {
    type: constants.UPDATE_SQUARES;
}
export interface GenerateTilesBag {
    type: constants.GENERATE_TILESBAG;
}


export const updateSquares = (squares: string): UpdateSquare => ({
    squares,
    type: 'UPDATE_SQUARES',
});

export const generateTilesBag = (tilesBag: Array<string>): GenerateTilesBag => ({
    tilesBag,
    type: 'GENERATE_TILESBAG',
});

export type BoardAction = UpdateSquare | GenerateTilesBag