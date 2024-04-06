// Define an array of pizza names
const pizzas: string[] = ["Margherita", "Pepperoni", "Vegetarian"];

// Print each pizza name using a for loop
console.log("Types of pizzas I like:");
for (const pizza of pizzas) {
    console.log(pizza);
}

console.log("\n");  // Add a blank line for separation

// Modify the for loop to print a sentence using the name of the pizza
console.log("Statements about my favorite pizzas:");
for (const pizza of pizzas) {
    console.log("I like", pizza, "pizza.");
}

console.log("\n");  // Add a blank line for separation

// Add a line at the end of the program stating how much you like pizza
console.log("I really love pizza!");
