// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }

  const squares = document.querySelectorAll('.square');

squares.forEach((square, index) => {
    setTimeout(() => {
        square.style.transform = 'translateX(0)';
        square.style.transform = 'translate(-50%, -50%)';
    }, 1000 * index);
});

// JavaScript for the image gallery with lightbox

const gallery = document.querySelector('.photo-gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.close');

// Function to open the lightbox with a specific image
function openLightbox(imageSrc) {
    lightboxContent.innerHTML = `<img src="${imageSrc}" alt="">`;
    lightbox.style.display = 'block';
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Attach click event listeners to each thumbnail
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const imageSrc = e.target.src;
        openLightbox(imageSrc);
    }
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', closeLightbox);

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close the lightbox with the Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

