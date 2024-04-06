// Define an array of animal names
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print each animal name using a for loop
console.log("Names of animals:");
for (const animal of animals) {
    console.log(animal);
}

console.log("\n"); // Add a blank line for separation

// Modify the for loop to print a statement about each animal
console.log("Statements about these animals:");
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("\n"); // Add a blank line for separation

// Add a line at the end of the program stating what these animals have in common
console.log("Any of these animals would make a great pet.");
