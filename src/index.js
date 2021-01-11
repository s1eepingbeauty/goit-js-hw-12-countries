import './styles.css';
import fetchCountries from './js/fetchCountries';
import { debounce } from 'lodash';
import updateMarkup from './js/updateMarkup';

const refs = {
  searchCountrie: document.querySelector('.js-search'),
  countrieContainer: document.querySelector('.js-countrie'),
};

refs.searchCountrie.addEventListener(
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
  refs.countrieContainer.innerHTML = '';
}
