// Задание 1 (тайминг 20 минут)


// const number = [1, 2, 3];
// console.log(number[0]);
// console.log(number[1]);
// console.log(number[2]);


// const arrRandom = [12, 44, 'dsd', 331, 'Привет Мир!!', 444];
// console.log(arrRandom.length);

// const arr = ['a', 'b', 'c'];
// arr.splice(0, 1, 1);
// arr.splice(1, 1, 2);
// arr.splice(2, 1, 3);
// console.log(arr);



// Задание 2 (тайминг 15 минут)
// const arrNumber = [1, 2, 3];
// for (let i = 0; i < arrNumber.length; i++) {
//     arrNumber[i]++;
// }
// console.log(arrNumber);

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);


// const arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);

// console.log(arr);


// const arrNumber = [1, 2, 3, 4, 5];
// arrNumber.pop(4)
// arrNumber.pop(3)

// console.log(arrNumber);

// Задание 3 (тайминг 25 минут)

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }


// for (let i = 1; i <= 99; i = i + 2) {
//     console.log(i);
// }


// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }



// let num = 1.1;
// let i = 0;
// while (num < 1000) {
//     num = num * 3;
//     i++
// }

// console.log(i, num);




// Задание 4 (тайминг 25 минут)
// 1. Дан массив
// Выведите в консоль те элементы массива, которые больше 3-х, но
// меньше 10.
// const arr = [2, 5, 9, 15, 1, 4];
// arr.map(value => {
//     if (value > 3 && value < 10) {
//         console.log(value);
//     }
// })

// const arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// arr.forEach(function (value) {
//     sum = sum + value
// });

// console.log(sum);


// let str = '-';
// for (let i = 1; i <= 9; i++) {
//     str = str + i + '-';
// }
// console.log(str);


// const arr = [2, 5, 9, 0, 3, 1, 4];
// let i = 0;

// while (arr[i] !== 0 && i < arr.length) {
//     console.log(arr[i]);
//     i++
// }


// Задание 5 (тайминг 25 минут)

// const arr = [2, 5, 9, 10, 3, 1, 4];
// const arrNew = arr.map(value => {
//     return value % 2 === 0 ? Math.pow(value, 2) : (value % 3 === 0 ? Math.pow(value, 3) : value);
// });

// console.log(arrNew);

// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// arr.forEach(value => {
//     if (value === 3) {
//         count++
//     }
// });

// console.log(count);

const arr = [1, 2, 3, 4, 5]

arr.splice(1, 2);
console.log(arr);
