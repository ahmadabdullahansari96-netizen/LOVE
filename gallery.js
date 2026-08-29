/* =========================================
   SELECT ELEMENTS
========================================= */

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


/* =========================================
   VARIABLES
========================================= */

let currentIndex = 0;


/* =========================================
   GET IMAGE SOURCES
========================================= */

const images = Array.from(galleryItems).map((item) => {
    return item.querySelector("img").src;
});


/* =========================================
   OPEN LIGHTBOX
========================================= */

function openLightbox(index) {

    currentIndex = index;

    lightboxImage.src = images[currentIndex];

    lightbox.classList.add("active");

    // Prevent background scrolling
    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE LIGHTBOX
========================================= */

function closeLightbox() {

    lightbox.classList.remove("active");

    // Allow scrolling again
    document.body.style.overflow = "";
}


/* =========================================
   SHOW IMAGE
========================================= */

function showImage(index) {

    if (index < 0) {
        currentIndex = images.length - 1;
    } 
    else if (index >= images.length) {
        currentIndex = 0;
    } 
    else {
        currentIndex = index;
    }

    lightboxImage.src = images[currentIndex];
}


/* =========================================
   NEXT IMAGE
========================================= */

function nextImage() {
    showImage(currentIndex + 1);
}


/* =========================================
   PREVIOUS IMAGE
========================================= */

function previousImage() {
    showImage(currentIndex - 1);
}


/* =========================================
   GALLERY CLICK
========================================= */

galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {
        openLightbox(index);
    });

});


/* =========================================
   BUTTON EVENTS
========================================= */

closeBtn.addEventListener("click", closeLightbox);

nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", previousImage);


/* =========================================
   CLICK OUTSIDE IMAGE
========================================= */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }

});


/* =========================================
   MOBILE SWIPE
========================================= */

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart", (event) => {

    touchStartX = event.changedTouches[0].screenX;

});


lightbox.addEventListener("touchend", (event) => {

    touchEndX = event.changedTouches[0].screenX;

    handleSwipe();

});


function handleSwipe() {

    const swipeDistance = touchEndX - touchStartX;

    // Swipe left → next
    if (swipeDistance < -50) {
        nextImage();
    }

    // Swipe right → previous
    if (swipeDistance > 50) {
        previousImage();
    }

}
