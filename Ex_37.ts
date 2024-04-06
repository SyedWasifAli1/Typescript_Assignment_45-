// Define the function makeShirt with default parameters for size and message
function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
    // Print a sentence summarizing the size of the shirt and the message printed on it
    console.log(`Shirt size: ${size}, Message: "${message}"`);
}

// Call the function makeShirt with default parameters (Large size and default message)
makeShirt(); // Large shirt with default message

// Call the function makeShirt with Medium size and default message
makeShirt("Medium");

// Call the function makeShirt with Small size and a different message
makeShirt("Small", "Keep calm and code on");
