/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

let magicians : string[] = ["Evie","John MICHAEL","Elon"]

function show_magicians (){
    for(let magician of magicians){
        console.log(magician)
    }
}
show_magicians()