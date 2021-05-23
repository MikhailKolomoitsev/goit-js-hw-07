const btnMinus=document.querySelector('.js-decrement')
const btnAdd = document.querySelector('.js-increment')
const result = document.querySelector('.js-value')

let value = parseInt(result.textContent)

btnMinus.addEventListener('click', () => {
    value =value- 1
    result.textContent=value
    
})

btnAdd.addEventListener('click', () => {
    value =value+ 1
    result.textContent=value
})