const btnMinus=document.querySelector('.js-decrement')
const btnAdd = document.querySelector('.js-increment')
const result = document.querySelector('.js-value')

let value = parseInt(result.textContent)

btnMinus.addEventListener('click', () => {
   service.decrement();
    service.update(result.value);
    
})

btnAdd.addEventListener('click', () => {
    service.increment();
    service.update(result.value);
})

const service = {
    counterValue: 0,

    decrement() {
        this.counterValue -= 1;
    },

    increment() {
        this.counterValue += 1;
    },

    update(ref) {
        result.textContent = service.counterValue;
    },
};