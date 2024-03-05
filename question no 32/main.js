"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
// Step no 1
const current_users = ["Saher", "Ayesha", "Saad", "ABdulRehman", "anus"];
const new_users = ["Saher", "Ayesha", "faiza", "ABdulRehman", "anus", "JAVeria"];
function checkUserName(current_users, new_users) {
    const lowerCasedCurrentUsers = current_users.map(user => user.toLowerCase());
    for (const newUser of new_users) {
        const lowerCasedNewUsers = newUser.toLowerCase();
        if (lowerCasedCurrentUsers.includes(lowerCasedNewUsers)) {
            console.log(`Username${newUser} already taken enter a new username`);
        }
        else {
            console.log(`username${newUser}is avilable`);
        }
    }
}
checkUserName(current_users, new_users);
