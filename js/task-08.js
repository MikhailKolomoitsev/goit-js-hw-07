const controls = document.querySelector('#controls')
const input = document.querySelector('#controls input')
const renderBox= document.querySelector('button[data-action="render"]');
const destroyBox = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes')

function makeRandomRgbColor() {
    const rgbNumber = () => Math.floor(Math.random() * 256);
    const r = rgbNumber();
    const g = rgbNumber();
    const b = rgbNumber();
    return `rgb(${r}, ${g}, ${b})`;
}
  


const removeBoxes = () => {
    // input.value = '';
    boxes.innerHTML = '';
}
const removeBoxesWithValue = () => {
    input.value = '';
    boxes.innerHTML = '';
}

const createBoxes = () => {
    for (let i = 0; i < input.value; i+=1){
        const baseSize = 30;
        const biggerSize = baseSize + i * 10;
        const box = document.createElement('div');
        box.setAttribute(
            'style',
            `width: ${biggerSize}px; height: ${biggerSize}px; background-color: ${makeRandomRgbColor()}`,);
        boxes.append(box)
    
    }
}
input.addEventListener('input', removeBoxes)
renderBox.addEventListener('click', createBoxes)
destroyBox.addEventListener('click', removeBoxesWithValue)