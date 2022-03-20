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
      console.log(membershiFiltered);
  
      for (i = 1; i < 4; i++) {
        const randomMember =[Math.floor(Math.random()*membershiFiltered.length)];
        displayCompanies(membershiFiltered[randomMember]);
    }
});
       

function displayCompanies(company) {
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');

    logo.setAttribute('src', `${company.logo}`);
    logo.setAttribute('alt', `${company.name}`);
    logo.setAttribute('loading', 'lazy');

    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    website.innerHTML = `<a target="_blank" href="#">${company.website}</a>`;

    cards.appendChild(logo);
    cards.appendChild(address);
    cards.appendChild(phone);
    cards.appendChild(website);
}