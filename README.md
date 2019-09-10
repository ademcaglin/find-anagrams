# Find Anagrams Problem

## The Problem

https://followthewhiterabbit.trustpilot.com/cs/step3.html

## Solution

> When I first came across the problem(about 1 week ago), I thought it was a hashing problem which contains a tricky. After review i realized that it is about finding anagrams of a phrase. Then i decided to implement an algorithm to find anagrams. After implemeting algorithm with python, i realized that finding easy secret took about 1 minute with word's length 4. Then i changed word's length as 3, same algorithm took about 4 hours. To find algorithm time complexity i used word's length as n so it seems the algorithm has exponantial time complexity like O(k^n). 

### Agrotihm:

- Filter words with given length(e.g n=4)
- Filter for current phrase
- Iterate for all words
- Calculate new phrase with finding diff between word(i asked a question on StackOverflow https://stackoverflow.com/questions/57754857/how-can-i-write-a-rust-function-to-find-different-characters-between-two-strings)
- If new phrase is empty calculate md5 hash and check if it is a solution.
- If new phrase is not empty, call function recursively.

> I think python code is more explanatory than my words :)

## Implementations

> I implemented code for 3 programming languages(python, rust and javascript). I'm surprized that python is faster than rust(probably i couldn't implement rust corrctly). 

### Python 

- Install ```python 3.7.4``` from https://www.python.org/downloads/
- Open terminal in the ``` python-solution```  folder
- Type ```python src/main.py``` to see result
- Wait to see easy secret(For my computer time elapsed: 94 seconds)
- To run tests: ``` python -m unittest discover -s test -p "*_test.py" ```

### Rust 

- Install ```rust and corgo``` from https://www.rust-lang.org/learn/get-started
- Open terminal in the ``` rust-solution```  folder
- Install packages ``` cargo install ```
- Type ```cargo run``` to see result 
- Wait to see easy secret(For my computer time elapsed: 281 seconds)
- To run tests: ``` cargo test ```

### Javascript(Nodejs) 

- Install ```nodejs``` from 
- Open terminal in the ``` javascript-solution```  folder
- Install packages ``` npm i ```
- Type ```npm start``` to see result
- Wait to see easy secret(For my computer time elapsed: 477 seconds)
- To run tests: ``` npm run test ```