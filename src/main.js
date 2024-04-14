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
// const quantity = await getPhotos(); // Чи вірно це?
// const totalPages = Math.ceil(quantity.data.totalHits / limit); // Чи вірно це?
const totalPages = Math.ceil(1000 / limit);
btn.classList.add('is-hidden');

btn.addEventListener('click', morePosts);
form.addEventListener('submit', onClickBtn);

async function morePosts() {
  if (page > totalPages) {
    btn.classList.add('is-hidden');
    return iziToast.error({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  }

  try {
    page += 1;
    btn.classList.add('is-hidden');
    loader.classList.remove('is-hidden');
    const search = input.value.trim(); // Чому якщо прибрати змінну search з функції і залишити в глобальному, то з другого кліка вже не знаходить значення інпута, а бачить порожній інпут???

    const morePhotos = await getPhotos(search, page, limit);
    list.insertAdjacentHTML(
      'beforeend',
      createGallaryMarkup(morePhotos.data.hits)
    );
    btn.classList.remove('is-hidden');
    loader.classList.add('is-hidden');
  } catch (error) {
    console.log(error);
  }
}

async function onClickBtn(event) {
  event.preventDefault();
  const search = input.value.trim();

  if (!search) {
    list.innerHTML = '';
    loader.classList.add('is-hidden');
    btn.classList.add('is-hidden');
    event.target.reset();

    return iziToast.error({
      message: 'Поле для введення не має бути порожнім!',
      position: 'topRight',
      timeout: 2000,
      color: 'yellow',
    });
  }
  list.innerHTML = '';
  try {
    loader.classList.remove('is-hidden');
    btn.classList.add('is-hidden');
    const lists = await getPhotos(search, 1);
    if (lists.data.hits.length === 0) {
      list.innerHTML = '';
      loader.classList.add('is-hidden');
      btn.classList.add('is-hidden');
      form.reset();

      iziToast.error({
        message: 'За вашим пошуковим словом, зображень не знайдено!',
        position: 'topRight',
        timeout: 2000,
      });
      return;
    }

    list.insertAdjacentHTML('beforeend', createGallaryMarkup(lists.data.hits));
    btn.classList.remove('is-hidden');
    loader.classList.add('is-hidden');
    const options = {
      captionsData: 'alt',
      captionDelay: 250,
    };
    const imageModal = new SimpleLightbox('.gallery a', options);
    imageModal.refresh();
  } catch (error) {
    console.log(error);
  }
}
