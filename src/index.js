import './css/styles.css';
// import coutryCardTpl from './countryCard.hbs';
import fetchCountries from './js/fetchCountries';


const DEBOUNCE_DELAY = 300;

const countryInfoEl = document.querySelector(".country-info");
const inputEl = document.querySelector("#search-box");

inputEl.addEventListener('input', onInput)

function onInput(e) {
    // const value = e.currentTarget.value.trim();

    fetchCountries()
        .then(updateCountryMarkup);  
}

function updateCountryMarkup(markup) {
     countryInfoEl.innerHTML = markup;
}

