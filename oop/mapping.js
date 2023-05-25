const mainMap = [];
class Square {
    color;
    isHighlighted;
    isHint;
    isPiece;
    id;

}
for (let i = 8; i > 0; i--) {
    const isRowEven = i % 2 == 0 ? true : false;
    const rowArray = [];
    for (let j = 97; j < 105; j++) {
        const isElementEven = j % 2 == 0 ? true : false;
        const fileName = String.fromCharCode(j);
        const id = fileName + i;

        //create object of squares
        const square = new Square();
        square.id = id;

        //odd row => odd element
        if (!isRowEven && !isElementEven) {
            square.color = 'dark';
        }

        //even row => odd element
        if (isRowEven && !isElementEven) {
            square.color = 'light';
        }

        //odd row => even element
        if (!isRowEven && isElementEven) {
            square.color = 'light';
        }

        //even row => even element
        if (isRowEven && isElementEven) {
            square.color = 'dark';
        }

        rowArray.push(square);
    }
    mainMap.push(rowArray);
}
import * as chess from './renderHtml.js';
chess.renderUI(mainMap);