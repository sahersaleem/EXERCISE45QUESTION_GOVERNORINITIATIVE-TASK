
// exercise 10 : Adding comments into program



// store a name into a variable

let nameGirl = "saher"

// make a variable and split the name by using (XXX.split) and store it into variable by given type "string[]" 
let words :string[]=nameGirl.split(" ")


// make another variable XXY and store empty string in it
let titleCaseName = ""


// now using for loop 
for(let i = 0 ; i<words.length ; i++){

    //now store name in titlecase in XXY .... charat for making the first letter of word capital----->0 indicate first letter
    // of a word and slice one indicate the second leeter of an array
    titleCaseName+=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+''

}
// now print a variable by using console.log                                                                                                                                                                                                                                                                        
console.log(titleCaseName)