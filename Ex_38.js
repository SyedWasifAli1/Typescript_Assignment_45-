// Define the function describeCity with default parameter for country
function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    // Print a simple sentence describing the city and its country
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function describeCity for three different cities
describeCity("Karachi");
describeCity("New York", "USA");
describeCity("Paris", "France");
