import countrieTpl from '../templates/showCountrie.hbs';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

const refs = {
  countrieContainer: document.querySelector('.js-countrie'),
};

function updateMarkup(countrie) {
  let markup = '';
  if (countrie.length === 1) {
    markup = countrieTpl(countrie[0]);
  } else if (countrie.length <= 10) {
    markup = countrie.map(({ name }) => `<p>- ${name}</p>`).join('');
  } else {
    error({
      title: 'Too many matches found. Please enter a more specific query!',
      hide: true,
      delay: 3000,
    });
  }
  refs.countrieContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
