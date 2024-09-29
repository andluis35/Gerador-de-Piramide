const character = "|";
var rows = [];
var pyramid = document.getElementById("pyramid");
const pyramidSize = document.getElementById("pyramid-size");

function constructPyramid() {
    rows = [];
    for(let i = 1; i <= pyramidSize.value; i++) {
        rows.push(padRow(i, pyramidSize.value, character))
    }
    pyramid.textContent = drawPyramid();
    return;
}

function reverseConstructPyramid() {
    rows = [];
    for(let i = 1; i <= pyramidSize.value; i++) {
        rows.unshift(padRow(i, pyramidSize.value, character));
    }
    pyramid.textContent = drawPyramid();
    return;
}

function padRow(rowNumber, rowCount, character) {
    let blankSpace = " "
    return blankSpace.repeat(rowCount - rowNumber) + 
            character.repeat(2*rowNumber-1) + 
            blankSpace.repeat(rowCount - rowNumber);
}

function drawPyramid() {
    let result = "";
    for(const row of rows) {
        result = result + "\n" + row;
    }
    return result;
}

function normalOrder() {
    return constructPyramid();
}

function reverseOrder() {
    return reverseConstructPyramid();
}
