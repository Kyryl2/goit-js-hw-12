export function getPhotos(q) {
  const parameters = new URLSearchParams({
    key: '43212506-95870309335e8ebf3ea9c8656',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${parameters}`, {
    header: {
      'Access-Control-Allow-Origin': 'https://pixabay.com',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
