// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени


// let a = 2;
// let b = 3;
// let result;
// function cubeNumber(number) {
//     result = Math.pow(number, 3)
//     return result;
// }

// console.log(cubeNumber(a));
// console.log(cubeNumber(b));
// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// let number = Number(prompt('Введите число'));
// let result;
// function deductionTaxes(number) {
//     if (Number.isFinite(number) === true) {
//         result = number * 0.87;
//         return result;

//     } else {
//         alert('упс что-то пошло не так');
//     }



// }
// deductionTaxes(number);
// alert(`Размер заработной платы за вычетом налогов равен ${result}`);


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
// let number1 = Number(prompt('Введите первое число'));
// let number2 = Number(prompt('Введите второе число'));
// let number3 = Number(prompt('Введите третье число'));
// let result;

// function maxNumber(num1, num2, num3) {
//     result = Math.max(num1, num2, num3)
//     return result;
// }
// maxNumber(number1, number2, number3)
// alert(`макс число ${result}`)

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return a > b ? a - b : (a < b ? b - a : 0);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : Infinity;
}


console.log(sum(2, 6));
console.log(difference(10, 5));
console.log(multiply(3, 4));
console.log(divide(5, 0));       