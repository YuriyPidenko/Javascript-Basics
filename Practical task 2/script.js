// Задание 1
let num1 = Number(prompt('Введите число первое'));
let num2 = Number(prompt('Введите число второе'));

if (num1 <= 1) {
    alert(`${num1} Число равно или меньше 1`)
} else {
    alert('Что то не так!')
}

if (num2 >= 3) {
    alert(`${num2} Число больше или равно 3`)
} else {
    alert('Что то не так!')
}

// Задание 2
// Перепишите код к тернарному оператору

let test = true;
(test === true) ? console.log('+++') : console.log('---');



// Задание 3
let day = 14;

if (day <= 10) {
    console.log('Первая декада месяца');
} else if (day <= 20) {
    console.log('Второю декада месяца');
} else if (day <= 30) {
    console.log('Третья декада месяцв');
} else {
    console.log('что то пошло не так');
}


// Задание 4
let n = prompt('Введите число');

if (n.length >= 3) {
    let m = String(n).slice(n.length - 3, n.length);
    alert("В числе " + n + " количество сотен: " + m[0] + ", десятков: " + m[1] + ", единиц: " + m[2]);
} else if (n.length == 2) {
    alert("В числе " + n + " количество сотен: 0, десятков: " + n[0] + ", единиц: " + n[1]);
} else if (n.length == 1) {
    alert("В числе " + n + " количество сотен: 0, десятков: 0, единиц: " + n);
} else {
    alert("Ошибка!");
}