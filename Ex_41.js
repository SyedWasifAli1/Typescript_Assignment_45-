// Define a function called showMagicians that takes an array of magician names and prints each name
function showMagicians(magicians) {
    console.log("List of Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define an array of magician names
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo"];
// Call the function showMagicians and pass the array of magician names
showMagicians(magicianNames);
