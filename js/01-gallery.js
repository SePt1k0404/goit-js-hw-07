import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
let instance;

galleryRef.addEventListener("click", handlerClickImg);

function handlerClickImg(evt) {
  evt.preventDefault();
  const galleryLinkEl = evt.target.closest(".gallery__link");
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  // const galleryLinkAttribHrefEl = galleryLinkEl.getAttribute("href");
  const galleryLinkAttribHrefEl = evt.target.dataset.source;
  const galleryLinkAttribAltEl = galleryLinkEl.children[0].alt;
  instance = basicLightbox.create(
    `
	<img
          class="gallery__image"
          src="${galleryLinkAttribHrefEl}"
          alt="${galleryLinkAttribAltEl}"
        />
`,
    { closable: false } // якщо необхідно опрацьовувати лише Escape
  );
  instance.show();
  if (instance.visible()) {
    document.addEventListener("keydown", handlerModalCloser);
  }
}

function handlerModalCloser(evt) {
  if (!(evt.code === "Escape")) {
    return;
  }
  document.removeEventListener("keydown", handlerModalCloser);
  instance.close();
}

const createGalleryItemMarkup = ({ preview, original, description } = {}) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
        //   data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryItemsMarkup = galleryItems
  .map((item) => createGalleryItemMarkup(item))
  .join("");

galleryRef.innerHTML = galleryItemsMarkup;
