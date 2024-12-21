// Задание 1 (тайминг 20 минут)
//1
// let userName = prompt('Введите ваше имя')
// let lasrName = prompt('Введите фамилию')
// let userAge = prompt('Введите ваш возраст')

// function user(userNamew, lasrName, userAge) {
//     alert(`Привет ${userNamew} ${lasrName} с возрастом ${userAge}`)
// }

// user(userName, lasrName, userAge)

// 2
// function squaring(num) {
//     num = num ** 2
//     // num = Math.pow(num, 2);
//     console.log(num);
// }

// squaring(5)


// 3.
// function checkingNUmberPositiveNegative(num) {
//     if (num > 0) {
//         console.log('+++');
//     } else {
//         console.log('---');
//     }
// }

// checkingNUmberPositiveNegative(-3);
// checkingNUmberPositiveNegative(5);




// Задание 2 (тайминг 15 минут)
// 1.

function sumNumberThree(num1, num2, num3) {
    let result = 0;
    result = num1 + num2 + num3;
    console.log(result);
};
// 2.
let param1 = 1;
let param2 = 2;
let param3 = 3;

sumNumberThree(param1, param2, param3)

// Задание 3 (тайминг 15 минут)
// 1.
function squareRoot(num) {
    num = Math.sqrt(num);
    return num

}

let num3 = squareRoot(3);
let num4 = squareRoot(4);

console.log(num3 + num4);


// 2
function minNumber(num1, num2) {
    let = result = 0;
    result = Math.min(num1, num2);
    console.log(result);
}

minNumber(6, 2)

// Задание 4 (тайминг 25 минут)
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

function day(day) {
    switch (day) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресенье');
            break;
        default:
            console.log('error');
    }
}

day(5);
day(9);

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
