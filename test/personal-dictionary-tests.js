import { search, addWord } from "../src/modules/personal-dictionary.js";

import assert from "assert";

const goodWords = [
    "aardvark",
    "fermenting",
    "photograph",
    "zygotes",
    "Kuker"
];

const badWords = [
    "squanchy",
    "cromulent",
    "Sporkula"
];

//Describe a test suite for the personal dictionary
describe("Personal Dictionary Functional Tests:", function () {

    //Describe sub-tests for when it is empty...
    describe("When Empty...", function () {
        //Good word or bad, it should not find the word.
        for (const word of goodWords)
            it(`Does not find the word ${word}`, () => assert.ok(!search(word)));
        for (const word of badWords)
            it(`Does not find the word ${word}`, () => assert.ok(!search(word)));
    });

    //Sub-tests for adding word
    describe("While adding words...", function () {
        //One good word at a time...
        for (const word of goodWords) {
            //sub-tests for the added word
            describe(`After adding ${word}`, function () {
                //Before the tests, add the word
                this.beforeAll(function () {
                    addWord(word);
                });

                //Make sure the word is found
                it(`Finds the word ${word}`, () => assert.ok(search(word)));

                //And that none of the bad words are found
                for (const word of badWords)
                    it(`Does not find the word ${word}`, () => assert.ok(!search(word)));
            });
        }
    });

    //More sub-tests for after we've added all the good words
    describe("After adding a number of words...", function () {
        //Make sure we can find ALL the good words
        for (const word of goodWords)
            it(`Finds the word ${word}`, () => assert.ok(search(word)));
        //Make sure we can find NONE of the bad words
        for (const word of badWords)
            it(`Does not find the word ${word}`, () => assert.ok(!search(word)));
    });

});