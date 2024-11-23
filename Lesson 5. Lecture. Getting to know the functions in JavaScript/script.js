// console.log('hello script js');

// function helloName(name) {
//     console.log(name);
// }

// helloName('Юра')


// let count = 5;
// function couner() {
//     return count++;

// }

// couner();
// console.log(count);

// let age = Number(prompt('Сколько вам лет ?'));
// const lvUpAge = () => {
//     return age + 5;
// }

// console.log(`Черех 5 лет вам будет ${lvUpAge()}`);


// const salary = (money) => {
//     money = money * 0.87;
//     return money * 0.75;
// }

// const userMoney = 3000;

// console.log(salary(userMoney));

// function sayHello() {
//     alert('Hello');
//     alert('klick');
// };



function askQuestion(answer, question) {
    let userAnswer = prompt(question);

    if (userAnswer.toLowerCase() === answer) {
        console.log('угадал');
    } else {
        console.log('Не угадал');
    }

}

function puzzle() {
    askQuestion('лук', 'сидит дед во 100 шуб одеть, кто его раздевает тот слезы проливает')
    askQuestion('елка', 'Зимой и летов одним цветом')
}

