import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import {createMarkupCountryCard, createMarkupCountryList} from './js/MarkupCountryCard.js';

const DEBOUNCE_DELAY = 300;
let searchQuery = '';
const countryInfoEl = document.querySelector(".country-info");
const inputEl = document.querySelector("#search-box");
const countryListEl = document.querySelector(".country-list");

inputEl.addEventListener('input', onInput);

function onInput(e) {
    searchQuery = e.currentTarget.value.trim();

    fetchCountries(searchQuery)
        .then(response => {
            if (!response.ok) {
                Notiflix.Notify.failure('Oops, there is no country with that name')
            }
            return response.json();
        })        
        .then((country) => {  
            if (country.length > 10) {               
                Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');  
                return markup = '';
            }
            if (country.length > 1 && country.length < 11) {
                const markup = createMarkupCountryList(country)
                return updateListMarkup(markup);
                
            }
            if (country.length === 1) {
                const markup = createMarkupCountryCard(country) 
                return updateCountryMarkup(markup)
            }           
        })
        // .then(updateCountryMarkup);  
};

function updateCountryMarkup(markup) {
     countryInfoEl.innerHTML = markup;
};

function updateListMarkup(markup) {
    countryListEl.innerHTML = markup;
}

Notiflix.Notify.init({
    position: 'center-top',
    timeout: 1500,
    warning: {
        background: '#1facc5',
    },
    failure: {
        background: '#e90c0c',
    }
});

