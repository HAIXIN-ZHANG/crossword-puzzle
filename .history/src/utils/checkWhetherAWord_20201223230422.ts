import { isEmpty } from 'lodash';

export const checkWhetherAWord = (squares: Array<string>, i: number) => {
    let horizontallyWord = [];
    let verticallyWord = [];
    if(i === 0) {
        let horizontallyIndex = 0;
        let verticallyIndex = 0;
        while(!isEmpty(squares[horizontallyIndex])) {
            horizontallyWord.push(squares[horizontallyIndex]);
            horizontallyIndex++
        }
        while(!isEmpty(squares[verticallyIndex])) {
            verticallyIndex.push(squares[verticallyIndex]);

        }



    }
    horizontallyWord.push(squares[i]);
    verticallyWord.push(squares[i]);
}