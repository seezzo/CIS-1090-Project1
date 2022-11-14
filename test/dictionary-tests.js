import search from "../src/dictionary.js";
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
]

describe("Dictionary Functional Tests:", function () {

    for (const word of goodWords) {
        it(`Finds the word ${word}`, function () {
            assert.ok(search(word));
        });
    }

    for (const word of badWords) {
        it(`Does not find the word ${word}`, function () {
            assert.ok(!search(word));
        });
    }

});

