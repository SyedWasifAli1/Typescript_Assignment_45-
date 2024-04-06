"use strict";
let guests = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci"];
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}
let unableToAttend = guests.pop();
console.log(`${unableToAttend} can't make it to the dinner.`);
let newGuest = "Stephen Hawking";
guests.push(newGuest);
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}
