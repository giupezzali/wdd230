//set current year in footer 
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
//set last updated
let oLastModif = document.lastModified;
document.getElementById('updated').innerHTML = oLastModif;