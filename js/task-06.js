const input = document.querySelector('#validation-input')
input.addEventListener('input', onBorderColor)


function onBorderColor() {
const checkedValue = input.value.split('').length

     if (checkedValue == 0) {
        input.classList.remove('invalid')
        input.classList.remove('valid')
    }
    else if (checkedValue < input.getAttribute('data-length'))
    {
        input.classList.add('invalid')
        input.classList.remove('valid')}
 
    else if (checkedValue >= input.getAttribute('data-length')) {
        input.classList.replace('invalid', 'valid');
    }

}