import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.list-images a', {
  captionsDelay: 250,
  captionsData: 'alt',
});

function renderImg(images) {
  const markup = images.map(img => {
    listImages.insertAdjacentHTML(
      'afterbegin',
      `<li class="photo-item">
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
    );
  });
  return markup;
}

export { gallery, renderImg };
