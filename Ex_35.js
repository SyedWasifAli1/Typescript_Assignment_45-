// Define an array of animal names
var animals = ["Dog", "Cat", "Rabbit"];
// Print each animal name using a for loop
console.log("Names of animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\n"); // Add a blank line for separation
// Modify the for loop to print a statement about each animal
console.log("Statements about these animals:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log("\n"); // Add a blank line for separation
// Add a line at the end of the program stating what these animals have in common
console.log("Any of these animals would make a great pet.");
