import { die } from "./playerActions.js";
import { shuffleArray } from "./util.js";

/**
 * @param {HTMLElement} frame
 * @param {HTMLElement} player
 * @param {Number} loopId 
 * @returns {void}
 */
export const check = (frame, player, loopId = null) => {
    const playerState = player.getAttribute('state');

    if (frame.getAttribute('action') == 'jump') {
        if (playerState != 'jump') die('Not jump', loopId);
    }

    if (frame.getAttribute('action') == 'lower') {
        if (playerState != 'lower') die('Not lower', loopId);
    }
}

/**
 * @param {array} frames 
 * @param {JSON} models
 * @returns {HTMLElement}
 */
export const createNewFrame = (frames, models) => {
    let noAction = false;
    let model = null;
    let child = document.createElement('img');
    const numFrames = updateLevel(getScore(document.querySelector('#score')));

    for (let i = 1; i <= 5 - numFrames; i++) {
        if (frames[frames.length - i].getAttribute('action') != 'walk') {
            noAction = true;
            break;
        }
    }

    if (!noAction) {
        model = shuffleArray(models)[0];
        child.style.backgroundPosition = shuffleArray(['center', 'bottom', 'revert'])[0];
        child.style.opacity = Math.random() * (1 - 0.5) + 0.5;
    } else {
        // O primeiro item da lista de modulos por padrao nao tem acao
        model = models[0];
    }

    const newElement = document.createElement(model.tag);
    newElement.setAttribute('data-type', 'frame');
    newElement.className = model.class;
    newElement.setAttribute('action', model.action);
    newElement.appendChild(child);

    return newElement;
}

/**
 * @param {HTMLElement} element 
 * @returns {Int}
 */
export const getScore = (element) => {
    return parseInt(element.innerText);
};

/**
 * @param {HTMLElement} element 
 * @returns {void}
 */
export const setScore = (element) => {
    let score = getScore(element) + 1;

    element.innerText = score;
};

/**
 * @param {Int} score 
 * @returns {Int}
 */
const updateLevel = (score) => {
    if (score >= 200 && score <= 400) return 1;

    if (score > 400 && score <= 500) return 2;

    if (score > 500 && score <= 1000) return 3;

    if (score > 1000) return 4;

    return 0;
};