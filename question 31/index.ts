/*No Users: Add an if test to Exercise 30  to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/ 

let userNames : string[] =["admin","William","Austin","Evie","Elon"]

   
function greetUsers (){

             if(userNames.length===0){
                console.log("We need to find some users")
                return;
             }
            for(let userName of userNames){
                if (userName=="admin"){
                    console.log("Hello,would you like to check status")
                }
                else{
                    console.log(`Hello ${userName} Thankyou ! for logging in again`)
                }
            }

}
userNames=[]
greetUsers();



