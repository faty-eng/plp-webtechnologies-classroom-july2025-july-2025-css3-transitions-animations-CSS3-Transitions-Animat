// Reusable function to toggle classes
function toggleClass(el, className) {
  if (el) el.classList.toggle(className);
}

// Move box animation
const moveBoxBtn = document.getElementById('moveBoxBtn');
const box = document.getElementById('box');

moveBoxBtn.addEventListener('click', () => {
  toggleClass(box, 'move');
});

// Modal logic
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModal.addEventListener('click', () => modal.classList.remove('hidden'));
closeModal.addEventListener('click', () => modal.classList.add('hidden'));
