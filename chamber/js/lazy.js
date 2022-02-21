
// lazy loading

let imagesToLoad = document.querySelectorAll('img[data-src]');

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }
  img.src = src;
}

imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px 100px 0px"
};

imageObserver = new IntersectionObserver((entries, imageObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imageObserver.unobserve(entry.target);
    }
  })
}, imageOptions);

imagesToLoad.forEach(image => {
  imageObserver.observe(image);
});