/*No Users: Add an if test to Exercise 30  to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
var userNames = ["admin", "William", "Austin", "Evie", "Elon"];
function greetUsers() {
    if (userNames.length === 0) {
        console.log("We need to find some users");
        return;
    }
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var userName = userNames_1[_i];
        if (userName == "admin") {
            console.log("Hello,would you like to check status");
        }
        else {
            console.log("Hello ".concat(userName, " Thankyou ! for logging in again"));
        }
    }
}
userNames = [];
greetUsers();
