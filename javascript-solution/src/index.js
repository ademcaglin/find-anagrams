import lineReader from 'line-reader';
import fs from 'fs';
import { find_diff } from './find_diff';
import find_anagrams from './find_anagrams';
const phrase = "poultryoutwitsants";
const wordlist = [];

var lines = fs.readFileSync('words').toString().split("\n");
for(let line of lines){
    let word = line.replace("\r", "");
    if(word.length > 4 && !wordlist.includes(word) && !find_diff(word, phrase)){
        wordlist.push(word);
    }
}
console.log(wordlist.length);


find_anagrams(phrase, [], wordlist);
