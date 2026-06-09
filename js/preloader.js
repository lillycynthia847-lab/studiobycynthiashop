document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');

  // Exit preloader after 3.2s
  setTimeout(() => {
    preloader.classList.add('exit');

    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000);

  }, 3200);
});
