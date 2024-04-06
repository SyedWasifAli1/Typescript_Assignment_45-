"use strict";
// Store the locations in an array
let placesToVisit = ["Japan", "Italy", "Australia", "Brazil", "Iceland"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("Still in original order:", placesToVisit);
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
console.log("Still in original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
