import { galleryItems } from "./gallery-items.js";
// Change code below this lineimport { galleryItems } from './gallery-items.js';

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join("");
}

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);

galleryContainer.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const imagePath = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${imagePath}" width="800" height="600">
    `);

    instance.show();
  }
}

console.log(galleryItems);
