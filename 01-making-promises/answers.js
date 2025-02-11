
/**
 * 
 * EXERCISE 1
 * 
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3(){
    return Promise.resolve(3);
}

/**
 * 
 * EXERCISE 2
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
    return new Promise((_, reject) => reject("Boo!") );
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve){
  return new Promise((resolve, reject) => itShouldResolve ? resolve() : reject());
}

/**
 * 
 * EXERCISE 4
 *
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
    return new Promise((resolve, reject) => setTimeout(f => resolve(value), delayInMs));
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};
