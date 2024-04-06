"use strict";
let pets = {
    "dog": { species: "Dog", breed: "Golden Retriever", age: 5 },
    "cat": { species: "Cat", breed: "Siamese", age: 3 },
    "hamster": { species: "Hamster", breed: "Syrian", age: 1 }
};
for (let pet in pets) {
    console.log(`${pet}:`);
    console.log(`  Species: ${pets[pet].species}`);
    console.log(`  Breed: ${pets[pet].breed}`);
    console.log(`  Age: ${pets[pet].age}`);
}
