window.onload = fadeIn; 
          
function fadeIn() { 
    var fade = document.getElementById("body"); 
    var opacity = 0; 
    var intervalID = setInterval(function() { 
  
        if (opacity < 1) { 
            opacity = opacity + 0.1 
            fade.style.opacity = opacity; 
        } else { 
            clearInterval(intervalID); 
        } 
    }, 200); 
} 
  
function fadeInImages() {
    const images = document.querySelectorAll('.pinphoto img');
  
    images.forEach((image, index) => {
      image.style.opacity = 0;
      image.style.transition = 'opacity 1s ease';
      setTimeout(() => {
        image.style.opacity = 1;
      }, 100);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    fadeInImages();
  });
  
  window.addEventListener('beforeunload', () => {
    const images = document.querySelectorAll('.pinphoto img');
    images.forEach((image) => {
      image.style.opacity = 0;
    });
  });
  
  setTimeout(() => {
    fadeInImages();
  }, 500);

