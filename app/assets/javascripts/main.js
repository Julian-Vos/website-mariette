Array.prototype.forEach.call(document.querySelectorAll('button.nav-item'), function(element) {
  element.addEventListener('click', function() {
    document.getElementById(element.getAttribute('data-target')).scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  });
});

function resizeImages() {
  Array.prototype.forEach.call(document.querySelectorAll('.section-image'), function(element) {
    element.style.height = element.parentNode.querySelector('.section-text').getBoundingClientRect().height + 'px';
  });
}

window.addEventListener('load', resizeImages);
window.addEventListener('resize', resizeImages);
