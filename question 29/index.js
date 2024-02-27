/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

*/
let favorite_fruits = [
    "Banana",
    "Apple",
    "Watermelon",
    "Kiwi",
    "Mango"
];
// First statement
let a = favorite_fruits.includes("Banana");
if (a) {
    console.log("I love banana");
}
else {
    console.log("Let's Buy banana");
}
//  second statement
let x = favorite_fruits.includes("Kiwi");
if (x) {
    console.log("I like kiwi");
}
else {
    console.log("Let's buy kiwi");
}
// Third statement
let y = favorite_fruits.includes("grapes");
if (y) {
    console.log("I like grapes");
}
else {
    console.log("Let's buy grapes");
}
// Fourth statement
let p = favorite_fruits.includes("Mango");
if (p) {
    console.log("i like Mango");
}
else {
    console.log("lets buy Mango");
}
// Fifth statement
let z = favorite_fruits.includes("Apple");
if (z) {
    console.log("Apple is yummy!");
}
else {
    console.log("Lets buy Banana");
}
export {};
