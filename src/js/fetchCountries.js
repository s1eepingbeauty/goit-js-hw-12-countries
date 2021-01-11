function fetchCountries(searchQuery) {
  return fetch(
    `https://restcountries.eu/rest/v2/name/${searchQuery}?fields=name;capital;population;languages;flag`, //?fields=name;capital;population;languages;flag
  ).then(response => response.json());
}

export default fetchCountries;
