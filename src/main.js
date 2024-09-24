import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { createGallery, removeGallery } from './js/render-functions';

let imageName = '';
const imageForm = document.querySelector('.form-image');
const loader = document.querySelector('.loader');

const fetchParams = {
  q: imageName,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};
const optionsiziToast = {
  messageColor: 'white',
  backgroundColor: 'red',
  position: 'topRight',
  message:
    'Sorry, there are no images matching your search query. Please try again!',
};

const onSubmitForm = event => {
  const { imageName } = event.currentTarget.elements;
  fetchParams.q = imageName.value;

  event.preventDefault();
  event.currentTarget.reset();

  removeGallery();
  showLoader();

  fetchImages(fetchParams)
    .then(resp => {
      if (resp.hits.length) {
        createGallery(resp.hits);
      } else {
        showError(false);
      }
    })
    .catch(error => showError(error))
    .finally(hideLoader);
};

const showLoader = () => {
  loader.innerHTML = '<span></span>';
};

const hideLoader = () => {
  loader.innerHTML = '';
};

const showError = error => {
  optionsiziToast.message =
    typeof error === 'object' ? error.message : optionsiziToast.message;
  iziToast.error(optionsiziToast);
};

imageForm.addEventListener('submit', onSubmitForm);
