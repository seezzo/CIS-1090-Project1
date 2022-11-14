import { search, addWord } from "../src/personal-dictionary.js";

import assert from "assert";

const goodWords = [
    "aardvark",
    "fermenting",
    "photograph",
    "zygotes",
];

const badWords = [
    "squanchy",
    "cromulent"
];

describe("Personal Dictionary Functional Tests:", function () {

    describe("When Empty...", function () {
        for (const word of goodWords)
            it(`Does not find the word ${word}`, () => assert.ok(!search(word)));
        for (const word of badWords)
            it(`Does not find the word ${word}`, () => assert.ok(!search(word)));
    });

    describe("While adding words...", function () {
        for (const word of goodWords) {
            describe(`After adding ${word}`, function () {
                this.beforeAll(function () {
                    addWord(word);
                });

                it(`Finds the word ${word}`, () => assert.ok(search(word)));

                for (const word of badWords)
                    it(`Does not find the word ${word}`, () => assert.ok(!search(word)));
            });
        }
    });

    describe("After adding a number of words...", function () {
        for (const word of goodWords)
            it(`Finds the word ${word}`, () => assert.ok(search(word)));
        for (const word of badWords)
            it(`Does not find the word ${word}`, () => assert.ok(!search(word)));
    });

});