let btnMinus=document.querySelector('.decrement')
let btnAdd = document.querySelector('.increment')
let result = document.querySelector('.value')

let value = parseInt(result.textContent)

btnMinus.addEventListener('click', () => {
    value =value- 1
    result.textContent=value
    
})

btnAdd.addEventListener('click', () => {
    value =value+ 1
    result.textContent=value
})