//set current year in footer 
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

let oLastModif = document.lastModified;
document.getElementById('updated').innerHTML = oLastModif;