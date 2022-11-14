import setupEditor from "./editor.js";
import checkDictionary from "./dictionary.js";
import {search as checkPersonalDictionary, addWord} from "./personal-dictionary.js"

let userText = document.querySelector("#userText");

function respell(text) {
    let words = text.split(/\b/);
    words = words.map(w => {
        return misspelled(w)?`<span class='misspelled'>${w}</span>`:w;
    });
    return words.join("");
}

userText.addEventListener('click', function(e){
    if ( e.target.classList.contains("misspelled") ){
        let word = e.target.innerText;
        if ( confirm(`Add "${word}" to personal dictionary?`) ){
            addWord(word);
            e.target.classList.remove("misspelled");
        }
    }
});

function isWord(aString){
    console.log(aString, aString.match(/\w/));
    return aString.match(/\w/) != null;
}

function misspelled(word){
    if ( !isWord(word) )
        return false;
    else if ( checkDictionary(word.toLowerCase()) )
        return false;
    else if ( checkPersonalDictionary(word.toLowerCase()) )
        return false;
    else
        return true;
}

setupEditor(userText, respell);