// let count = 0
// while (count < 3) {
//     console.log('Hello')
//     count++
// }

// for (let i = 0; i < 3; i++) {
//     console.log('Hello');
// }

// for (let j = 0; j <= 2; j++) {
//     console.log(j);
// }



// let pass;
// let count = 0;
// do {
//     if (count >= 3) {
//         alert('Пароль не верный')
//     }
//     pass = Number(prompt('Введите пароль'));
//     count++;
// } while (pass !== 123);


// const user = [];

// const userName = prompt('Ваше имя')
// const userAge = prompt('Ваш возраст')
// user.push(userName)
// user.push(userAge)
// console.log(user);


// const numbers = [2, 3, 19, 15]

// alert(`Запомните цифры ${numbers}`)
// // numbers[numbers.length - 1]
// console.log(numbers.pop());
// console.log(numbers);



// const word = 'example';
// const arrWord = word.split('')
// // console.log(word.split(''));
// console.log(arrWord.pop());
// const upWord = arrWord.pop()
// console.log(upWord.toLocaleUpperCase());
// // console.log(arrWord.pop().toUpperCase());
// console.log(arrWord.join(','));



// const arr = [1, 2, 3, 7, 19, 7, 13, 3]

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i]
//     if (element >= 5) {
//         console.log(element);
//     } else {
//         continue;
//     }
// }

// console.log(arr.indexOf('3'));




const arrAnswers = ['елка', 'ёлка', 'ель']
const userAnswer = prompt('Зимой и летом одноим цветом')

for (let i = 0; i < arrAnswers.length; i++) {
    const element = arrAnswers[i];
    if (element === userAnswer) {
        console.log('Молодец');
        break
    } else {
        console.log('не угадал');
    }
}