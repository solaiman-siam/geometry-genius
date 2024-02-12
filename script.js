let btn1 = document.getElementById("btn1");
let input1 = document.getElementById("input-1");
let input2 = document.getElementById("input-2");
let display = document.getElementById('calculateDisplay')

btn1.addEventListener("click", function () {
  let input1Value = parseFloat(input1.value);
  let input2Value = parseFloat(input2.value);
  let calculate = 0.5 * input1Value * input2Value;
  display.innerText = calculate
});


let rectInput1 = document.getElementById('rect-input1')
let rectInput2 = document.getElementById('rect-input2');
let rectBtn = document.getElementById('rect-btn');

rectBtn.addEventListener('click', () => {
    let input1Value = parseFloat(rectInput1.value)
    let input2Value = parseFloat(rectInput2.value);
    let calculateRect = input1Value * input2Value;
    console.log(calculateRect)
})