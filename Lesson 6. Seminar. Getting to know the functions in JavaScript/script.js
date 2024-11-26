// Задание 1

//1
// let userName = prompt('Введите ваше имя');
// let userLast = prompt('Введите вашу фамилию');
// let userAge = prompt('Введите ваш фозраст')

// function userHello(name, lastName, age) {
//     console.log(`Привет ${name} ${lastName} с возрастом ${age}`);
// }

// alert(userHello(userName, userLast, userAge))


//2
// let number = Number(prompt('Введите число для возведения в квадрат'));

// function squaringNumber(number) {
//     number = number * number
//     alert(number);
// }

// squaringNumber(number);

// 3
// let num = Number(prompt('Введите число для проверки отрецательное или положительное'))

// function checkingNumber(number) {
//     if (number >= 0) {
//         alert(`Число положительное`)
//     } else {
//         alert('Число отрецательное')
//     }
// }

// checkingNumber(num)



// Задание 2 (тайминг 15 минут)
// 1.
// function summaNumber(num, num1, num2) {
//     let result = num + num1 + num2;
//     alert(`сума трех числе равна ${result}`)
// };
// 2.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// summaNumber(param1, param2, param3);


// Задание 3
// 1.
// let num = 3;
// let num1 = 4;
// let resultSquareRoot;

// function squareRoot(num) {
//     result = Math.sqrt(num);
//     return result;
// }

// num = squareRoot(num);
// console.log(num);

// num1 = squareRoot(num1);
// console.log(num1);

// const amountNumber = num + num1;
// console.log(amountNumber);


// 2.
// let num1 = Number(prompt('Введите число первое'));
// let num2 = Number(prompt('Введите число второе'));
// function minNamber(num1, num2) {
//     let result = Math.min(num1, num2);
//     console.log(result);
// }

// minNamber(num1, num2);


// Задание 4 (тайминг 25 минут)
// 1. 
function weeks(day) {
    if (day === 1) {
        console.log('Пн');
    } else if (day === 2) {
        console.log('Вт');
    } else if (day === 3) {
        console.log('Ср');
    } else if (day === 4) {
        console.log('Чт')
    } else if (day === 5) {
        console.log('Пт');
    } else if (day === 6) {
        console.log('Сб');
    } else if (day === 7) {
        console.log('Вс');
    } else {
        console.log('Вывели не то число ')
    }
}

let day = Number(prompt('Ведите день недели числом'))
weeks(day)

// 2.

function setTime(name, time) {
    if (12 > time >= 4) {
        console.log(`Доброе утро ${name}`);
    } else if (20 > time >= 12) {
        console.log(`Добрый день ${name}`);
    } else if (23 > time >= 20) {
        console.log(`Добрый вечер ${name}`);
    } else {
        console.log(`Доброй ночи ${name}`);
    }
}


