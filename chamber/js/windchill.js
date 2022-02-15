//calculate de WindChill
let t = parseFloat(document.querySelector("#temperature").textContent);
let s = parseFloat(document.querySelector("#speed").textContent);
let windchill = "";

if (t <= 50 && s > 3) {
    windchill = windChill (t, s);
    windchill = `${windchill}°F`;
} else {
    windchill = "N/A";
}

document.querySelector("#wind").textContent = windchill;

function windChill(temp, speed) {
    return Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)))
  }