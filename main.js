const input = document.querySelector('.input')
const result = document.querySelector('.result')
const convertBtn = document.querySelector('.convert')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const spanOne = document.querySelector('.spanOne')
const spanTwo = document.querySelector('.spanTwo')

let cel
let fahr

const change = () => {
	if (spanOne.textContent === '°C') {
		spanOne.textContent = '°F'
		spanTwo.textContent = '°C'
	} else {
		spanOne.textContent = '°C'
		spanTwo.textContent = '°F'
	}
    resetFunc()
}

const celToFahr = () => {
	if (input.value === '') {
		result.textContent = ''
	} else {
		fahr = input.value * 1.8 + 32
		result.textContent = `${input.value}°C to ${fahr.toFixed(1)}°F`
		input.value = ''
	}
}

const fahrToCel = () => {
	cel = (input.value - 32) / 1.8
	result.textContent = `${input.value}°F to ${cel.toFixed(1)}°C`
	input.value = ''
}
const mainConvert = () => {
    if (spanOne.textContent === '°C') {
    celToFahr()
    } else {
        fahrToCel ()
    }
}

const resetFunc = () => {
	cel = 0
	fahr = 0
	result.textContent = ''
}

changeBtn.addEventListener('click', change)
convertBtn.addEventListener('click', mainConvert)
resetBtn.addEventListener('click', resetFunc)
