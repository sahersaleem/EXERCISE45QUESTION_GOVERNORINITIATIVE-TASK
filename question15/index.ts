/*cHANGING gUEST LIST : you just heard one og yiur guest can't make the dinner,so you need to send out a new set of
invitation .you will have to think about someone else to invite

Start with your program from exercise 14,Add a print sattement at the end of your program starting the name of your guest who can't
make it .

.modify your list replacing the name of the guest who can't make it with the name of new person you are inviting 

print a second set of invitation messages one for each person who are still in your list 

*/

let guestList:Array<string>=[
    "SIR ZIA",
    "KAMRAN KHAN TESSORI",
    "ELON MUSK",
    "GENERAL ASIM MUNIR"
  ]
// print the name of person who can't make it 

let guestWhoCantMakeIt = "ELON MUSK"
console.log(`${guestWhoCantMakeIt} cant make it to dinner `)

// Step 2 .Replace the name of guest who cant make it 

let newGuest : string = "Allama iqbal"
let indexOf :number = guestList.indexOf(guestWhoCantMakeIt);
// console.log(indexOf)

if (indexOf !== -1 ){
    guestList[indexOf] = newGuest
}

  console.log(guestList[2])

// step no 3 print a second set of invitation messages

console.log("second set of invitation messages")
guestList.forEach((guest:string)=>{

        console.log (`Dear ${guest} you are invited for dinner`)


})



export{guestList}