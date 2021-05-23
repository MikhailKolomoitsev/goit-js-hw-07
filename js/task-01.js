const categories = document.querySelectorAll('.item')

console.log(`В списке ${categories.length} категорий`);

categories.forEach(item => {
     console.log(
        `Категория:${item.firstElementChild.textContent}, 
Количество элементов: ${item.lastElementChild.children.length}`,
    )
})