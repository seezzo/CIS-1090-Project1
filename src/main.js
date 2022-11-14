import setupEditor from "./editor.js";
import {splitIntoWords, isSpelledRight, addWord} from "./spellCheck.js";

let userText = document.querySelector("#userText");

function respell(text) {
    return splitIntoWords(text).map(w => {
        return isSpelledRight(w)?w:`<span class='misspelled'>${w}</span>`;
    }).join("");
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

setupEditor(userText, respell);