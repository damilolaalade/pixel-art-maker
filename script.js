// create variables for all ids
const colorPicker = document.getElementById("colorPicker");
const rowsNumber = document.getElementById("inputHeight");
const cellsNumber = document.getElementById("inputWidth");
const pixelCanvas = document.getElementById("pixelCanvas");
const sizePicker = document.getElementById("sizePicker");

//color click function
colorPicker.addEventListener("click", function () {});

// Select size input
// When size is submitted by the user, call makeGrid()
sizePicker.onsubmit = function (e) {
  e.preventDefault();
  makeGrid();
};

// handles loop for height and width of rows and columns
function makeGrid() {
  // Your code goes here!
  for (let r = 0; r < rowsNumber.value; r++) {
    const row = pixelCanvas.insertRow(r);
    for (let c = 0; c < cellsNumber.value; c++) {
      const cell = row.insertCell(c);
      cell.addEventListener("click", fillSquare);
    }
  }
}

// Select color input
function fillSquare() {
  this.setAttribute("style", `background-color: ${colorPicker.value}`);
}
