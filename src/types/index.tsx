export interface BoardStoreState {
    squares: Array<string>,
    tilesBag: Array<string>,
    rackA: Array<string>,
    rackB: Array<string>,
    scoreA: number,
	scoreB: number,
    currentPlayer: string,
    dictionaryWord: Array<string>,
}
export interface BoardProps {

}