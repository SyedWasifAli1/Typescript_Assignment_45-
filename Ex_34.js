// Define an array of pizza names
var pizzas = ["Margherita", "Pepperoni", "Vegetarian"];
// Print each pizza name using a for loop
console.log("Types of pizzas I like:");
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
console.log("\n"); // Add a blank line for separation
// Modify the for loop to print a sentence using the name of the pizza
console.log("Statements about my favorite pizzas:");
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var pizza = pizzas_2[_a];
    console.log("I like", pizza, "pizza.");
}
console.log("\n"); // Add a blank line for separation
// Add a line at the end of the program stating how much you like pizza
console.log("I really love pizza!");
