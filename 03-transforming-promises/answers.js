/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
    return new Promise((resolve, reject) =>
        promise
            .then(transformer)
            .then(resolve)
            .catch(reject)
    );
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
    return numberPromise
        .then(x => {
            if (typeof x === 'number') {
                return Promise.resolve(x * x)
            } else if (typeof x === 'string') {
                var converted = Number(x);
                if (converted === converted) {
                    return Promise.resolve(converted * converted);
                } else {
                    return Promise.reject('Cannot convert \'' + x + '\' to a number!');
                }
            }
        });
} 

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
    return numberPromise
        .then(x => {
            if (typeof x === 'number') {
                return Promise.resolve(x * x)
            } else if (typeof x === 'string') {
                var converted = Number(x);
                if (converted === converted) {
                    return Promise.resolve(converted * converted);
                } else {
                    console.log("look: " + x);
                    return Promise.reject('Cannot convert \'' + x + '\' to a number!');
                }
            }
        });

}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(/* IMPLEMENT ME */);
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
