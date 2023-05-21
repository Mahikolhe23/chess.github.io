const allSquares = document.getElementsByClassName("square");

const clickedElement = [];
for (const x of allSquares) {
    x.addEventListener("click", function () {
        const idOfElement = x.getAttribute("id");
        const innerHTMLOfElement = document.getElementById(idOfElement).innerHTML;
        if (clickedElement.length > 0) {
            clickedElement[0].removeAttribute("style");
            clickedElement.length = 0;
        }

        if (innerHTMLOfElement.includes('black') || innerHTMLOfElement.includes('white')) {
            document.getElementById(idOfElement).style.backgroundColor = 'yellow';
            clickedElement.push(x);
        }
    });
}