// set current date with day first
const datefield = document.querySelector(".date")

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

//Create hamburger Button
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

//current year in footer 
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
//last modification
let oLastModif = document.lastModified;
document.getElementById('updated').innerHTML = oLastModif;

