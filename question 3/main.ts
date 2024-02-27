let first_Name:string = "SaHeR";
let lowerCase_String : string= first_Name.toLowerCase();
console.log(lowerCase_String);
let toUpperCase_String :string= first_Name.toUpperCase();
console.log(toUpperCase_String);




let title_Case:string="My NAmE IS SAHER saleem";

// split command will convert a string into an array .... we make a variable words and give type it to string(array) and use split to split array
// we make variable titlecase name give it type string and store empty value in it
// now we use for loop 
// Now we add words i means 0 place charat 0 means first letter and make it uppercase and words  i slice one means to lower case
let words:string[]=title_Case.split(" ");
let title_CaseName:string=""

for(let i = 0 ;i< words.length;i++){
    title_CaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
}
console.log(title_CaseName)

