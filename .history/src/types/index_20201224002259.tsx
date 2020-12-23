export interface BoardStoreState {
    squares: Array<string>,
    isXNext: Boolean,
    tilesBag: Array<string>,
    rackA: Array<string>,
    rackB: Array<string>,
    scoreA: number,
	scoreB: number,
    currentPlayer: string,
    dictionaryWord:
}
export interface BoardProps {
    squares: Array<string>,
    isXNext: Boolean,
    tilesBag: Array<string>,
    rackA: Array<string>,
    rackB: Array<string>,
    scoreA: number,
	scoreB: number,
	currentPlayer: string,
}