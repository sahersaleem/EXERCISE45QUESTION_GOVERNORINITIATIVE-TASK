/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/


const magiciansNames : string[] = ["Evie","John MICHAEL","Elon"]

function show_magicians(magicians : string []):void{
    for (const magician of magicians){
     console.log(magician)
    }
}

function make_great(magicians : string[]):string[]{
    const greatMagicians : string[] = magicians.map(magician => `the great ${magician}`)
    return greatMagicians; 
}


const greatMagiciansNames:string[] = make_great(magiciansNames)


console.log("original magicians")
show_magicians(magiciansNames)


console.log("great magicians")
show_magicians(greatMagiciansNames)




