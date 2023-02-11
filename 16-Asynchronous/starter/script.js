'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (msg) {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
  // countriesContainer.style.opacity = 1;
}
const renderCountry = function (data, className = ``) {
  const getFirstLanguage = Object.keys(data.languages)[0];
  const getCurrencies = Object.keys(data.currencies);
  const html =
    `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data"> 
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[`${getFirstLanguage}`]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[`${getCurrencies}`].name}</p>
    </div>
  </article>`
    ;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
const opacityController = function (second) {
  countriesContainer.style.opacity = second;
}


///////////////////////////////////////

//  first  

// REST Countries	Get information about countries via a RESTful API	No	Yes	Yes

/* 
  const getCountryData = function (country) {

    const request = new XMLHttpRequest();
    request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener(
      `load`, function () {
        const [data] = JSON.parse(this.responseText);
        const getFirstLanguage = Object.keys(data.languages)[0];
        const getCurrencies = Object.keys(data.currencies);
        const html =
          `<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data"> 
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[`${getFirstLanguage}`]}</p>
            <p class="country__row"><span>💰</span>${data.currencies[`${getCurrencies}`].name}</p>
          </div>
        </article>`
          ;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
      }
    );
  };
  getCountryData(`portugal`);
 */


/* 
const getCountryAndNeighbour = function (country) {

  //  ajax country call 1
  const request = new XMLHttpRequest();
  request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener(
    `load`, function () {
      const [data] = JSON.parse(this.responseText);

      //  render country 1
      renderCountry(data);

      //  Get neighbour country 2
      if (!data.borders) return;
      const [neighbour] = data.borders;

      // getCountryAndNeighbour(neighbour);
      const borderRequest = new XMLHttpRequest();
      borderRequest.open(`GET`, `https://restcountries.com/v3.1/alpha/${neighbour}`);
      borderRequest.send();
      borderRequest.addEventListener(
        `load`, function () {
          const [data] = JSON.parse(this.responseText);
          //  render country 2
          renderCountry(data, 'neighbour');
        });

    }
  );
}; */



/* 
  const request = new XMLHttpRequest();
  request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
  request.send();
*/

/* 
  const url = (firstResource, secondResource) => {
    return `https://restcountries.com/v3.1/${firstResource}/${secondResource}`
  };

  const getJson = function (firstResource, secondResource) {
    return fetch(`${url(firstResource, secondResource)}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Country no find ${response.status}`);
        return response.json()
      })
  };

  const getCountryData = function (country) {

    getJson(`name`, country)
      .then((data) => {
        renderCountry(data[0]);
        const neighbour = data[0].borders;
        if (!neighbour) throw new Error('No neighbour found!');
        return getJson(`alpha`, neighbour);
      })
      .then((data) => {
        renderCountry(data[0], 'neighbour')
        console.log(data);
      })
      .catch((err) => {
        console.error(err)
        renderError(`Something went wrong 😈😈 ${err.message}. Try again`)
      })
      .finally(() => {
        opacityController(1);
      });

  };

  btn.addEventListener(
    `click`, function () {
      getCountryData(`korea`);
    }
  );
 */
const authCode = `73537470849052694050x95096`;
const whereAmI = () => {
  navigator.geolocation.getCurrentPosition(function (pos) {
    fetch(`https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?geoit=json&auth=${authCode}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
};

// whereAmI();


//  값을 갈아끼운다.
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
}

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  }
}

g();
f();

h();
f();

//  Example 2
const boardpassengers = function (n, wait) {
  // const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`THere are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardpassengers(180, 3);
