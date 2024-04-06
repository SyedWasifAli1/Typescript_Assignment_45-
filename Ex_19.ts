let guests: string[] = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci", "Marie Curie", "Nelson Mandela", "Malala Yousafzai"];

console.log(`Number of people invited to dinner: ${guests.length}`);

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}
