import { galleryItems } from './gallery-items.js';
// Change code below this line

{/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> */}

const galleryImageContainer = document.querySelector(".gallery");
const markupImage = createImageElement(galleryItems);
galleryImageContainer.insertAdjacentHTML('beforeend', markupImage);

function createImageElement(params) {
    return params.map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`  
    }).join('')
}


const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    overlayOpacity: 0.4,
    captionDelay: 250,
    captionPosition: 'bottom'
});

console.log(galleryItems);
