export const handOutTilesToPlayer = (tilesBag: Array<string>) => {
    return {
        rack: tilesBag.slice(0, 7),
        newTilesBag: tilesBag.slice(7)
    };
};