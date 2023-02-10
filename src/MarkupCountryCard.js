
export default function createMarkupCountryCard(country) {
    
    
    return  `
    < div class="card" >
    <p class="country_name">
        <span class="country_flag"></span> ${country[0].name.official}
    </p>
    <p class="country_capital">Capital: </p>
    <p class="country_population">Population:</p>
    <p class="country_languages">Languages: </p>
</div>
    `;

};
