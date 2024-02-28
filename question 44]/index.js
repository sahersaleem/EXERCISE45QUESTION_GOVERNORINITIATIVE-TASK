// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwichOrder() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("your sandwich summary");
    if (items.length == 0) {
        console.log("Please order some meal");
    }
    else
        (items.forEach(function (item, i) {
            console.log(" ".concat(i + 1, " ").concat(item));
        }));
}
sandwichOrder("MACORONI", "chicken", "TIKKa", "Garlic");
sandwichOrder("MACORONI", "beef", "TIKKa");
sandwichOrder("mayo", "chicken", "yogurt");
