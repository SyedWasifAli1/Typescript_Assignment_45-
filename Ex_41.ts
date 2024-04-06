// Define a function called showMagicians that takes an array of magician names and prints each name
function showMagicians(magicians: string[]): void {
    console.log("List of Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Define an array of magician names
const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo"];

// Call the function showMagicians and pass the array of magician names
showMagicians(magicianNames);
