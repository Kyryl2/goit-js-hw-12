export function createGallaryMarkup(array) {
  return array
    .map(
      image =>
        `<li class="gallery-item">
        <div class ="foto"><a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}"></a></div>
        
        <div class = "under-photo">
        
        <div class ="info"><h3>Likes</h3><p>${image.likes}</p></div>
      
      <div class ="info"><h3>Views</h3>
      <p>${image.views}</p></div>
      
      <div class ="info"><h3>Comments</h3>
      <p>${image.comments}</p></div>
      
      <div class ="info"> <h3>Downloads</h3>
      <p>${image.downloads}</p></div>
     
</div>


      </li>`
    )
    .join('');
}
