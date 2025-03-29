// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”
const weekday = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
}
console.log(weekday[2]);


// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
// 4. Удалите свойство surname
const user = {
    name: 'Юра',
    surname: 'Пиденко',
    age: 29,
}
console.log(user.name + '-' + user.surname + '-' + user.age);
user.patronymic = prompt('Введите отчество');
delete user.surname;
console.log(user);


// Задание 2 (тайминг 25 минут)
// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const res = {};
arr2.forEach((key, index) => {
    res[key] = arr1[index];
});
console.log(res);
// 1. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.
const obj = { x: 1, y: 2, z: 3 };
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        obj[key] = obj[key] ** 2;
    }
}
console.log(obj);



// Задание 3 (тайминг 15 минут)
// const obj = {
// key1: {
// key1: 1,
// key2: 2,
// key3: 3,
// },
// key2: {
// key1: 4,
// key2: 5,
// key3: 6,
// },
// key3: {
// key1: 7,
// key2: 8,
// key3: 9,
// },
// }

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// };

// function sumObjectElements(obj) {
//     let sum = 0;

//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const innerObj = obj[key];
//             for (const innerKey in innerObj) {
//                 if (innerObj.hasOwnProperty(innerKey)) {
//                     sum += innerObj[innerKey];
//                 }
//             }
//         }
//     }

//     return sum;
// }

// const totalSum = sumObjectElements(obj);
// console.log("Сумма элементов объекта:", totalSum); // Вывод: 45


// Найдите сумму элементов приведенного объекта.
// Задание 4 (тайминг 30 минут)
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

const riddles = {
    question: "Что это такое: сидит на дереве и кукует?",
    answer: "кукушка",
    hint1: "Это птица.",
    hint2: "Она известна своим голосом.",
    attempts: 3, // Количество попыток
    usedHints: 0, // Счетчик использованных подсказок

    askQuestion: function () {
        while (this.attempts > 0) {
            const userAnswer = prompt(this.question + ` (Осталось попыток: ${this.attempts})`);

            if (userAnswer && userAnswer.toLowerCase() === this.answer.toLowerCase()) {
                alert("Вы угадали!");
                return; // Выход из функции, если ответ верный
            } else {
                this.attempts--;
                if (this.attempts > 0) {
                    alert("Неверно! Попробуйте еще раз.");
                    this.giveHint(); // Предлагаем подсказку
                } else {
                    alert("Вы проиграли! Правильный ответ: " + this.answer);
                }
            }
        }
    },

    giveHint: function () {
        if (this.usedHints < 2) {
            if (this.usedHints === 0) {
                alert("Подсказка: " + this.hint1);
            } else if (this.usedHints === 1) {
                alert("Подсказка: " + this.hint2);
            }
            this.usedHints++;
        } else {
            alert("Больше нет подсказок!");
        }
    },
};

riddles.askQuestion(); // Запускаем игру