// адание 1 (тайминг 20 минут)
// Текст задания
// 1. Написать функцию, которой передаем, имя, фамилия и
// возраст, и получаем строку "Привет Иван Петров с
// возрастом 17" (только здесь данные, которые были
// переданы в функцию)
const userName = 'Юра';
const lastName = 'Пиденко'
const userAge = 29;

function user(userName, lastName, userAge) {
    console.log(`Привет ${userName} ${lastName} с возрастом ${userAge}`);
}
user(userName, lastName, userAge);


// 2. Создайте функцию которая возводит переданное число в
// квадрат
function squaring(num1, num2) {
    let result = num1 * num2;
    console.log(result);
}

squaring(2, 2);


// 3. Сделайте функцию, которая параметром принимает
// число и проверяет, положительное это число или
// отрицательное. В первом случае пусть функция выводит
// в консоль текст '+++', а во втором '---'.

function checkingPositiveNegative(number) {
    if (number >= 0) {
        console.log('+++');
    } else if (number < 0) {
        console.log('---');
    }
}

checkingPositiveNegative(-1)


// Задание 2 (тайминг 15 минут)
// 1. Сделайте функцию, которая параметрами принимает 3 числа и
// выводит в консоль сумму этих чисел.
function sumNumbers(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
// 2. С помощью созданной вами функции выведите в консоль сумму
// значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;

sumNumbers(param1, param2, param3)

// 1. Дана фукнция
// function func(num = 5) {
// console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции.
// func(2);
// func(3);
// func();


// Задание 3 (тайминг 15 минут)
// 1. Сделайте функцию, которая параметром принимает число, а
// возвращает квадратный корень из этого числа. С помощью этой
// функции найдите корень числа 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и выведите их в консоль.
function squareRoot(number) {
    console.log(Math.sqrt(number));
}

squareRoot(3)
squareRoot(4)

// 2. Создайте функцию, которая находит минимальное число из 2х
// передаваемых аргументов функции
function minimumNumberTwo(num1, num2,) {
    console.log(Math.min(num1, num2));
}
minimumNumberTwo(4, 1);
// Задание 4 (тайминг 25 минут)
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.
// 2. Написать функцию, которой передаем имя и она возвращает
// приветствие в зависимости от времени суток (Доброе
// утро\день\вечер\ночи Иван)
function greetByTimeOfDay(name) {
    const currentHour = new Date().getHours(); // Получаем текущий час

    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Доброе утро';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Добрый день';
    } else if (currentHour >= 18 && currentHour < 23) {
        greeting = 'Добрый вечер';
    } else {
        greeting = 'Доброй ночи';
    }

    return `${greeting}, ${name}!`;
}

console.log(greetByTimeOfDay("Юра"));
