// const countriesInfo = () => {
//     const url = 'https://restcountries.com/v3.1/all';
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayCountries(data))
// }


// const displayCountries = countries => {
//     // console.log(countries)

//     // for (const country of countries) {
//     //     console.log(country)
//     // }

//     const countryContainer = document.getElementById('countries-container');
//     countries.forEach(country => {
//         console.log(country);
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <h4>altSpellings: ${country.altSpellings}</h4>
//         <h3>Country Name: ${country.name.common}</h3>
//         <h1>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h1>
//         <button onclick="modalShow('${country.cca2}')">Details</button>
//         `;
//         countryContainer.appendChild(div);
//         div.classList.add('country')
//     })
// }

// const modalShow = (code) => {
//     console.log('lol;', code)
// }

// countriesInfo()









const CountryInfo = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data))
    loaderSection(true)
}

const displayInfo = objects => {
    // console.log(objects)

    const countryContainer = document.getElementById('countries-container');
    objects.forEach(object => {
        // console.log(object)
        const div = document.createElement('div');
        div.innerHTML = `
        <h5>Country: ${object.name.common}</h5>
        <h3>Capital: ${object.capital ? object.capital[0] : 'No Capital'}</h3>
        <button class="btn btn-primary" onclick="details('${object.cca2}')">Details</button>
        `;
        countryContainer.appendChild(div);
        div.classList.add('country');
    })
    loaderSection(false)
}

const details = countryData => {
    const url = `https://restcountries.com/v3.1/alpha/${countryData}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
    loaderSection(true)

}

const displayCountryDetail = country => {
    console.log(country);

    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
    <h4>${country.name.common}</h4>
    <img src="${country.flags.png}" alt="" />
    `;
    loaderSection(false)
}

const loaderSection = (isLoading) => {
    const loaderItem = document.getElementById('loader');
    if (isLoading) {
        loaderItem.classList.remove('d-none')
    } else {
        loaderItem.classList.add('d-none')

    }
}

CountryInfo()