/**
 * This module defines a personal dictionary. It exports
 * a search function, and an addWord function that may be
 * used to add a word.
 * 
 * It is initially empty.
 * Search is case sensitive.
 */

//An array of words, initially empty
let words = [];

//This function searches the words array for the word
//parameter and returns true if it is found, false
//otherwise
function search(word){
    return words.includes(word);
}

//This function adds the provided word to the words
//array
function addWord(word){
    words.push(word);
}

export {search, addWord};