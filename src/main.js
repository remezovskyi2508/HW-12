// import imgList from './js/render-functions.js';
import fetchImages from './js/pixabay-api.js';
import {renderImg, clearGallery} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#searchForm');
const loader = document.querySelector('.loader');
const moreBtn = document.querySelector('#moreBtn');

let currentPage = 1;
let searchWord = '';
let totalPage = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();
  clearGallery();//чистимо галерею перед пошуком нових

  searchWord = e.target.elements.searchName.value.trim();
  
  if (searchWord === '') {
    iziToast.error({
      message: 'Будь ласка, введіть пошуковий запит.',
    });
    return;
  }

  currentPage = 1;

  loader.classList.remove('is-hidden');

  try {
    const { images } = await fetchImages(searchWord, currentPage); // Ожидаем завершения запроса
    if (images.length === 0) {
      iziToast.error({
        message: 'Пошуковий запит не дав результату.',
      });
      loader.classList.add('is-hidden');
      return;
    }

    renderImg(images);
    loader.classList.add('is-hidden');
    moreBtn.style.display = 'block';
    form.reset();

  } catch (error) {
    console.error('Ошибка при получении изображений:', error);
  }
});

moreBtn.addEventListener('click', async event => {
  event.preventDefault();
  currentPage++;

  moreBtn.style.display = 'none';
  loader.classList.remove('is-hidden');

  try {
    const { totalHits, images } = await fetchImages(searchWord, currentPage); // Ожидаем завершения запроса
    totalPage = Math.ceil(totalHits / 15);

    if (currentPage > totalPage) {
      iziToast.error({
        message: 'На жаль більше немає картинок в галереї',
      });

      moreBtn.style.display = 'none';
      loader.classList.add('is-hidden');
      return;
    }
    
    renderImg(images);
    loader.classList.add('is-hidden');
    moreBtn.style.display = 'block';
  } catch (error) {
    console.error('Ошибка при получении изображений:', error);
  }
});
