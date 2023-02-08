'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const renderCountry = function (data) {
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
};

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
      const request = new XMLHttpRequest();
      request.open(`GET`, `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request.send();
      request.addEventListener(
        `load`, function () {
          const [data] = JSON.parse(this.responseText);
          //  render country 2
          renderCountry(data);
        });

    }
  );
};

getCountryAndNeighbour(`china`);
