// const product = {
//     name: 'стол',
//     prise: 2000
// }

// let productSale = product;
// productSale.prise = 1500
// let productNew = product;
// productNew.text = 'lorem';
// console.log(productSale);
// console.log(product);
// console.log(productNew);


const product = {
    name: 'стол',
    prise: 2000,
    count: 2,
    userRegisred: true,
    reg: function () {
        this.userRegisred = true
    },
    countProduct: function () {
        if (this.count > 0) {
            console.log('Вы можите купить даный товар');
        } else {
            console.log('Даный товар закончился');
        }
    },
    buyPriduct: function () {
        if (this.userRegisred) {
            console.log('Товар к корзине');
        } else {
            console.log('Вам надо зарегистрироватся');
        }
    },
}

product.buyPriduct();