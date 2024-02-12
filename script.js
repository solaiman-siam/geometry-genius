let btn1 = document.getElementById("btn1");
// let input1 = document.getElementById("input-1");
// let input2 = document.getElementById("input-2");
// let display = document.getElementById('calculateDisplay')

// btn1.addEventListener("click", function () {
//   let input1Value = parseFloat(input1.value);
//   let input2Value = parseFloat(input2.value);
//   let calculate = 0.5 * input1Value * input2Value;
//   display.innerText = calculate
// });

function calculateRectangle() {
  let a = getFirstInput("rect-input1");
  let b = getSecondInput("rect-input2");
  let area = a * b;
  showDisplay("rectDisplay", area);
}

function calculateTriangle() {
  let a = getFirstInput("input-1");
  let b = getSecondInput("input-2");
  let area = 0.5 * a * b;
  showDisplay("calculateDisplay", area);
}

function calculateParalellogram() {
  let a = getFirstInput("paralellogram-input-1");
  let b = getSecondInput("paralellogram-input-2");
  let area = a * b;
  showDisplay("parallelogramDisplay", area);
}
function calculateRombous() {
  let a = getFirstInput("rombous-input-1");
  let b = getSecondInput("rombous-input-2");
  let area = 0.5 * a * b;
  showDisplay("rombousDisplay", area);
}
function calculatePentagon() {
  let a = getFirstInput("pentagon-input-1");
  let b = getSecondInput("pentagon-input-2");
  let area = 0.5 * a * b;
  showDisplay("pentagonDisplay", area);
}
function calculateEllipse() {
  let a = getFirstInput("ellipse-input-1");
  let b = getSecondInput("ellipse-input-2");
  let area = 3.14159265359 * a * b;
  showDisplay("ellipseDisplay", Number(area.toFixed(2)));
}

function getFirstInput(getId) {
  let rectInput1 = document.getElementById(getId);
  let value = parseFloat(rectInput1.value);
  return value;
}

function getSecondInput(getId) {
  let rectInput2 = document.getElementById(getId);
  let value = parseFloat(rectInput2.value);
  return value;
}

function showDisplay(getId, result) {
  let calc = document.getElementById(getId);
  calc.innerText = result;
}

btn1.addEventListener("click", function () {
  console.log("ab");
});
