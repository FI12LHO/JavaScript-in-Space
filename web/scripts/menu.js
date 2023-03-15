/**
 * @param {HTMLElement} container 
 */
const closePopup = (container) => {
    container.style.display = 'none';
    document.querySelector('#start-game').value = 'true';
};

/**
 * @param {HTMLElement} container 
 */
const openPopup = (container) => {
    document.querySelector('#start-game').value = 'false';
    container.style.display = 'flex';
};

document.querySelector('#btn-start-game').addEventListener('click', (e) => closePopup(
    document.querySelector('#menu-container')
));