//API PERMISSIONS
let url = "https://open-weather13.p.rapidapi.com/city/toronto/EN";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "70ac253f68mshd90b1e80fb1dd12p10e94cjsn52e532c9bcc7",
    "x-rapidapi-host": "open-weather13.p.rapidapi.com",
  },
};

//placeholders to fill for button use, used variables so that it saves on update of info
let temp = document.getElementById("temp");
let feels = document.getElementById("fL");
let humid = document.getElementById("humid");
let country = document.getElementById("country");
let cityDisplay = document.getElementById("city")
let input = document.getElementById("input");
let btn = document.getElementById("find");

async function FetchWeather(city) {
    url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response failed");
    }
    console.log(`Fetching weather data from URL: ${url}`);

    const data = await response.json();
    console.log(data);
    temp.textContent = JSON.stringify(data.main.temp);
    feels.textContent = JSON.stringify(data.main.feels_like);
    humid.textContent = JSON.stringify(data.main.humidity);
    country.textContent = data.sys.country;
    cityDisplay.textContent = city;
   
  } catch (error) {
    console.error("Error fetching weather data");
  }
}




btn.addEventListener("click", () => {
    const city = String(input.value);
    FetchWeather(city);
    console.log(input.value)
    console.log(url)

});
