// Задание 1

// const arrNumber = [1, 2, 3]
// arrNumber.forEach(value => {
//     console.log(value);
// })



// const arr = [4, 67, 754, 'hello', 'world']
// console.log(arr.length);

// const arrAbc = ['a', 'b', 'c']
// arrAbc[0] = 1
// arrAbc[1] = 2
// arrAbc[2] = 3
// console.log(arrAbc);


// Задание 2
// const arr = [1, 2, 3,]
// for (let i = 0; i < arr.length; i++) {
//     arr[i]++
// }

// console.log(arr);


// const arrNumber = [1, 2, 3];
// arrNumber.push(4)
// arrNumber.push(5)
// console.log(arrNumber);

// const arrNumber1 = [1, 2, 3, 4, 5];
// arrNumber1.pop()
// arrNumber1.pop()
// console.log(arrNumber1.length);


// Задание 3
// for (let i = 11; i < 34; i++) {
//     console.log(i);

// }

// for (let j = 1; j < 100; j = j + 2) {
//     console.log(j);

// }

// for (let l = 100; l > 101; l--) {
//     console.log(l);
// }

// let num = 15;
// let i = 0;
// while (num < 1000) {
//     num = num * 3
//     i++
// }
// console.log(i, num);


// Задание 4
// const arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i]
//     if (element >= 5) {
//         console.log(element);
//     } else {
//         continue;
//     }
// }

// let sum = 0
// for (let i = 2; i <= 100; i = i + 2) {
//     sum = sum + i
// }

// console.log(sum);



// const arrNumber = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// arrNumber.forEach(function (value) {
//     sum = sum + value
// })

// console.log(sum);

// let str = '';

// for (let i = 1; i <= 9; i++) {
//     str = str + i + '-';
// }
// console.log(str);


// const arrNum = [2, 5, 9, 0, 3, 1, 4];
// let curElement = null;
// let i = 0;
// while (arrNum[i] !== 0 && i < arrNum.length) {
//     console.log(arrNum[i]);
//     i++
// }


// Задание 5
const arrNum = [2, 5, 9, 10, 3, 1, 0];
const arrNew = arrNum.map(value => {
    return value % 2 === 0 ? Math.pow(value, 2) : (value % 3 === 0 ? Math.pow(value, 3) : value);
})

console.log(arrNew);

const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count = 0
arr.forEach(value => {
    if (value === 3) {
        count++;
    }
});
console.log(count);

const arrNumber = [1, 2, 3, 4, 5];
arrNumber.splice(1, 2)
console.log(arrNumber);