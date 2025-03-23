// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function cubing(num) {
    console.log(Math.pow(num, 3));
}

cubing(2);
cubing(3);
// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
function checkInput() {
    let input = prompt('Введите число:');
    if (isNaN(input) || input.trim() === '') {
        console.log('Значение задано неверно');
    } else {
        console.log('Введенное число:', Number(input));
    }
}
checkInput();

function deductionTaxes(num) {
    num = num * 0.87;
    console.log(`Размер заработной платы за вычетом налогов равен значение ${num}`);
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
// let num1 = Number(prompt('введите первое число'));
// let num2 = Number(prompt('введите второе число'));
// let num3 = Number(prompt('введите третье число'));

// function maxNumber(num1, num2, num3) {
//     let result = Math.max(num1, num2, num3);
//     console.log(`максемальное число из трех веденых ${result}`);
// }

// maxNumber(num1, num2, num3);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
let num = Number(prompt('Введите число'));
let num2 = Number(prompt('Введите число'));

function sum(num, num2) {
    return num + num;
}

const addition = (num1, num2) => num1 + num2;
const difference = (num1, num2) => {
    if (num1 === num2) return 0;
    return (num1 > num2) ? num1 - num2 : num2 - num1;
}
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

console.log(addition(2, 7));
console.log(difference(2, 7));
console.log(difference(7, 2));
console.log(difference(7, 7));
console.log(multiplication(2, 7));
console.log(division(10, 5));