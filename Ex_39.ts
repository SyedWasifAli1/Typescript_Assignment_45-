// Define the function cityCountry that takes in a city name and its country and returns a formatted string
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function cityCountry with three different city-country pairs and print the returned values
const city1 = cityCountry("Lahore", "Pakistan");
const city2 = cityCountry("Tokyo", "Japan");
const city3 = cityCountry("New York", "USA");

console.log(city1);
console.log(city2);
console.log(city3);
