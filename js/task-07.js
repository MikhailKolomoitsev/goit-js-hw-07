const fontSizeController = document.querySelector('#font-size-control')
const resultText = document.querySelector('#text')

fontSizeController.addEventListener('input', function () {
    resultText.style.fontSize = fontSizeController.value + 'px'
})
