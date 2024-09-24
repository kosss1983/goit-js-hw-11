import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export { createGallery, removeGallery };

const gallery = document.querySelector('.gallery');

function createGallery(hits) {
  const galleryItems = hits
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
            <a class="gallery-link" href="${largeImageURL}">
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    data-source="${largeImageURL}"
                    alt="${tags}"
                />
                <div class="image-descrition">
                    <div>
                        <span class="image-descrition-font">Likes</span>
                        <span class="image-descrition-font">${likes}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Views</span>
                        <span class="image-descrition-font">${views}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Comments</span>
                        <span class="image-descrition-font">${comments}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Downloads</span>
                        <span class="image-descrition-font">${downloads}</span>
                    </div>
                </div>
            </a>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryItems);
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();
}

function removeGallery() {
  gallery.innerHTML = '';
}
