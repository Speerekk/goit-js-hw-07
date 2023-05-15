import { galleryItems } from "./gallery-items.js";

// Render gallery items
const galleryList = document.querySelector(".gallery");

const createGalleryItem = (item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
};

const renderGallery = (items) => {
  const galleryItems = items.map((item) => createGalleryItem(item));
  galleryList.append(...galleryItems);
};

renderGallery(galleryItems);

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
