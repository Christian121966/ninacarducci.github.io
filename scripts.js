$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

function mauGallery(element, options) {
    console.log("Initialisation de mauGallery avec les options :", options);
    
    element.innerHTML = "<p>mauGallery initialisée !</p>"; 
}



/*document.addEventListener('DOMContentLoaded', function() {
    var galleryElement = document.querySelector('.gallery');
    if (galleryElement) {
        mauGallery(galleryElement, {
            columns: {
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3
            },
            lightBox: true,
            lightboxId: 'myAwesomeLightbox',
            showTags: true,
            tagsPosition: 'top'
        });
    }
});*/
