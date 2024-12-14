// Задание 1
let num1 = Number(prompt('Введите число'));
let num2 = Number(prompt('Введите число'));

if (num1 <= 1) {
    console.log(`${num1} меньше или меньше 1`);
} else {
    console.log('erro');
};
if (num2 >= 3) {
    console.log(`${num2} больше или равно 3`);
} else {
    console.log('erro');
};


// Задание 2
let test = false;
console.log((test === true) ? '+++' : '---');


// Задание 3
let day = 13;
if (day <= 11) {
    console.log('Первая декада');
} else if (day <= 21) {
    console.log('Вторая декада');
} else if (day <= 31) {
    console.log('Третья декада');
} else {
    console.log('такого числа нету в месяце');
}


// Задание 4
// Получаем число от пользователя
let userInput = prompt("Введите положительное целое число:");
let number = parseInt(userInput, 10);

// Определяем количество сотен, десятков и единиц
let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let units = number % 10;

// Выводим результат
console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);