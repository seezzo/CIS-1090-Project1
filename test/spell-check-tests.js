import { splitIntoWords, isSpelledRight, addWord } from "../src/modules/spell-checker.js"; //The module under test
import assert from "assert"; //Utilities to help the test


//These tests us a framework named Mocha https://mochajs.org/#getting-started

describe("SpellCheck tests", function () {

    //Describe tests for the splitter function
    describe("Word Split Tests", function () {

        //One example test
        it("Correctly splits the example string.", function () {
            let string = "Hello, friend!";
            let expectedResult = ['Hello', ', ', 'friend', '!'];

            //assert.deepEqual tests that two arrays have the same CONTENTS
            assert.deepEqual(splitIntoWords(string), expectedResult);
        });

    });

    describe("Spell Check Tests", function () {

        it("Word banana is spelled right", function () {
            assert.ok(isSpelledRight("banana"));
        });

        it("Word Pikachu is misspelled", function () {
            assert.ok(!isSpelledRight("Pikachu"));
        });

    });

    describe("Spell Check add words Tests", function () {
        //TODO
    });

});
