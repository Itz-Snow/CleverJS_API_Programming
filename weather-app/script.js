/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

const getWeatherData = (city) =>
{
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  
  //CODE GOES HERE
  try
  {
    fetch(`${URL}?q=${city}&appid=${API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(data =>
        {                       
            showWeatherData(data)
        })
  } catch(error)
  {
    return error    
  }  
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => 
{
    const city = document.getElementById('city-input').value;
    // CODE GOES HERE
    getWeatherData(city)
    
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => 
{
  //CODE GOES HERE
   
  const cityName = document.getElementById('city-name').innerText = `${weatherData.name}`
  const weatherType = document.getElementById('weather-type').innerText = `${weatherData.weather[0].main}`
  const temp = document.getElementById('temp').innerText = `${weatherData.main.temp}`
  const minTemp = document.getElementById('min-temp').innerText = `${weatherData.main.temp_min}`
  const maxTemp = document.getElementById('max-temp').innerText = `${weatherData.main.temp_max}`
}

