import iziToast from 'izitoast';
import { getPictures } from './pixabay-api';
import { galleryRender } from './render-functions';

const form = document.querySelector('.js-search');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSearch);

function handleSearch(evt) {
  evt.preventDefault();

  const curTarget = evt.currentTarget;
  const Value = curTarget.elements.search.value.trim().toLowerCase();

  if (!Value) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
      timeout: 2000,
    });
    return;
  }

  showLoader();

  getPictures(Value)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          title: 'Warning',
          message: 'Nothing found for your request.',
          position: 'topRight',
          timeout: 2000,
        });
      } else {
        galleryRender(data.hits);
      }
    })
    .catch(onFetchError)
    .finally(() => {
      hideLoader();
      form.reset();
    });
}

function onFetchError(err) {
  console.error('Fetch Error:', err);
  hideLoader();
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
