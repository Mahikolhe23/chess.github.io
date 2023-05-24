const mainMap = [];
class Square {
    color;
    isHighlighted;
    isHint;
    isPiece;
    id;

}
for (let i = 8; i > 0; i--) {
    const rowArray = [];
    for (let j = 97; j < 105; j++) {
        const fileName = String.fromCharCode(j);
        const id = fileName + i;
        //create object of squares
        const square = new Square();
        square.id = id;
        rowArray.push(square);
    }
    mainMap.push(rowArray);
}
