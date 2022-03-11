const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Neuquen&units=imperial&appid=1adb5e33feff8ed9a9d7476d89527b8c';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    const currentTemp = document.querySelector('#current-temp');
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let desc = jsObject.weather[0].description;
    const caption = document.querySelector('figcaption');
    
    
    //round the currentTemp
    currentTemp.textContent = jsObject.main.temp.toFixed(0); 
    //capitalize the alt message
    desc = desc.split(' ').map(capitalize).join(' ');  
    // display the weather description (alt message)
    caption.innerHTML = desc;

    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
});

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}



