import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageContainer = document.querySelector(".gallery");
const imageMarkup = createGalleryMarkup(galleryItems);
imageContainer.insertAdjacentHTML("beforeend", imageMarkup);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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

imageContainer.addEventListener("click", onContainerClickTakesImgUrl);

function onContainerClickTakesImgUrl(evt) {
  evt.preventDefault();

  const isImgFromContainer = evt.target.classList.contains("gallery__image");

  if (!isImgFromContainer) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`);

  instance.show();

  window.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });

  const visible = basicLightbox.visible();

  if (!visible) {
    window.removeEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
        instance.close();
      }
    });
  }
}
