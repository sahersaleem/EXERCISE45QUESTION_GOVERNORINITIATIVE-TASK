/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
// Step no 1
var current_users = ["Saher", "Saad", "Maaz", "Ayesha", "Saleem"];
var new_users = ["Anus", "SaHer", "Momina", "OMAR"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current = current_users_1[_a];
        if (user.toLowerCase == current.toLowerCase) {
            console.log("you need to enter a new username");
        }
        else {
            console.log("the name is available");
        }
    }
}
