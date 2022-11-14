/**
 * This is the MAIN CODE for SimpleSpell, where the program starts
 */

import setupEditor from "./modules/editor.js";
import { splitIntoWords, isSpelledRight, addWord } from "./modules/spell-checker.js";

//Find the html element and store it in a variable
let userText = document.querySelector("#userText");

//Set up a double click listener on the user text element
userText.addEventListener('dblclick', function (e) {
    //Get the exact sub-element that was clicked
    let clickedElement = e.target;

    //If it is a misspelled word
    if (clickedElement.classList.contains("misspelled")) {
        //Get the word
        let word = clickedElement.innerText;

        //Prompt user to confirm that they want to add it
        if (confirm(`Add "${word}" to personal dictionary?`)) {
            addWord(word);
            clickedElement.classList.remove("misspelled");
        }
    }
});

//The function that the editor will call with any modified
//line of text.
function respell(text) {
    //Split the text into words...
    return splitIntoWords(text)
        .map(w => { //If the word is mispelled add a marker
            if (!isSpelledRight(w))
                return `<span class='misspelled'>${w}</span>`;
            else
                return w;
        })
        .join(""); //Join it back together into a single string
}

//Finally, initialize the editor
setupEditor(userText, respell);