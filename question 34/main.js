/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
// First version
var pizza = [
    "pepperoni pizza",
    "Chicken pizza",
    "meat pizza"
];
for (var i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
// second version
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var a = pizza_1[_i];
    console.log("I love ".concat(a, "!"));
}
// Third version
console.log("I like pizzas so much . Every Sunday , I go out with my family to a nearest resturant to eat pizza");
console.log("I love pizza!");
