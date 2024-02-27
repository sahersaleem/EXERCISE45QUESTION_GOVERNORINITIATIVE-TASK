var first_Name = "SaHeR";
var lowerCase_String = first_Name.toLowerCase();
console.log(lowerCase_String);
var toUpperCase_String = first_Name.toUpperCase();
console.log(toUpperCase_String);
var title_Case = "My NAmE IS SAHER Ssaleem";
// split command will convert a string into an array
var words = title_Case.split(" ");
var title_CaseName = "";
for (var i = 0; i < words.length; i++) {
    title_CaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(title_CaseName);
