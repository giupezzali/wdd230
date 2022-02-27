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

//set current year in footer 
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
//set last updated
let oLastModif = document.lastModified;
document.getElementById('updated').innerHTML = oLastModif;

const weekDay = now.getDay();

let banner = document.querySelector('#banner')

if (weekDay == 1 || weekDay == 2) {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}

//Join.html Hidden Button

const d = new Date();

function currentDateH () {
  const datetime = "loaded: " + d.getDate() + "/"
	+ (d.getMonth()+1)  + "/"
	+ d.getFullYear() + " || "
	+ d.getHours() + ":"
	+ d.getMinutes() + ":"
	+ d.getSeconds();
console.log(datetime)
document.getElementById("hdate").value = datetime
}

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", currentDateH);
