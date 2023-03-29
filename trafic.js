const red = document.querySelector('#red')
const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')
let colorIndex = 0
const buttons = document.querySelector('.buttons')
let intervalId = null;

const resetColor = () => {
    red.style.background = 'rgba(86, 33, 33, 0.909)';
    yellow.style.background = 'rgba(83, 86, 33, 0.909)';
    green.style.background = 'rgba(44, 86, 33, 0.909)';
}
const trafficLight = (event) => {
    resetColor()
    stopAutomatic()
    turnOn[event.target.id]();
    
}

const nextIndex = () => {
    if (colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0;
    }
}

const automatic = () => {
    resetColor()
    const colorButtons = ['red-button','yellow-button','green-button']
    const color = colorButtons[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval(intervalId)
}

const turnOn = {
    'red-button': () => red.style.background = 'red',
    'yellow-button': () => yellow.style.background = 'yellow',
    'green-button': () => green.style.background = 'rgb(13, 179, 13)',
    'automatic-button': () => intervalId = setInterval(automatic, 2000)
}

buttons.addEventListener( 'click', trafficLight );