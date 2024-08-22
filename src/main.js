// import imgList from './js/render-functions.js';
import fetchImages from './js/pixabay-api.js';
import { gallery, renderImg } from './js/render-functions.js';


const form = document.querySelector('#searchForm');
const input = document.querySelector('#searchImg');
const listImages = document.querySelector('.list-images');
const loader = document.querySelector('.loader');
const moreBtn = document.querySelector('#moreBtn');



form.addEventListener('submit', async e => {
  e.preventDefault();
  const searchWord = e.target.elements.searchName.value.trim();
  // fetchImages(searchWord);
  try {
    const images = await fetchImages(searchWord); // Ожидаем завершения запроса
    renderImg(images);
    gallery.refresh();
  } catch (error) {
    console.error('Ошибка при получении изображений:', error);
  }
});

