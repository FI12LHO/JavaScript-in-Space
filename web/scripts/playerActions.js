import { openPopup } from "./menu.js";

/**
 * @param {HTMLElement} playerElement 
 * @returns {void}
 */
export const jump = (playerElement) => {
    playerElement.setAttribute('state', 'jump');
    playerElement.setAttribute('style', 'top: calc(100vh / 2 - 20%); height: 40px;');
};

/**
 * @param {HTMLElement} playerElement 
 * @returns {void}
 */
export const notJump = (playerElement) => {
    playerElement.removeAttribute('state');
    playerElement.removeAttribute('style');
};

/**
 * @param {HTMLElement} playerElement 
 * @returns {void|null}
 */
export const lower = (playerElement) => {
    playerElement.setAttribute('state', 'lower');
    playerElement.setAttribute('style', 'top: calc(100vh / 2 + 20%); height: 40px;');
};

/**
 * @param {HTMLElement} playerElement 
 * @returns {void}
 */
export const notLower = (playerElement) => {
    playerElement.removeAttribute('state');
    playerElement.removeAttribute('style');
};

/**
 * @param {String} action 
 * @param {Number} loopId 
 * @returns {void}
 */
export const die = (action, loopId = null) => {
    console.log(action);

    // alert("You're dead!!");

    clearInterval(loopId);

    openPopup(document.querySelector('#game-over-container'));
};