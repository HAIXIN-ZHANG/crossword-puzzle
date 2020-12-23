export interface BoardStoreState {
    squares: Array<string>,
    isXNext: Boolean,
    tilesBag: Array<string>,
    rackA: Array<string>,
    rackB: Array<string>,
    currentPlayer: string
}
export interface BoardProps {
	isXNext: Boolean,
	squares: Array<string>,
    tilesBag: Array<string>,
    rackA: Array<string>,
    rackB: Array<string>,
	currentPlayer: string,
}