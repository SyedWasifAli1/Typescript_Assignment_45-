let personName: string = "John Doe";

let lowercaseName: string = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);

let uppercaseName: string = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);

let titlecaseName: string = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Titlecase:", titlecaseName);
