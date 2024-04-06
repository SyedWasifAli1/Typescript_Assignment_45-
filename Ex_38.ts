// Define the function describeCity with default parameter for country
function describeCity(city: string, country: string = "Pakistan"): void {
    // Print a simple sentence describing the city and its country
    console.log(`${city} is in ${country}.`);
}

// Call the function describeCity for three different cities
describeCity("Karachi");
describeCity("New York", "USA");
describeCity("Paris", "France");
