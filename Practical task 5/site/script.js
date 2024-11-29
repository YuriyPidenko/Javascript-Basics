// task 1
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

const filteredNumbers = Object.values(numbers).filter(value => value >= 3);
filteredNumbers.forEach(value => console.log(value));

//task 2

const post = {
    author: "John",
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2,
            },
        },
        {
            userId: 5,
            userName: "Jane",
            text: "lorem ipsum 2",
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//task 3

// const products = [
//     { id: 3, price: 200 },
//     { id: 4, price: 900 },
//     { id: 1, price: 1000 },
// ];

// products.forEach(product => {
//     product.price -= product.price * 0.15; // Уменьшаем цену на 15%
// });

// console.log(products);

//task 4

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];


const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
console.log("Продукты с фотографиями:", productsWithPhotos);


const sortedProducts = products.sort((a, b) => {
    return (a.price || 0) - (b.price || 0);
});

//task 5 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const daysObject = {};
en.forEach((day, index) => {
    daysObject[day] = ru[index];
});

console.log("Объединенные дни недели:", daysObject);