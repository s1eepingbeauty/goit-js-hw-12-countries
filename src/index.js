import './styles.css';
import fetchCountries from './js/fetchCountries';
import { debounce } from 'lodash';
import updateMarkup from './js/updateMarkup';

const refs = {
  searchCountry: document.querySelector('.js-search'),
  countryContainer: document.querySelector('.js-country'),
};

refs.searchCountry.addEventListener(
  'input',
  _.debounce(event => {
    const value = event.target.value;
    if (value.length > 0) {
      updateScreen();
      fetchCountries(value).then(data => updateMarkup(data));
    } else if (value.length == '') {
      updateScreen();
    }
  }, 1000),
);

function updateScreen() {
  refs.countryContainer.innerHTML = '';
}
