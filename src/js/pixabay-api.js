import axios from 'axios';
export async function getPhotos(q, page) {
  const API_KEY = '43212506-95870309335e8ebf3ea9c8656';
  const baseUrl = 'https://pixabay.com';
  const endPoint = '/api/';
  const parameters = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  });

  const response = await axios.get(`${baseUrl}${endPoint}?${parameters}`);

  return response;
}
