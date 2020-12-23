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
    }else if(i % 15 ===0) {
        let horizontallyIndex = i;
        let verticallyIndex = i;
        while(!isEmpty(squares[horizontallyIndex]) && horizontallyIndex < (i+15)) {
            horizontallyWord.push(squares[horizontallyIndex]);
            horizontallyIndex++
        }
        while(!isEmpty(squares[verticallyIndex]) && verticallyIndex <= 100) {
            verticallyWord.push(squares[verticallyIndex]);
            verticallyIndex+=15;
        }
    }else {
        let horizontallyIndexRightWay = i;
        let horizontallyIndexLeftWay = i;
        let verticallyIndexUpWay = i;
        let verticallyIndexDownWay = i;
        while(!isEmpty(squares[horizontallyIndexRightWay]) && horizontallyIndexRightWay < 15 - (i % 15) + i) {
            horizontallyWord.push(squares[horizontallyIndexRightWay]);
            horizontallyIndexRightWay++
        }
        while(!isEmpty(squares[horizontallyIndexLeftWay]) && horizontallyIndexLeftWay >= i - (i % 15)) {
            horizontallyWord.push(squares[horizontallyIndexLeftWay-1]);
            horizontallyIndexRightWay--;
        }

        while(!isEmpty(squares[verticallyIndexDownWay]) && verticallyIndexDownWay <= 100) {
            verticallyWord.push(squares[verticallyIndex]);
            verticallyIndex+=15;
        }
    }




    horizontallyWord.push(squares[i]);
    verticallyWord.push(squares[i]);

}