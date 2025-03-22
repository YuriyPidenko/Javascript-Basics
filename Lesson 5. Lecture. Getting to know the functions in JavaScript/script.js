// function helloName(name) {
//     console.log(name);
// }
// helloName('Юра')

// let count = 5;

// function couner() {
//     return count++
// }

// couner();
// console.log(count);


// let age = Number(prompt('Сколько вам лет'));

// const lvlUpAge = () => {
//     return age + 5;
// }

// console.log(`Через пять лет вам будет ${lvlUpAge()}`);


// function hello() {
//     console.log('Hello fuction');
// }
// hello();

// const sum = (param1, param2) => {
//     return param1 + param2;
// }

// const result = sum(2, 5);
// console.log(result);


// const salary = (money) => {
//     money = money * 0.87;
//     return money * 0.75;
// }

// const userMoney = Number(prompt('Сколько ты зарабатываешь'));

// let moneyMonth = salary(userMoney);

// console.log(`Для расходов можно использовать ${salary(userMoney)}`);
// console.log(`На еду желательно потратить не более чем ${moneyMonth * 0.3}`);


// sayHello();
// hello2();

// function sayHello() {
//     alert('Привет');
// }


// const hello2 = () => {
//     alert('Hello 2')
// }

function sayHello() {
    alert('Привет');
    alert('Нажали на кнопку')
}


// let userAnswer = prompt('Зимой и летом одним цветом');

// if (userAnswer === 'елка') {
//     console.log('угадал');
// } else {
//     console.log('не угадал');
// }


function askQuestion(answer, question) {
    const userAnswer = prompt(question);

    if (userAnswer.toLowerCase() === answer) {
        console.log('угадал');
    } else {
        console.log('не угадал');
    }

}

function puzzle() {
    askQuestion('лук', 'Сидит дед во 100шуб одет, кто его раздевает тот слезы проливает');
    askQuestion('елка', 'Зимой и летом одним цветом')
}

// askQuestion('Лук', 'Сидит дед во 100шуб одет, кто его раздевает тот слезы проливает');
// askQuestion('елка', 'Зимой и летом одним цветом')