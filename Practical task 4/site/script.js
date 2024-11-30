//Задание 1
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + " – это ноль");
    } else if (i % 2 === 0) {
        console.log(i + " – четное число");
    } else {
        console.log(i + " – нечетное число");
    }
}

//Задание 2
let arrNumber = [1, 2, 3, 4, 5, 6, 7];
arrNumber.splice(3, 2)
console.log(arrNumber);

//Задание 3

const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));

const sum = randomArray.reduce((accumulator, current) => accumulator + current, 0);
console.log("Сгенерированный массив:", randomArray);
console.log("Сумма элементов массива:", sum);


const min = Math.min(...randomArray);
console.log("Минимальное число в массиве:", min);


const hasThree = randomArray.includes(3);
console.log("Есть ли число 3 в массиве?", hasThree ? "Да" : "Нет");

//*Необязательное задание. *
for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}
