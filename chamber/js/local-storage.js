const lastVisit = localStorage.getItem('lastVisit');

const FACTOR = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisit;

let numberOfDays = Math.round(daysBetween / FACTOR);
// let numberOfDays = daysBetween;

console.log(numberOfDays);

const daysSince = document.querySelector('#lastvisit');

if (lastVisit == null) {
    daysSince.innerHTML = `This is your first visit!`
} else {
    daysSince.innerHTML = `Last visit: ${numberOfDays} days ago`
}

localStorage.setItem('lastVisit', Date.now());