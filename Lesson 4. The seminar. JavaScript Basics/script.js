// Задание 1 (тайминг 15 минут)
// let userAge = prompt('Введите ваш возраст');
// console.log(`Возраст пользователя ${userAge}`);

// let userName = prompt('Введите ваше имя');
// console.log(`Добро пожаловать на сайт ${userName}`);


// Задание 3 (тайминг 15 минут)
// let a = '2';
// let b = '3';
// let result = a + b;
// console.log(result);


// let numberA = Number(prompt('Введите первое число'));
// let numberB = Number(prompt('Введите второе число'));

// console.log(`Сумма числа равна ${numberA + numberB}
// Разность чисел равно ${numberA - numberB}
// Произведение чисел равно ${numberA * numberB}
// Частное чисел равно ${numberA / numberB}
// Остаток от деления чисел равен ${numberA % numberB} `);


// Задание 5 (тайминг 25 минут)
// 1. Пользователь с клавиатуры вводит число, Необходимо создать
// условный оператор который
// a. Выводит в консоль “Число больше 5”
// b. Выводит в консоль “Число меньше 5”
// c. Выводит в консоль “Число равно 5”
// let userNumber = Number(prompt('Введите число'));
// if (userNumber === 5) {
//     console.log('Чисо равно 5');
// } else if (userNumber > 5) {
//     console.log('Число больше 5');
// } else if (userNumber < 5) {
//     console.log('ЧИсло меньше 5');
// } else {
//     console.log('error');
// }

// 2. Даны переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.

// let test1 = 5;
// let test2 = 6;
// console.log((test1 === test2) ? 'Числа равны' : 'Числа не равны');

// 3. Пользовать с клавиатуры вводит 2 числа
// a. Необходимо найти какое из двух чисел минимальное

// let numberA = Number(prompt('Введите первое число'));
// let numberB = Number(prompt('Введите второе число'));
// console.log(Math.min(numberA, numberB));

// 4. Пользователь с клавиатуры вводит число, Проверьте, что данная
// переменная больше нуля и меньше 15.

let numberA = Number(prompt('Введите первое число'));

if (numberA < 15 && numberA > 0) {
    console.log('Ура');
} else {
    console.log('error');
}
