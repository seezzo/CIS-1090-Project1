import words from "./words.js";

function binarySearch(needle, haystack){
    let start = 0;
    let end = haystack.length;
    while ( start < end ){

        //Find the half way point
        let middle = Math.floor((start + end) / 2);

        //Find the word at the half way point
        let middleWord = haystack[middle];

        //We can log our progress if we want
        //console.log(start, end, pivot, wordAtPivot);

        //Check if we found the word
        if ( middleWord == needle){
            //We found it!
            return true;
        }
        
        if ( middleWord < needle ){
            //The needle comes AFTER the middle, so
            //search between middle and end.
            start = middle + 1;
        } else if ( middleWord > needle ){
            //The needle comes BEFORE the middle word,
            // so search between start and middle
            end = middle;
        }
    }
    return false;
}

export default function(word){
    return binarySearch(word, words);
}