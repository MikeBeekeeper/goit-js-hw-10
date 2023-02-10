// import createMarkupCountryCard from '../MarkupCountryCard';

// import value from '../index.js';

// const value = 'Ukraine';

export default function fetchCountries(country) {
const URL = `https://restcountries.com/v3.1/name/Ukraine`;

    return fetch(URL)
        .then(response => {
            return response.json();
        })
        .then((country) => {
            
            createMarkupCountryCard(country)
            
        
        });
}

function createMarkupCountryCard(country) {
    
    
    return country.map(c => 
        `
    < div class="card" >
    <p class="country_name">
        <span class="country_flag">${c.flag}</span> ${c.name.official}
    </p>
    <p class="country_capital">Capital: ${c.capital}</p>
    <p class="country_population">Population: ${c.population}</p>
    <p class="country_languages">Languages: </p>
</div>
    `).join(' ');

};
