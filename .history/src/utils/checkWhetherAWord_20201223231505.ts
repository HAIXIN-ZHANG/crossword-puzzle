import { isEmpty } from 'lodash';

export const checkWhetherAWord = (squares: Array<string>, i: number) => {
    let horizontallyWord = [];
    let verticallyWord = [];
    if(i === 0) {
        let horizontallyIndex = 0;
        let verticallyIndex = 0;
        while(!isEmpty(squares[horizontallyIndex]) && horizontallyIndex < 15) {
            horizontallyWord.push(squares[horizontallyIndex]);
            horizontallyIndex++
        }
        while(!isEmpty(squares[verticallyIndex]) && verticallyIndex <= 100) {
            verticallyWord.push(squares[verticallyIndex]);
            verticallyIndex+=15;
        }
    }else if((i+1) % 15 ===0) {
        let horizontallyIndex = i;
        let verticallyIndex = i;
        while(!isEmpty(squares[horizontallyIndex]) && horizontallyIndex < (i+15)) {
            horizontallyWord.push(squares[horizontallyIndex]);
            horizontallyIndex++
        }
        while(!isEmpty(squares[verticallyIndex]) && verticallyIndex < (i+15)) {
            verticallyWord.push(squares[verticallyIndex]);
            verticallyIndex++;
        }
    }




    horizontallyWord.push(squares[i]);
    verticallyWord.push(squares[i]);

}