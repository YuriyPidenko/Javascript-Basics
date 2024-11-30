// Задание 1
// const day = {
//     1: 'ПН',
//     2: 'ВН',
//     3: 'СР',
//     4: 'ЧТ',
//     5: 'ПТ',
//     6: 'СБ',
//     7: 'ВС',
// }

// console.log(day[2]);

// const fio = {
//     userName: 'Юра',
//     surName: 'Пиденко',
//     age: 23,
// }

// console.log(`${fio.surName} - ${fio.userName} - ${fio.age}`);
// fio.userLast = prompt('Ведите отчество')
// console.log(fio);
// delete fio.surName
// console.log(fio);


// Задание 2
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const obj = {};
// for (let i = 0; i < 7; i++) {
//     obj[arr1[i]] = arr2[i];
// }
// console.log(obj);


// const objNum = { x: 1, y: 2, z: 3 };
// Object.values(objNum).map(function (values) {
//     console.log(values * values);
// });


//Задание 3

// const obj1 = {
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
// }

// let sum = 0;
// Object.values(obj1).map(function (values) {
//     Object.values(values).map(function (values) {
//         sum = sum + values
//     })
// })
// console.log(sum);

// 4

const riddles = {
    question: 'who are you ?',
    answer: 'Vasya',
    counter: 0,
    askQuestion: function () {
        let enteredAnswer = prompt(this.question);
        if (enteredAnswer === this.answer) {
            console.log('You are right')
        } else {
            console.log('You are NOT right');
            this.counter++;
            if (this.counter < 3) {
                this.askQuestion();
            }
        }
    }
}

riddles.askQuestion();