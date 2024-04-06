let current_users: string[] = ['john', 'jane', 'alice', 'bob', 'dave'];
let new_users: string[] = ['john', 'emily', 'sarah', 'dave', 'chris'];

for (let new_username of new_users) {
    // Check if the new_username exists in current_users (case insensitive)
    let usernameExists = current_users.some(current_username => current_username.toLowerCase() === new_username.toLowerCase());

    if (usernameExists) {
        console.log(`Sorry, the username "${new_username}" is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations! The username "${new_username}" is available.`);
    }
}
