// Exercise 1: Personal Message
let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Exercise 2: Name Cases
let personName: string = "John Doe";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, c => c.toUpperCase()));

// Exercise 3: Famous Quote
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

// Exercise 4: Famous Quote 2
let famous_person: string = "Albert Einstein";
let message: string = `"${quote}" - ${famous_person}`;
console.log(message);

// Exercise 5: Stripping Names
let personNameWithWhitespace: string = "   John Doe \t\n";
console.log(`Original Name: '${personNameWithWhitespace}'`);
console.log(`Stripped Name: '${personNameWithWhitespace.trim()}'`);

// Exercise 6: Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Exercise 7: Favorite Number
let favoriteNumber: number = 7;
console.log(`My favorite number is: ${favoriteNumber}`);

// Exercise 8: Adding Comments
// Program to display a personal message
let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Exercise 9: Names
let names: string[] = ["John", "Doe", "Alice"];
names.forEach(name => console.log(name));

// Exercise 10: Greetings
let names: string[] = ["John", "Doe", "Alice"];
names.forEach(name => console.log(`Hello ${name}, welcome!`));

// Exercise 11: Your Own Array
let favoriteTransportation: string[] = ["car", "bicycle", "train"];
favoriteTransportation.forEach(transport => console.log(`I would like to own a ${transport}.`));

// Add implementations for the remaining exercises as needed...

