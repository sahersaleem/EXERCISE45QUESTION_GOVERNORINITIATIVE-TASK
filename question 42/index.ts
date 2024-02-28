/*rgeat Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

let magicians : string[] = ["Evie","John MICHAEL","Elon"]

function make_great (){
    for(let magician of magicians){
        console.log(`${magician} is a great magician`)
    }
}
make_great()

