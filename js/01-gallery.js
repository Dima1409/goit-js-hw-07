import { galleryItems } from "./gallery-items.js";

// Change code below this line

{
  /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */
}

const galleryImageContainer = document.querySelector(".gallery"); //! вибір контейнера

const markupImage = createImageElement(galleryItems); //! вихідний HTML код в результаті виклику функції на galeryItems

galleryImageContainer.insertAdjacentHTML("beforeend", markupImage); //! вставлення вихідного коду в розмітку HTML

function createImageElement(params) {
  //! створення функції, яка перебирає масив і повертає результат у вигляді рядка
  return params
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
    </a>
  </div>`;
    })
    .join("");
}
//! відкриття модального вікна
galleryImageContainer.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  //   console.log(event.target);
  const scrImage = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${scrImage}" width="800" height="600">
`);

  instance.show();

  //! закриття на escape
  document.addEventListener("keydown", onEscapeDown);

  function onEscapeDown(event) {
    if (!basicLightbox) {
      return;
    }
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
console.log(galleryItems);
