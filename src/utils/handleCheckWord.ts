import { isEmpty } from 'lodash';

// collecting a letter array form Horizontally way for helping judge whether player has established a valid word.
export const getHorizontallyLetters = (squares: Array<string>, i: number) => {
    let horizontallyWordArray: Array<string> = [];
    let horizontallyIndexLeftWay: number = i;
    let horizontallyIndexRightWay: number = i;

    horizontallyWordArray.push(squares[i]);
    while(horizontallyIndexLeftWay > i - (i % 15)) {
        horizontallyIndexLeftWay--;
        if(isEmpty(squares[horizontallyIndexLeftWay])) {
            break;
        }
        horizontallyWordArray.unshift(squares[horizontallyIndexLeftWay]);
    }
    while(horizontallyIndexRightWay < i + 14 - (i % 15)) {
        horizontallyIndexRightWay++;
        if(isEmpty(squares[horizontallyIndexRightWay])) {
            break;
        }
        horizontallyWordArray.push(squares[horizontallyIndexRightWay]);
    }
    return horizontallyWordArray;
}
// collecting a letter array form vertically way for helping judge whether player has established a valid word.
export const getVerticallyLetters = (squares: Array<string>, i: number) => {
    let verticallyWordArray: Array<string> = [];
    let verticallyIndexUpWay: number = i;
    let verticallyIndexDownWay: number = i;

    verticallyWordArray.push(squares[i]);
    while(verticallyIndexUpWay >= 0) {
        verticallyIndexUpWay -= 15;
        if(isEmpty(squares[verticallyIndexUpWay])) {
            break;
        }
        verticallyWordArray.unshift(squares[verticallyIndexUpWay]);
    }
    while(verticallyIndexDownWay <= 224) {
        verticallyIndexDownWay += 15;
        if(isEmpty(squares[verticallyIndexDownWay])) {
            break;
        }
        verticallyWordArray.push(squares[verticallyIndexDownWay]);
    }
    return verticallyWordArray;
}

// To judge whether player has established a valid word by using array filter method to filter Dictionary.
// User will get score of the word length if this word is a valid word.
export const checkWhetherValidWord = (horizontallyWordArray: Array<string>, verticallyWordArray: Array<string>, dictionary: Array<string>) => {
    const horizontallyWord: string = horizontallyWordArray.toString().replaceAll(',', '');
    const verticallyWord: string = verticallyWordArray.toString().replaceAll(',', '');
    const isHorizontallyAWord: boolean = !isEmpty(dictionary.filter(word => word === horizontallyWord));
    const isVerticallyAWord: boolean = !isEmpty(dictionary.filter(word => word === verticallyWord));

    if(isHorizontallyAWord && isVerticallyAWord) {
        return horizontallyWord.length + verticallyWord.length;
    }else {
        if(isHorizontallyAWord) {
            return horizontallyWord.length;
        }
        if(isVerticallyAWord) {
            return verticallyWord.length;
        }
    }
    return 0;
}