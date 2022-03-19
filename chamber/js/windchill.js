const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Neuquen&units=imperial&appid=1adb5e33feff8ed9a9d7476d89527b8c';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(apiURL);
    
    let temp = document.querySelector('#current-temp');
    let speed = document.querySelector('#speed');
    let windchill = "";
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let desc = jsObject.weather[0].description;
    const caption = document.querySelector('figcaption');
    const name = document.querySelector('#name');
  
    let heading = document.createElement('h3');
    heading.textContent = jsObject.name;
    name.appendChild(heading);
    
    //round the currentTemp
    temp.textContent = jsObject.main.temp.toFixed(1); 
    speed.textContent = jsObject.wind.speed.toFixed(1); 

    //capitalize the alt message
    desc = desc.split(' ').map(capitalize).join(' ');  
  
    // display the weather description (alt message)
    caption.innerHTML = desc;

    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  
    if (temp <= 50 && speed > 3) {
        windchill = windChill (temp, speed);
        windchill = `${windchill}°F`;
    } else {
        windchill = "N/A";
    }

    document.querySelector("#wind").textContent = windchill;

});

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}


function windChill(temp, speed) {
    return Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)))
}