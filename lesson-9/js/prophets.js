const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);  // temporary checking for valid response and data parsing 
  });


function displayProphets(prophet) {
// Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let bdate = document.createElement('p');
    let bplace = document.createElement('p');
    let portrait = document.createElement('img');
  
    let order = ``;

    if (prophet.order === 1){
      order = `${prophet.order}st`;
    } else if (prophet.order === 2){
      order = `${prophet.order}nd`;
    } else if (prophet.order === 3){
      order = `${prophet.order}rd`;
    } else {
      order = `${prophet.order}th`;
    }

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
  
    bdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    bplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(bdate);
    card.appendChild(bplace);  
    card.appendChild(portrait); 
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}