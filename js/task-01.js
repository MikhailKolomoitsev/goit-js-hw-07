/*Example1*/
// function getObjectDepth(object){
//      if (typeof object !== "object" || object === null) {
//         return 0;
//     }

//     let values = Object.values(object);
//     // console.log(...values);

//     return (values.length && Math.min(...values.map(value => {
//         // console.log(value);
//         return getObjectDepth(value)
//     }))) + 1;
// }


// let testRy = [1, 2, [3, 4, [5, 6], 7, [8, [9, 91]], 10], 11, 12]
// let testObj = { re: { b: 1, alt: 2 } }
// let test3 = { a: { b: { c: "z" } } }

// console.log(getObjectDepth(testRy));

// function maxDepth(obj) {
//     const parsed = JSON.stringify(obj)
//     const result = [...parsed].filter(el=>el==='{'||el==='[').length
//     console.log(result);
//     return result
// }
// maxDepth(test3)



/*Example2*/
// function howMuchArgs() {
//     console.log(arguments);
//     let result=arguments.length
//     return result
// }
// let a=1
// let b=2
// let c=3
// let d=4

// console.log(howMuchArgs(a));
// console.log(howMuchArgs(a, b));
// console.log(howMuchArgs(a, b, c));
// console.log(howMuchArgs(1,b,3,d));
// console.log(howMuchArgs(1,b,3,d, null));
// console.log(howMuchArgs(1,b,3,d, null, undefined));
// console.log(howMuchArgs(1,b,3,d, null, undefined, false));

/*Example3*/

// function revertNumber(number) {
//     let string=number.toString()
//     let result = [...string].sort((a, b) => b - a).join('')
//     return +result
// }
// console.log(revertNumber(129429));
// revertNumber(212312)
// revertNumber(13289)
// revertNumber(2831791)

/*Example4 -написать аналог bind , 
который принимает args, 
context, function(не успел придумать за 10 мин)*/

// function bind(args, context, func) {
//     return
// }



// const categories = document.querySelectorAll('.item')

// console.log(`В списке ${categories.length} категорий`);

// categories.forEach(item => {
//      console.log(
//         `Категория:${item.firstElementChild.textContent},
// Количество элементов: ${item.lastElementChild.children.length}`,
//     )
// })

// function moveZeroes(nums) {
//     let numZero=0
//     for (let num of nums) {
//         if (num === 0) {
//             numZero+=1
//         }
//     }
//     let addArr = []
//     for (let i = 0; i <= numZero; i++){
//         addArr[i]=0
//     }


//     return nums.filter(el => el !== 0).concat(addArr)
// };
// console.log(moveZeroes([0, 1, 0, 3, 12]))

// const array = [
//     { color: 'white', id: 2 },
//     { color: 'black', id: 3 },
//     { color: 'black', id: 500 }
// ];

// const result = array.reduce((acc, item) => {
//     if (acc[item.color]) {
//         acc[item.color] = { ...acc[item.color], [`${item.id}`]: item }
//         return acc
//     } else {
//         acc[item.color] = { [`${item.id}`]: item }
//         return acc
//     }
// }, {});

// console.log(result)

// output = {
//     'white': {
//         '2': { color: 'white', id: 2 },
//     },
//     'black': {
//         '3': { color: 'black', id: 3 },
// ‘500’: { color: ‘black’, id: 500 }
// }
// }
const errors = {};
errors.name = 'You forgot your name.';
console.log(errors);
