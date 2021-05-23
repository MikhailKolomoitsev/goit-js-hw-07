const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulPicker = document.querySelector('.ingredients');

const elements = ingredients.map(element => {
    const listEl = document.createElement('li');
    listEl.textContent = element;
    
    return listEl
    
})
console.log(elements);
ulPicker.append(...elements)

// const makeListElements = (element => {
//     const listEl = document.createElement('li');
//     listEl.textContent = element;
    
//     return listEl
    
// })