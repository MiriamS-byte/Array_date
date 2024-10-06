console.log("Hello");

//in array putem avea mai multe feluri de date
//ar trebui sa aiba aceleasi tip de date
const fruits = ["apple", "pear", "grape", "lemon"];
console.log(fruits);

const fruitItem = fruits[0];
console.log(fruitItem);

const lastItem = fruits[fruits.length - 1];
console.log(lastItem);

//modificarea unui elem din array

fruits[1] = "orange";
console.log(fruits);

//adaugare de elem in array la sfarsit
const newFruit = "banana";
fruits.push(newFruit);
console.log(fruits);

//stergerea unui elem din array
//sterge ultimul elem din lista
fruits.pop();
console.log(fruits);

//sterge primul elem
fruits.shift();
console.log(fruits);

//adaugare la inceputul arrayului
fruits.unshift("cherry");
console.log(fruits);

//aflarea indexului unui elem
const indexOfCherry = fruits.indexOf("cherry");
console.log(indexOfCherry);
