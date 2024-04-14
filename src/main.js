import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPhotos } from './js/pixabay-api.js';
import { createGallaryMarkup } from './js/render-functions.js';

const form = document.querySelector('.js-form');
const input = document.querySelector('.input');
const list = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onClickBtn);

function onClickBtn(event) {
  event.preventDefault();
  const search = input.value.trim();

  if (!search) {
    list.innerHTML = '';

    event.target.reset();

    return iziToast.error({
      message: 'Поле для введення не має бути порожнім!',
      position: 'topRight',
      timeout: 2000,
      color: 'yellow',
    });
  }
  loader.classList.remove('is-hidden');

  list.innerHTML = '';
  getPhotos(search)
    .then(obj => {
      if (obj.hits.length === 0) {
        list.innerHTML = '';

        form.reset();

        iziToast.error({
          message: 'За вашим пошуковим словом, зображень не знайдено!',
          position: 'topRight',
          timeout: 2000,
        });
        return;
      }

      list.innerHTML = createGallaryMarkup(obj.hits);
      const options = {
        captionsData: 'alt',
        captionDelay: 250,
      };
      const imageModal = new SimpleLightbox('.gallery a', options);
      imageModal.refresh();
    })

    .catch(error => console.log(error))
    .finally(() => {
      loader.classList.add('is-hidden');
    });
}
