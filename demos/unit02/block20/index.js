const words = [];

const form = document.querySelector("form");
const output = document.querySelector("output");

// This function covers event bubbling - we attach the event listener to the parent so that we don't have to attach it to each child

// Listening for `submit` is almost always better than the button `click`

/**
 * Update the output to reflect `words`
 */
function render() {}

/**
 * If the user clicks on a word, remove it from the sentence.
 * @param {Event} event the deepest element that was clicked
 */
function onWordClick(event) {}

/**
 * Add the submitted word into `words`, clear the form, and rerender.
 */
function addWord(event) {}
