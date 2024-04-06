"use strict";
let personName = "John Doe";
let lowercaseName = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);
let uppercaseName = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);
let titlecaseName = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Titlecase:", titlecaseName);
