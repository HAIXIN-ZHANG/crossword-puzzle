export interface BoardStoreState {
    squares: Array<string>,
    isXNext: Boolean,
    tilesBag: Array<string>,
    rackA: Array<string>,
    rackB: Array<string>,
    scoreA: Number,
	scoreB: Number,
    currentPlayer: string
}
export interface BoardProps {
    squares: Array<string>,
    isXNext: Boolean,
    tilesBag: Array<string>,
    rackA: Array<string>,
    rackB: Array<string>,
    scoreA: Number,
	scoreB: Number,
	currentPlayer: string,
}