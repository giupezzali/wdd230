//current year in footer -------------------
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

//last modification--------------------------
let oLastModif = document.lastModified;
document.getElementById('updated').innerHTML = oLastModif;


//Navigation Bar -----------------------------
// const hambutton = document.querySelector('.ham');
// const mainnav = document.querySelector('.navigation')

// hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


//Create hamburger Button
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;