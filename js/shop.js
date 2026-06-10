document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('preview-modal');
  const closeBtn = document.querySelector('.modal-close');
  const previewBtns = document.querySelectorAll('.preview-btn');
  const iframeContainer = document.getElementById('canva-embed-container');

  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-description');

  // Open modal
  previewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const title = btn.getAttribute('data-title');
      const category = btn.getAttribute('data-category');
      const desc = btn.getAttribute('data-desc');
      const embedUrl = btn.getAttribute('data-embed');

      modalTitle.textContent = title;
      modalCategory.textContent = category;
      modalDesc.textContent = desc;

      // Inject iframe
      iframeContainer.innerHTML = `<iframe src="${embedUrl}" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>`;

      // Show modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  // Close modal
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Clear iframe to stop playback/loading in background
    setTimeout(() => {
      iframeContainer.innerHTML = '';
    }, 400); // match transition duration
  };

  closeBtn.addEventListener('click', closeModal);

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});
