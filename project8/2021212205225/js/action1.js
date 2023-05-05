const enlarge = document.querySelector('.enlarge');
const images = document.querySelectorAll('img');
const enlargeImg = document.querySelector('.enlarge_img img');
const enlarge_img = document.querySelector('.enlarge_img');

images.forEach(img => {
  img.addEventListener('click', () => {
    enlarge.style.display = 'block';
    enlargeImg.src = img.src;
  });
});


window.addEventListener('click', e => {
  if (e.target == enlarge || e.target == enlargeImg || e.target == enlarge_img) {
    enlarge.style.display = 'none';
  }
});
