export const checkWhetherAWord = (squares: Array<string>, i: number) => {
    let horizontallyWord = [];
    let verticallyWord = [];
    let curentIndex = i;
    if(i===1) {
        horizontallyWord.push(squares[i]);
    }
    horizontallyWord.push(squares[i]);
    verticallyWord.push(squares[i]);
}