const arrayOfPawn = [];

for (const i of filesNameArray) {
    arrayOfPawn.push(document.getElementById(i + 2));
}

for (const i of filesNameArray) {
    arrayOfPawn.push(document.getElementById(i + 7));
}
for (const i of arrayOfPawn) {
    i.addEventListener("click", () => {
        const clickedElement = i;
        const currentId = i.getAttribute("id");
        let change = parseInt(currentId[1]);
        const stepsSquare = [];
        for (let i = 0; i < 2; i++) {
            change++;
            stepsSquare.push(document.getElementById(currentId[0] + change));
        }
        console.log(stepsSquare);
        highlightCircle(stepsSquare);
    });
}
//array to track circle
const trackCircleArray = [];


// function to add highlighting
const highlightCircle = function (attachedCircle) {
    if (trackCircleArray.length != 0) {
        undoCircle(trackCircleArray);
    }
    //create child element
    const child = `<div class="circle"></div>`;
    attachedCircle.forEach((el) => {
        el.innerHTML = child;
        el.classList.add("flex");
        trackCircleArray.push(el);
    });
};

//remove circle from elements
const undoCircle = function (circlesArray) {
    circlesArray.forEach((cur) => {
        cur.innerHTML = "";
        cur.classList.remove("circle");
    })
}