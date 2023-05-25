"use strict";

import { addPawnPieceToObj } from './exportFunction';

//create function that renders html using array that we provide
const renderUI = function (squares) {

    //select main container from markup
    const mainContainer = document.querySelector('.main-container');

    let rankNumber = 8;
    squares.forEach(element => {
        let rank = document.createElement("div");
        rank.classList.add('rank-style');
        rank.setAttribute("id", rankNumber--);
        mainContainer.appendChild(rank);
        element.forEach(el => {
            el.isPiece = addPawnPieceToObj(el);
            const square = document.createElement('div');
            square.classList.add(`color-${el.color}`);
            square.classList.add('square-common');

            //assign unique id for each square
            square.setAttribute("id", el.id);

            //add file class to each square
            square.classList.add("file-" + el.id[0]);

            const imgElement = document.createElement("img");
            if (el.isPiece) {
                imgElement.setAttribute("src", el.isPiece);
            }
            square.appendChild(imgElement);
            rank.appendChild(square);
        });
    });
};
export { renderUI };