const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentPhotoIndex = 0;
let currentPhotoArray = [];

function openLightbox(photos, photoId) {
    currentPhotoArray = photos;
    currentPhotoIndex = photos.findIndex(photo => photo.id == photoId);
    
    if (currentPhotoIndex !== -1) {
        lightboxImg.src = photos[currentPhotoIndex].src;
        lightboxCaption.textContent = photos[currentPhotoIndex].caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function updateLightbox() {
    lightboxImg.src = currentPhotoArray[currentPhotoIndex].src;
    lightboxCaption.textContent = currentPhotoArray[currentPhotoIndex].caption;
}

function closeLightboxHandler() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function navigatePrev() {
    currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotoArray.length) % currentPhotoArray.length;
    updateLightbox();
}

function navigateNext() {
    currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotoArray.length;
    updateLightbox();
}


closeLightbox.addEventListener('click', closeLightboxHandler);
prevBtn.addEventListener('click', navigatePrev);
nextBtn.addEventListener('click', navigateNext);


document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightboxHandler();
        } else if (e.key === 'ArrowLeft') {
            navigatePrev();
        } else if (e.key === 'ArrowRight') {
            navigateNext();
        }
    }
});


lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightboxHandler();
    }
});