const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.984653&lon=-77.094711&units=imperial&appid=1adb5e33feff8ed9a9d7476d89527b8c';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
  console.log(jsObject);
  
    let currentTemp = document.querySelector('#current-temp');
  let humidity = document.querySelector('#hum');
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    let desc = jsObject.current.weather[0].description;
    const caption = document.querySelector('figcaption');
  
  const alert = document.getElementById('#weather-alert');
    

    currentTemp.textContent = jsObject.current.temp; 
  humidity.textContent = jsObject.current.humidity;   
  
    // display the weather description (alt message)
    caption.innerHTML = desc;

    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
});