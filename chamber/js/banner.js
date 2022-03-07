const current = new Date();
const weekDay = current.getDay();

let banner = document.querySelector('#banner')

if (weekDay == 1 || weekDay == 2) {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}