/**
 * @param {Array} arr 
 * @returns {Array}
 */
export const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

/**
 * @returns {JSON}
 */
export const getModels = async () => {
    return await $.getJSON('' + 'config.json', data => data).then(json => json.models);
}