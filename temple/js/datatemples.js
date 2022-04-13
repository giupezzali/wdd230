const requestURL = 'https://giupezzali.github.io/wdd230/temple/data/data.json';

const cards = document.querySelector('.cards')

fetch(requestURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        temples.forEach(displaytemples);
 });

function displaytemples(temple){
  let card = document.createElement('div');
  card.innerHTML = `<div class="item">
  <div class="img">
    <div class="like"><i class="fa fa-heart" aria-hidden="true"></i></div></a>
    <div class="img-content">
      <img src="${temple.image}" alt="${temple.name}'s image" loading="lazy">
    </div>
  </div>
  <div class="text-container">
    <h2>${temple.name}</h2>
    <div class="content">
      <p>PHONE: ${temple.phone}</p>
      <p>EMAIL: ${temple.email}</p>
      <p>SERVICES: ${temple.services}</p>
      <p>HISTORY: ${temple.history}</p>
     
      <p> ORDINANCES:  ${temple.ordinance}</p>
    </div>
    <div class="footer">
      <h3><a href="${temple.website}">details ...</a></h3>
    </div>   
  </div>
</div>`
    
    cards.appendChild(card);
}