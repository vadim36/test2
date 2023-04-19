const openButton = document.querySelector('.card__button-modal');
const submitButton = document.querySelector('.card__button-submit');
const closeButton = document.querySelector('.modal__close-button');

const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
openButton.addEventListener('click', () => modal.showModal());
closeButton.addEventListener('click', () => {
   modal.classList.add('hide');
   modal.addEventListener('webkitAnimationEnd', () => {
      modal.classList.remove('hide');
      modal.close();
   }, { once: true});
});
submitButton.addEventListener('click', () => {
   modalTitle.innerHTML = 'Форма отправлена';
   modal.showModal();
})