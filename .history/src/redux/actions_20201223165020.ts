export const updateSquares = (squares: string) => ({
    squares,
    type: 'UPDATE_SQUARES',
});

export const generateTilesBag = (tilesBag) => ({
    tilesBag,
    type: 'GENERATE_TILESBAG',
});