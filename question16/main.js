/*
more guests : you just found a biggger dinner table ,so more space is available .Think of three more guest to invite to invite to dinner

start with your program from exercise 15 .Add a print statement to the end of your program informing people that you found a bigger dinner table .

add one new guest to the begining of your array

add one new guest to the middle of your array .Use append ()to add one mew guest to the end of your list .print a new set of messages one for each person ij your list
*/
var guestList = [
    "SIR ZIA",
    "KAMRAN KHAN TESSORI",
    "ELON MUSK",
    "GENERAL ASIM MUNIR"
];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("hello ".concat(guest, " we just found a bigger dinner table."));
}
//   add one new guest to the begining of your array 
var newGuestInTheBegining = "Allama iqbal";
guestList.unshift(newGuestInTheBegining);
console.log(guestList);
// add one new guest to the middle of your array
var newGuestInThemiddle = "imran khan ";
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInThemiddle);
// console.log(guestList)
// se append ()to add one mew guest to the end of your list
var newGuestAtEnd = "EINGIN ALTAN";
guestList.push(newGuestAtEnd);
console.log(guestList);
// Final step: print a new set of invitation 
console.log("new set of invitation messages");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, " you are invited to  dinner"));
}
