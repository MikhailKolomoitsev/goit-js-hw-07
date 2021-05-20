const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulPicker = document.querySelector('.ingredients');
const makeListElements = (element => {
    const listEl = document.createElement('li');
    listEl.textContent = element;
    
    return listEl
    
})

const elements = ingredients.map(makeListElements)
console.log(elements);

ulPicker.append(...elements)