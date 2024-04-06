let string1: string = 'apple';
let string2: string = 'banana';
console.log("Test for equality with strings:");
console.log(string1 == string2); 
console.log("Test for inequality with strings:");
console.log(string1 != string2); 

let uppercaseString: string = 'HELLO';
let lowercaseString: string = 'hello';
console.log("Test using lowercase function:");
console.log(uppercaseString.toLowerCase() == lowercaseString); 

let num1: number = 10;
let num2: number = 5;
console.log("Numerical tests:");
console.log(num1 > num2); 
console.log(num1 < num2); 
console.log(num1 >= num2); 
console.log(num1 <= num2); 

let a: boolean = true;
let b: boolean = false;
console.log("Tests using 'and' and 'or' operators:");
console.log(a && b); 
console.log(a || b); 

let fruits: string[] = ["apple", "banana", "orange"];
console.log("Test whether an item is in an array:");
console.log(fruits.includes("banana")); 

console.log("Test whether an item is not in an array:");
console.log(!fruits.includes("pear")); 
