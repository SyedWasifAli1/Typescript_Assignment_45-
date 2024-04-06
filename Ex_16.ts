let guests: string[] = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci"];

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}

let unableToAttend: string = guests.pop(); 
console.log(`${unableToAttend} can't make it to the dinner.`);

console.log("Great news! We found a bigger dinner table!");

let newGuestBeginning: string = "Marie Curie";
guests.unshift(newGuestBeginning);

// Add one new guest to the middle of the array
let newGuestMiddle: string = "Nelson Mandela";
let middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, newGuestMiddle);

// Add one new guest to the end of the array
let newGuestEnd: string = "Malala Yousafzai";
guests.push(newGuestEnd);

// Print a new set of invitation messages
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}
