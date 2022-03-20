const requestURL = 'https://giupezzali.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.spotlight')

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const companies = jsonObject['companies'];
      let membershiFiltered = companies.filter(membership => membership.membership === 'gold' || membership.membership === 'silver');
  
      for (i = 1; i < 4; i++) {
        const randomMember =[Math.floor(Math.random()*membershiFiltered.length)];
        displayCompanies(membershiFiltered[randomMember], `.spotlight${i}`);
    }
});
       

function displayCompanies(company, spotlight) {
    let card = document.querySelector(spotlight);
    let logo = document.createElement('img');
    let phone = document.createElement('p');
    let website = document.createElement('p');

    logo.setAttribute('src', `${company.logo}`);
    logo.setAttribute('alt', `${company.name}`);
    logo.setAttribute('loading', 'lazy');

    phone.textContent = `${company.phone}`;
    website.innerHTML = `<a target="_blank" href="#">${company.website}</a>`;

    card.appendChild(logo);
    card.appendChild(phone);
    card.appendChild(website);
}