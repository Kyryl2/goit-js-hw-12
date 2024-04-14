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
const btn = document.querySelector('.load-more-btn');
let page = 1;

const limit = 15;
const search = input.value.trim();
const totalPages = Math.ceil(100 / limit);

const API_KEY = '43212506-95870309335e8ebf3ea9c8656';
const baseUrl = 'https://pixabay.com';
const endPoint = '/api/';

btn.addEventListener('click', morePosts);

const parameters = new URLSearchParams({
  key: API_KEY,
  q,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: limit,
  page,
});

async function morePosts() {
  if (page > totalPages) {
    return iziToast.error({
      position: 'topRight',
      message: "We're sorry, there are no more posts to load",
    });
  }

  try {
    page += 1;
    const response = await axios.get(`${baseUrl}${endPoint}?${parameters}`);
    list.insertAdjacentHTML(
      'beforeend',
      createGallaryMarkup(response.data.hits)
    );

    if (page > 1) {
      btn.classList.add('is-hidden');
    }
  } catch (error) {
    console.log(error);
  }
}

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
  getPhotos(search, 1, limit)
    .then(response => {
      if (response.data.hits.length === 0) {
        list.innerHTML = '';

        form.reset();

        iziToast.error({
          message: 'За вашим пошуковим словом, зображень не знайдено!',
          position: 'topRight',
          timeout: 2000,
        });
        return;
      }

      list.innerHTML = createGallaryMarkup(response.data.hits);
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
