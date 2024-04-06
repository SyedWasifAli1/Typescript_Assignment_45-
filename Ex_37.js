// Define the function makeShirt with default parameters for size and message
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    // Print a sentence summarizing the size of the shirt and the message printed on it
    console.log("Shirt size: ".concat(size, ", Message: \"").concat(message, "\""));
}
// Call the function makeShirt with default parameters (Large size and default message)
makeShirt(); // Large shirt with default message
// Call the function makeShirt with Medium size and default message
makeShirt("Medium");
// Call the function makeShirt with Small size and a different message
makeShirt("Small", "Keep calm and code on");
