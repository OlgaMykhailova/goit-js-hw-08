// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const divContainer = document.querySelector(".gallery");

const galleryImages = galleryItems
  .map(
    (galleryImage) =>
      `<a class="gallery__item" href="${galleryImage.original}">
  <img
    class="gallery__image"
    src="${galleryImage.preview}"
    alt="${galleryImage.description}"
   />
</a>`
  )
  .join("");

divContainer.innerHTML = galleryImages;

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});
