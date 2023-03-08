import { jump, lower, notJump, notLower } from "./playerActions.js";
import { check, createNewFrame, setScore } from "./rules.js";
import { getModels } from "./util.js";

const Player = document.querySelector('#player');

/**
 * @param {String} action
 * @returns {void}
 */
const keydown = (action) => {
    if (action == 'jump') {
        jump(Player);
    }

    if (action == 'lower') {
        lower(Player);
    }
}

/**
 * @param {String} action
 * @returns {void}
 */
const keyup = (action) => {
    if (action == 'jump') {
        notJump(Player);
    }

    if (action == 'lower') {
        notLower(Player);
    }
}

/**
 * @param {Array<JSON>} data
 * @returns {void}
 */
const carousel = (data) => {
    // Elemento pai
    const main = document.querySelector('#main-frame');

    // Lista
    let frames = Array();

    // Obtendo filhos do elemento pai e adicionando a lista
    document.querySelectorAll('[data-type=frame]').forEach(item => frames.push(item));

    // Adicionando elemento criado a lista
    frames.push(createNewFrame(frames, data));

    // Limpando elemento pai
    main.innerHTML = '';

    // Removendo o 1 item da lista (index 0)
    frames = frames.slice(1, frames.length);

    // Anexando cada item da lista como um filho ao elemento pai
    frames.forEach(item => main.append(item));
};

const loop = setInterval(async () => {
    const data = await getModels();

    // clearInterval(loop);

    check(
        document.querySelectorAll('[data-type=frame]')[4],
        Player,
        loop
    );

    setScore(document.querySelector('#score'));

    carousel(data);
}, 150);

document.addEventListener('keypress', (e) => {
    if (e.key.toLowerCase() == 'w') keydown('jump');
    if (e.key.toLowerCase() == 's') keydown('lower');
});

document.addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() == 'w') keyup('jump');
    if (e.key.toLowerCase() == 's') keyup('lower');
});