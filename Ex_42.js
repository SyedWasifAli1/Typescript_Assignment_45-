// Define an array of magicians
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// Function to make each magician great
function makeGreat(magicians) {
    // Map over the array and add "the Great" to each magician's name
    return magicians.map(function (magician) { return magician + " the Great"; });
}
// Function to display the list of magicians
function showMagicians(magicians) {
    console.log("List of Magicians:");
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Call makeGreat to modify the list of magicians
magicians = makeGreat(magicians);
// Call showMagicians to display the modified list
showMagicians(magicians);
