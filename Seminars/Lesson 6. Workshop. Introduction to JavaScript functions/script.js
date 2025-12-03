// Задание 1(тайминг 20 минут)
// Текст задания
// 1. Написать функцию, которой передаем, имя, фамилия и
// возраст, и получаем строку "Привет Иван Петров с
// возрастом 17" (только здесь данные, которые были
// переданы в функцию)
// 2. Создайте функцию которая возводит переданное число в
// квадрат
// 3. Сделайте функцию, которая параметром принимает
// число и проверяет, положительное это число или
// отрицательное.В первом случае пусть функция выводит
// в консоль текст '+++', а во втором '---'.


// let name = prompt('Введите ваше имя');
// let lastName = prompt('Введите фамилию');
// let age = prompt('Введите возраст');
// function nameAge(name, lastName, age) {
//     alert(`Привет ${name} ${lastName} с возрастом ${age}`)
// }

// nameAge(name, lastName, age);


// let numA = 5;
// let result;
// function sum(num) {
//     result = num * num;
//     return result;
// }
// sum(numA)
// console.log(result);

// function positiveNumber(number) {
//     if (number > 0) {
//         console.log('+++');
//     } else {
//         console.log('---');
//     }

// }

// positiveNumber(numA)

//  Сделайте функцию, которая параметрами принимает 3 числа и
// выводит в консоль сумму этих чисел.
// 2. С помощью созданной вами функции выведите в консоль сумму
// значений этих переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// 1. Дана фукнция
// function func(num = 5) {
// console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции.
// func(2);
// func(3);
// func();

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// let result;

// function sum (param1, param2, param3) {
//     result = param1 + param2 + param3
//     return result
// }

// console.log(sum(param1, param2, param3));


// Задание 3 (тайминг 15 минут)
// 1. Сделайте функцию, которая параметром принимает число, а
// возвращает квадратный корень из этого числа. С помощью этой
// функции найдите корень числа 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и выведите их в консоль.
// 2. Создайте функцию, которая находит минимальное число из 2х
// передаваемых аргументов функции

// let a = Number(prompt('Введите число'))
// const a = 3;
// const b = 4;
// let result;
// function rootNumber(num) {
//     result = Math.sqrt(num);
//     return result;
// }

// console.log(rootNumber(a));
// console.log(rootNumber(b));


// function minNamber(num1, num2) {
//     result = Math.min(num1, num2)
//     return result
// }

// minNamber(a, b);

// console.log(`Минимальео число и 2 будет ${result}`);


// Задание 4 (тайминг 25 минут)
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.
// 2. Написать функцию, которой передаем имя и она возвращает
// приветствие в зависимости от времени суток (Доброе
// утро\день\вечер\ночи Иван)

let day = Number(prompt('Введите число от 1 до 7'));
function dayWeek(day) {
    switch (day) {
        case 1: alert('Понедельник'); break;
        case 2: alert('Вторник'); break;
        case 3: alert('Среда'); break;
        case 4: alert('Четверг'); break;
        case 5: alert('Пятница'); break;
        case 6: alert('Суббота'); break;
        case 7: alert('Воскресенье'); break;
    }
    return day;
}

dayWeek(day);

function getGreeting(name) {
    const hours = new Date().getHours();

    let timeOfDay;
    if (hours >= 6 && hours < 12) {
        timeOfDay = 'утро';
    } else if (hours >= 12 && hours < 18) {
        timeOfDay = 'день';
    } else if (hours >= 18 && hours < 23) {
        timeOfDay = 'вечер';
    } else {
        timeOfDay = 'ночи';
    }
    return `Доброе ${timeOfDay} ${name}`;
}

console.log(getGreeting('Юра')); 