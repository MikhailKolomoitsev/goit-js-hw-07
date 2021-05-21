const nameInput = document.querySelector('#name-input')
const nameOutput=document.querySelector('#name-output')
nameInput.addEventListener('input', onNameInput)

function onNameInput() {
    nameInput.value === '' ?
        nameOutput.textContent = 'незнакомец':
        nameOutput.textContent = nameInput.value
}

