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

    for (let i = 1; i <= 5; i++) {
        if (frames[frames.length - i].getAttribute('action') != 'walk') {
            noAction = true;
            break;
        }
    }

    if (!noAction) {
        model = shuffleArray(models)[0];

    } else {
        // O primeiro item da lista de modulos por padrao nao tem acao
        model = models[0];
    }

    const newElement = document.createElement(model.tag);
    newElement.setAttribute('data-type', 'frame');
    newElement.className = model.class;
    newElement.setAttribute('action', model.action);
    newElement.appendChild(document.createElement('div'));

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