// function helloName(name) {
//     console.log(name);
// }
// helloName('alex');


// let count = 5;
// function couner() {
//     return count++;
// }

// couner();
// console.log(count);



// let age = Number(prompt('Сколько вам лет ?'));

// const lvlUpAge = () => {
//     return age + 5;
// }


// console.log(`через 5 лет вам будет ${lvlUpAge()}`);


// const slary = (money) => {
//     money = money * 0.87;
//     return money * 0.75;
// }

// console.log(slary(150));



// function sayHello() {
//     alert('Привет');
//     alert('Нажали на кнопку');
// }


function askQuestion(answer, question) {
    const userAnswer = prompt(question);

    if (userAnswer.toLowerCase() == answer) {
        alert('угадал');
    } else {
        alert('не угадал');
    }

}

function puzzle() {
    askQuestion('лук', 'Сидит дед во 100 шуб одет, кто его раздевае тот слезы проливает')
    askQuestion('елка', 'Зимой и летом одним цветом')
}