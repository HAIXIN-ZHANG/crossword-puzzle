export interface IBoardStoreState {
    squares: Array<string>,
    isXNext: Boolean,
    tilesBag: Array<string>,
    rackA: Array<string>,
    rackB: Array<string>,
    currentPlayer: string
}
