/*
more guests : you just found a biggger dinner table ,so more space is available .Think of three more guest to invite to invite to dinner 

start with your program from exercise 15 .Add a print statement to the end of your program informing people that you found a bigger dinner table .

add one new guest to the begining of your array 

add one new guest to the middle of your array .Use append ()to add one mew guest to the end of your list .print a new set of messages one for each person ij your list
*/ 


let guestList:Array<string>=[
    "SIR ZIA",
    "KAMRAN KHAN TESSORI",
    "ELON MUSK",
    "GENERAL ASIM MUNIR"
  ]

  for (let guest of guestList){
    console.log(`hello ${guest} we just found a bigger dinner table.`)
  }

//   add one new guest to the begining of your array 
let newGuestInTheBegining :string = "Allama iqbal"
guestList.unshift(newGuestInTheBegining)
console.log(guestList)


// add one new guest to the middle of your array

let newGuestInThemiddle :string = "imran khan "
let middleIndex:number = Math.floor( guestList.length/2)
guestList.splice(middleIndex,0,newGuestInThemiddle)
// console.log(guestList)


// se append ()to add one mew guest to the end of your list

let newGuestAtEnd:string = "EINGIN ALTAN"
guestList.push(newGuestAtEnd)

console.log(guestList)

// Final step: print a new set of invitation 
console.log("new set of invitation messages")

for (let guest of guestList){
   console.log(`Dear ${guest} you are invited to  dinner`)
}
