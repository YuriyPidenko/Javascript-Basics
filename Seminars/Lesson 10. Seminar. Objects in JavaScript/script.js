// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”
// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
// 4. Удалите свойство surname

// const { use } = require("react");

// const weekday = {
//     1: 'понедельник',
//     2: 'вторник',
//     3: 'среда ',
//     4: 'четверг',
//     5: 'пятница',
//     6: 'суббота',
//     7: 'воскресенье',
// };

// console.log(weekday[1]);


// const user = {
//     name: 'Юра',
//     surname: 'Пиденко',
//     age: '30',
// }

// console.log(`${user.surname}-${user.name}-${user.age}`);

// // user.lastname = prompt('Введите отчество');
// user.lastname = 'Юрий'
// delete user.surname
// console.log(user);

//  Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.
// 1. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const weekday = {};
// arr2.forEach((key, index) => { weekday[key] = arr1[index]; });

// console.log(weekday);

// const obj = { x: 1, y: 2, z: 3 };
// Object.values(obj).map(function (values) {
//     console.log(values * values);
// })


// Найдите сумму элементов приведенного объекта

const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

let sum = 0;

Object.values(obj).map(function (value) {
    Object.values(value).map(function (value) {
        sum = sum + value
    })
})

console.log(sum);


// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

const riddles = {
    question: 'who are you ?',
    answer: 'Vasya',
    counter: 0,
    askQuestion: function () {
        let enteredAnswer = prompt(riddles.question);
        if (enteredAnswer == this.answer) {
            console.log('you are right');
        } else {
            console.log('  you are NOT right');
            this.counter++;
            if (this.counter < 3) {
                this.askQuestion();
            }
        }
    }
}

riddles.askQuestion();