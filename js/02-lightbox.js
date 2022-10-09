import { galleryItems } from "./gallery-items.js";

const imageContainer = document.querySelector(".gallery");
const imageMarkup = createGalleryMarkup(galleryItems);

imageContainer.insertAdjacentHTML("beforeend", imageMarkup);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `    <li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                  </li>
               `;
    })
    .join("");
}
new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

imageContainer.addEventListener("click", onContainerClickEvent);

function onContainerClickEvent(evt) {
  evt.preventDefault();

  isImgFromContainerFunction(evt);
}

function isImgFromContainerFunction(evt) {
  const isImgFromContainer = evt.target.classList.contains("gallery__image");

  !isImgFromContainer?.return;
}
