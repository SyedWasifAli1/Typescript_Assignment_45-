let guests: string[] = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci", "Marie Curie", "Nelson Mandela", "Malala Yousafzai"];

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}

console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest: string = guests.pop()!;
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you're still invited to dinner.`);
}

guests.splice(0, guests.length);

console.log("Remaining guests:", guests);
