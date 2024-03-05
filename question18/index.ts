let travelDestination : string[]=["istanbul","paris","Madina","Sogut","Washington Dc"]
console.log("original order")
console.log(travelDestination)


console.log("Alphabetical order without modifying actual list")
console.log([...travelDestination].sort())

console.log("showing array in its original order")
console.log(travelDestination)

console.log("Reverse alphabateical order without modifying actual list")
console.log([...travelDestination].sort().reverse())


console.log("showing array in its original order")
console.log(travelDestination)


console.log("reverse order")
travelDestination.reverse()
console.log(travelDestination)


console.log("back to original")
travelDestination.reverse()
console.log(travelDestination)

console.log("change to alphabetical order")
travelDestination.sort()
console.log(travelDestination)

console.log("change to reverse alphabetical order")
travelDestination.sort().reverse()
console.log(travelDestination)
