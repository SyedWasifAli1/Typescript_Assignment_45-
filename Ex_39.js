// Define the function cityCountry that takes in a city name and its country and returns a formatted string
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function cityCountry with three different city-country pairs and print the returned values
var city1 = cityCountry("Lahore", "Pakistan");
var city2 = cityCountry("Tokyo", "Japan");
var city3 = cityCountry("New York", "USA");
console.log(city1);
console.log(city2);
console.log(city3);
