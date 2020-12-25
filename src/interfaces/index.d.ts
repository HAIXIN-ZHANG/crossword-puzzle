export interface IBoardStoreState {
    squares: Array<string>,
    tilesBag: Array<string>,
    dictionaryWord: Array<string>,
    playerAInfo: IPlyerInfo,
    playerBInfo: IPlyerInfo,
    notificationMessage: string,
    currentPlayer: string
}
export interface IPlyerInfo {
    name: string,
    score: number,
    rack: Array<string>
}

export interface IHandleHandOutTiles {
    rack: Array<string>,
    newTilesBag: Array<string>
}