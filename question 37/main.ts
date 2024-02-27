/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function make_shirt(size="small",message="Shirt is beautiful"):void{
    console.log(`The size of shirt is ${size}.${message}`)     
}
make_shirt()

// 2nd Version

make_shirt("medium")
make_shirt("large")
make_shirt("Extra large","Shirt is Ugly")