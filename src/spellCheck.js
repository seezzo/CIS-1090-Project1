import checkDictionary from "./dictionary.js";
import {search as checkPersonalDictionary, addWord} from "./personal-dictionary.js"

function splitIntoWords(text){
    return text.split(/\b/);
}

function isWord(aString){
    return aString.match(/\w/) != null;
}

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
