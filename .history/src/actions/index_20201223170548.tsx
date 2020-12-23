import * as constants from '../constants'

export interface UpdateSquare {
    type: constants.UPDATE_SQUARES;
    squares: string;
}
export interface GenerateTilesBag {
    type: constants.GENERATE_TILESBAG;
    tilesBag: Array<string>;
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