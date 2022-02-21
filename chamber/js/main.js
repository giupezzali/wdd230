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

// lazy loading

let images = document.querySelectorAll('img[data-src]');

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }
  img.src = src;
}

imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px 300px 0px"
};

imageObserver = new IntersectionObserver((entries, imageObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imageObserver.unobserve(entry.target);
    }
  })
}, imageOptions);

images.forEach(image => {
  imageObserver.observe(image);
});