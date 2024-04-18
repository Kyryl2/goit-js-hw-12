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
let search = 0;

const options = {
  captionsData: 'alt',
  captionDelay: 250,
};
const imageModal = new SimpleLightbox('.gallery a', options);

btn.classList.add('is-hidden');

btn.addEventListener('click', morePosts);
form.addEventListener('submit', onClickBtn);

async function onClickBtn(event) {
  event.preventDefault();

  page = 1;
  search = input.value.trim();
  form.reset();

  if (!search) {
    list.innerHTML = '';
    loader.classList.add('is-hidden');
    btn.classList.add('is-hidden');

    return iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      maxWidth: 300,
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

      return iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        maxWidth: 300,
      });
    }
    if (lists.data.total <= limit) {
      list.insertAdjacentHTML(
        'beforeend',
        createGallaryMarkup(lists.data.hits)
      );
      imageModal.refresh();
      btn.classList.add('is-hidden');
      loader.classList.add('is-hidden');
      btn.removeEventListener('click', onClickBtn);
      iziToast.warning({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
        color: 'yellow',
      });
      return;
    }
    list.insertAdjacentHTML('beforeend', createGallaryMarkup(lists.data.hits));
    btn.classList.remove('is-hidden');
    loader.classList.add('is-hidden');

    imageModal.refresh();
  } catch (error) {
    console.log(error);
    btn.classList.add('is-hidden');
    loader.classList.add('is-hidden');
  }
}

async function morePosts() {
  page += 1;
  btn.classList.add('is-hidden');
  loader.classList.remove('is-hidden');
  try {
    const { data } = await getPhotos(search, page, limit);
    const lastPage = Math.ceil(data.totalHits / limit);
    console.log(data);
    if (page === lastPage) {
      btn.classList.add('is-hidden');
      loader.classList.add('is-hidden');
      list.insertAdjacentHTML('beforeend', createGallaryMarkup(data.hits));
      iziToast.warning({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
        color: 'yellow',
      });
      imageModal.refresh();
      const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
      return;
    }
    list.insertAdjacentHTML('beforeend', createGallaryMarkup(data.hits));

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    imageModal.refresh();
    btn.classList.remove('is-hidden');
    loader.classList.add('is-hidden');
  } catch (error) {
    console.log(error);
    btn.classList.add('is-hidden');
    loader.classList.add('is-hidden');
  }
}
