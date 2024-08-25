import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const listImages = document.querySelector('.list-images');

const gallery = new SimpleLightbox('.list-images a', {
  captionsDelay: 250,
  captionsData: 'alt',
});

function renderImg(images) {
  const markup = images
    .map(
      img => `<li class="photo-item">
        <a href="${img.largeImageURL}">
          <div class="wrapper">
            <img class="img-item" src="${img.webformatURL}" alt="${img.tags}"/>
              <div class="descr-wrapper">
                <div class="descr">
                  <p class="label-img">Likes</p>
                  <span>${img.likes}</span>
                </div>
                <div class="descr">
                  <p class="label-img">Views</p>
                  <span>${img.views}</span>
                </div>
                <div class="descr">
                  <p class="label-img">Comments</p>
                  <span>${img.comments}</span>
                </div>
                <div class="descr">
                  <p class="label-img">Downloads</p>
                  <span>${img.downloads}</span>
                </div>
              </div>
          </div>

        </a>
      </li>`
    )
    .join('');

  listImages.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}

function clearGallery() {
  listImages.innerHTML = '';
}

export { gallery, renderImg, clearGallery };
