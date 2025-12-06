// let count = 0;
// while (count < 3) {
//     console.log('Hello');
//     count++
// }



// for (let i = 0; i < 3; i++) {
//     console.log('Hello');

// }

// let pass;
// let count = 0;
// do {
//     pass = Number(prompt('Введите пароль'));
//     count++
//     if (count >= 3) {
//         alert('пароль неверный!')
//     }
// } while (pass !== 234);

// const arr = [1, 2, 'hello, 4, 5,'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

// const user = []
// const userName = prompt('Введите ваше имя');
// const userAge = prompt('возраст');
// user.push(userName);
// user.push(userAge);
// console.log(user);

// const numbers = [2, 3, 19, 15];
// console.log(`запомни цифры ${numbers}`);
// console.log(numbers.pop());
// console.log(numbers);

// const word = 'example';
// const arrWord = word.split('');
// const upWord = arrWord.pop();
// console.log();
// arrWord.push(upWord.toUpperCase());
// console.log(arrWord.join(''));



// const arr = [1, 2, 3, 4];

// arr.slice(0, 2);

// const arr = [1, 2, 3, 7, 19, 5, 13, 17];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element >= 5) {
//         console.log(element);
//     } else {
//         continue;
//     }
// }
// console.log(arr.indexOf('3'));


const arrAnswers = ['елка', 'ёлка', 'ель'];
const userAnswer = prompt('Зимой и летом одним цветом');

for (let i = 0; i < arrAnswers.length; i++) {
    const element = arrAnswers[i];
    if (element === userAnswer) {
        console.log('Молодец');
    } else {
        continue;
    }
}