/*Alien colore : 3 : Turn your if-else chain from previous exercise into an if-else chain
if the alien is green ,print a  message the the player earned 5 points.
if the alien is yellow ,print a  message the the player earned 10 points.
if the alien is red ,print a  message the the player earned 15 points.

Write three version of this program making sure each message is printed for the appropriate color alien.
*/
// Version one
var alien_color = "green";
if (alien_color == "green") {
    console.log("Congratulation! You just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("Congratulation!You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("Congratulation!You just earned 15 points");
}
else {
    console.log("0 points");
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log("Congratulation! You just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("Congratulation!You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("CongratulationYou just earned 15 points");
}
else {
    console.log("0 point");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("Congratulation! You just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("congratulation!You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("Congratulation!You just earned 15 points");
}
else {
    console.log("0 point");
}
