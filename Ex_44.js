// Exercise 1: Personal Message
var personName = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
// Exercise 2: Name Cases
var personName = "John Doe";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
// Exercise 3: Famous Quote
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
// Exercise 4: Famous Quote 2
var famous_person = "Albert Einstein";
var message = "\"".concat(quote, "\" - ").concat(famous_person);
console.log(message);
// Exercise 5: Stripping Names
var personNameWithWhitespace = "   John Doe \t\n";
console.log("Original Name: '".concat(personNameWithWhitespace, "'"));
console.log("Stripped Name: '".concat(personNameWithWhitespace.trim(), "'"));
// Exercise 6: Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Exercise 7: Favorite Number
var favoriteNumber = 7;
console.log("My favorite number is: ".concat(favoriteNumber));
// Exercise 8: Adding Comments
// Program to display a personal message
var personName = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
// Exercise 9: Names
var names = ["John", "Doe", "Alice"];
names.forEach(function (name) { return console.log(name); });
// Exercise 10: Greetings
var names = ["John", "Doe", "Alice"];
names.forEach(function (name) { return console.log("Hello ".concat(name, ", welcome!")); });
// Exercise 11: Your Own Array
var favoriteTransportation = ["car", "bicycle", "train"];
favoriteTransportation.forEach(function (transport) { return console.log("I would like to own a ".concat(transport, ".")); });
// Add implementations for the remaining exercises as needed...
