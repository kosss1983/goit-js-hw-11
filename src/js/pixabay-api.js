export { fetchImages };

const API_KEY = '46160271-30a7facc458188e9573ebab80';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(params) {
  const urlParams = new URLSearchParams(params);

  return fetch(`${BASE_URL}?key=${API_KEY}&${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error('Bad Request!');
    }

    return response.json();
  });
}
