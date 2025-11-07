const inputValue = document.querySelector(`#inputValue`)
const fromUnitSelector = document.querySelector(`#fromUnit`)
const toUnitSelector = document.querySelector(`#toUnit`)
const convertButton = document.querySelector(`#convertButton`)
const resultValue = document.querySelector(`#resultValue`)

// Function to display the result in the UI
const renderResult = result => resultValue.textContent = (typeof result === 'number' && !isNaN(result)) ? result.toFixed(2) : '-';

// Function that takes the input value and selected units and performs the conversion
const processData = (value, fromUnit, toUnit) => {
    switch (`${fromUnit}-${toUnit}`) {
        case `meters-feet`:
            renderResult(value * 3.28084)
            break
        case `feet-meters`:
            renderResult(value / 3.28084)
            break
        case `kilometers-miles`:
            renderResult(value * 0.62137)
            break
        case `miles-kilometers`:
            renderResult(value * 1.60934)
            break
        default:
            renderResult(`-`);
            break
    }
}

// Function to read the users input and selected units
const parseData = () => {
    const value = parseFloat(inputValue.value) // Converts the input string to a floating-point number
    const fromUnit = fromUnitSelector.value
    const toUnit = toUnitSelector.value
    processData(value, fromUnit, toUnit)
}

inputValue.addEventListener(`keyup`, event => { if (event.key === `Enter`) parseData() })
convertButton.addEventListener(`click`, parseData)