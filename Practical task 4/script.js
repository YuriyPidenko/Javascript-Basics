// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} – это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} – четное число`);
    } else {
        console.log(`${i} – нечетное число`);
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2); // Начинаем с индекса 3, удаляем 2 элемента (4 и 5)
// console.log(arr); // Вывод: [1, 2, 3, 6, 7]

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let newArr = arr.filter((element, index) => index < 3 || index > 4);
// console.log(newArr); // Вывод: [1, 2, 3, 6, 7]

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (i < 3 || i > 4) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr); // Вывод: [1, 2, 3, 6, 7]

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
// 1. Создаем массив из 5 случайных чисел от 0 до 9
const array = [];
for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 10)); // Math.random() * 10 дает число от 0 до 9.999..., Math.floor округляет вниз до целого
}

console.log("Сгенерированный массив:", array);

// 2. Рассчитываем сумму элементов массива
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }

// console.log("Сумма элементов массива:", sum);

//  3. Находим минимальное число
// let min = array[0]; // Предполагаем, что первый элемент - минимальный
// for (let i = 1; i < array.length; i++) {
//   if (array[i] < min) {
//     min = array[i];
//   }
// }

// console.log("Минимальное число в массиве:", min);

//  4. Проверяем, есть ли в массиве число 3
// let hasThree = false;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 3) {
//     hasThree = true;
//     break; // Если нашли 3, выходим из цикла
//   }
// }

// if (hasThree) {
//   console.log("В массиве есть число 3");
// } else {
//   console.log("В массиве нет числа 3");
// }


// Необязательное задание.
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx
