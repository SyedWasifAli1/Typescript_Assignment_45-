// Define an array of magicians
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// Function to make each magician great
function makeGreat(magicians) {
    // Map over the array and add "the Great" to each magician's name
    return magicians.map(function (magician) { return magician + " the Great"; });
}
// Function to display the list of magicians
function showMagicians(magicians, title) {
    console.log(title);
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Make a copy of the original array
var originalMagicians = magicians.slice();
// Call makeGreat with the copy of the array
var greatMagicians = makeGreat(originalMagicians);
// Display both the original and modified arrays
showMagicians(originalMagicians, "Original Magicians:");
showMagicians(greatMagicians, "Great Magicians:");
