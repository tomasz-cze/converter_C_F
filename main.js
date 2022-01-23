const input = document.querySelector('.input');
const result = document.querySelector('.result');
const convertBtn = document.querySelector('.convert');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const spanOne = document.querySelector('.spanOne');
const spanTwo = document.querySelector('.spanTwo');

let cel;
let fahr;

const change = () => {
    if (spanOne.textContent === '°C') {
        spanOne.textContent = '°F';
        spanTwo.textContent = '°C';
    } else {
        spanOne.textContent = '°C';
        spanTwo.textContent = '°F';
    }
}

const celToFahr = () => {
    fahr = input.value * 1.8 +32;
    result.textContent= `${input.value}°C to ${fahr}°F`
}

changeBtn.addEventListener('click', change);
convertBtn.addEventListener('click', celToFahr);