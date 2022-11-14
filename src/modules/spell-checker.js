/**
 * This implements the core spell check functionality.
 */

import checkDictionary from "./dictionary.js";
import {search as checkPersonalDictionary, addWord} from "./personal-dictionary.js"

//Take a string of English text and split it into an array
//of words and non-words. Spaces, punctuation, numbers, etc are
//all included.
//
//  Example:
//      "Hello, friend!" -> ["Hello", ", ", "friend", "!"]
function splitIntoWords(text){
    return text.split(/\b/);
}

//This function returns true if the given string is a word.
function isWord(aString){
    return aString.match(/\w/) != null;
}

//This function returns true if the word is spelled right.
//It will also return true if the word is not a word.
function isSpelledRight(word){
    if ( !isWord(word) )
        return true;
    else if ( checkDictionary(word.toLowerCase()) )
        return true;
    else if ( checkPersonalDictionary(word.toLowerCase()) )
        return true;
    else
        return false;
}

export { splitIntoWords, isSpelledRight, addWord };
