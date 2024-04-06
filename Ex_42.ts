// Define an array of magicians
let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];

// Function to make each magician great
function makeGreat(magicians: string[]): string[] {
    // Map over the array and add "the Great" to each magician's name
    return magicians.map(magician => magician + " the Great");
}

// Function to display the list of magicians
function showMagicians(magicians: string[]): void {
    console.log("List of Magicians:");
    magicians.forEach(magician => console.log(magician));
}

// Call makeGreat to modify the list of magicians
magicians = makeGreat(magicians);

// Call showMagicians to display the modified list
showMagicians(magicians);
