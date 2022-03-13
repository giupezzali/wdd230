const requestURL = 'https://giupezzali.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.busdata')

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
    });


function displayCompanies(company) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let cname = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');

    logo.setAttribute('src', `${company.logo}`);
    logo.setAttribute('alt', `${company.name}'s logo`);
    logo.setAttribute('loading', 'lazy');

    cname.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    website.innerHTML = `<a target="_blank" href="#">${company.website}</a>`;

    card.appendChild(logo);
    card.appendChild(cname);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);

}

//////
const gridview = document.querySelector('#grid');
const listview = document.querySelector('#list');

gridview.addEventListener("click", () => {
	cards.classList.add("grid");
	cards.classList.remove("list");
});

listview.addEventListener("click", () => {
	cards.classList.add("list");
	cards.classList.remove("grid");
});

