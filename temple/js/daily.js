const apiURL2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.984653&lon=-77.094711&units=imperial&appid=1adb5e33feff8ed9a9d7476d89527b8c';

fetch(apiURL2)
  .then((response) => response.json())
  .then((data) => {
  showWeather(data);  
  
  });

function showWeather(data){
  let daily = document.querySelector('.daily');
  daily.innerHTML = data.daily.map((day, i) =>{ 
    if (i <= 2){
      
      let dt = new Date (day.dt * 1000);
      return `<div class="day">
        <div class="card">
        <h4 class="title">${dt.toDateString()}</h4>
        <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="${day.weather[0].description}" id="weathericon">
        <div class="card-data">
        <h3 class="card-name">${day.weather[0].description}</h3>
        <p class="card-info">${day.temp.max}&deg;F - ${day.temp.min}&deg;F</p>
        </div>
        </div>
        </div>`} 
    })
    .join();
}