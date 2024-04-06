// Define an array of magicians
let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];

// Function to make each magician great
function makeGreat(magicians: string[]): string[] {
    // Map over the array and add "the Great" to each magician's name
    return magicians.map(magician => magician + " the Great");
}

// Function to display the list of magicians
function showMagicians(magicians: string[], title: string): void {
    console.log(title);
    magicians.forEach(magician => console.log(magician));
}

// Make a copy of the original array
let originalMagicians: string[] = magicians.slice();

// Call makeGreat with the copy of the array
let greatMagicians: string[] = makeGreat(originalMagicians);

// Display both the original and modified arrays
showMagicians(originalMagicians, "Original Magicians:");
showMagicians(greatMagicians, "Great Magicians:");
