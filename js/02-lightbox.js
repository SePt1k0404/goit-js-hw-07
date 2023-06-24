import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const createGalleryItemMarkup = ({ preview, original, description } = {}) => {
  return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
</li>
  `;
};

const galleryItemsMarkup = galleryItems
  .map((item) => createGalleryItemMarkup(item))
  .join("");

galleryRef.innerHTML = galleryItemsMarkup;

let gallery = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
