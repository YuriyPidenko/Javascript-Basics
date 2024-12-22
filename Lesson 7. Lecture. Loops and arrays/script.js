// let count = 0;

// while (count < 3) {
//     console.log('hello');
//     count++
// }

// for (let i = 0; i < 3; i++) {
//     console.log('hello for');
// }

// for (let j = 0; j <= 2; j++) {
//     console.log(j);
// }

// let pass;
// let count = 0;
// do {
//     if (count >= 3) {
//         alert('Пароль неверный')
//     }

//     pass = Number(prompt('Введите пароль'));
//     count++
// } while (pass !== 234);




// const arr = [1, 2, 'hello', 55, 9];
// arr.push(5); // добавляем элемент
// console.log(arr);
// console.log(arr[2]);
// console.log(arr.length); // length - длина
// console.log(arr[arr.length - 1]); // последней элемент массива

// const user = [];
// const userName = prompt('Введите имя');

// user.push(userName);
// console.log(user);


// const numbers = [2, 3, 19, 15];

// console.log(`Запомни цифры ${numbers}`);

// console.log(numbers.pop()); // .pop - убирает последний элемент массива



const word = 'example';
const arrWord = word.split(''); // делаем слово в массив по буквам
const upWorld = arrWord.pop();
arrWord.push(upWorld.toLocaleUpperCase())
console.log(arrWord.join('')); // обеденили слово обратно 