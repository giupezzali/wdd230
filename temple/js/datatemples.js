const requestURL = 'https://giupezzali.github.io/wdd230/temple/data/data.json';
const cards = document.querySelector('.templesd')

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        temples.forEach(displaytemples);
 });


function displaytemples(temple) {
    let card = document.createElement('div');
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let history = document.createElement('p');
    let ordinances = document.createElement('p');
    let website = document.createElement('p');
    
    image.setAttribute('src', `${temple.image}`);
    image.setAttribute('alt', `${temple.name}'s image`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute
  

    name.textContent = `${temple.name}`;
    address.textContent = `Address: ${temple.address}`;
    phone.textContent = `Telephone: ${temple.phone}`;
    email.textContent = `Email ${temple.email}`;
    services.textContent = `Services: ${temple.services}`;
    history.textContent = `History: ${temple.history}`;
    ordinances.textContent = `Ordinance Schedule: ${temple.ordinance}`;
    website.innerHTML = `<a target="_blank" href="${temple.website}">Learn More</a>`;

  
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordinances);
    card.appendChild(website);

    cards.appendChild(card);

}

