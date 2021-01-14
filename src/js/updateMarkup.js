import countryTpl from '../templates/showCountry.hbs';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

const refs = {
  countryContainer: document.querySelector('.js-country'),
};

function updateMarkup(country) {
  let markup = '';
  if (country.status != '404'){
    if (country.length === 1) {
      markup = countryTpl(country[0]);
    } else if (country.length <= 10) {
      markup = country.map(({ name }) => `<p>- ${name}</p>`).join('');
    } else {
      error({
        title: 'Too many matches found. Please enter a more specific query!',
        hide: true,
        delay: 3000,
      });
    }
  } else{
    error({
        title: 'Country not found!',
        hide: true,
        delay: 3000,
      });
  }
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
