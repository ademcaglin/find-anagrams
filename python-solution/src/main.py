import time
import diff
import find_anagrams

phrase = "poultryoutwitsants"
fo = open("words", "r")

wordlist = [line.rstrip('\n') for line in fo]  # get words from file
fo.close()
# remove words include different chars
wordlist = [w for w in wordlist if len(diff(w, phrase)) == 0]
wordlist = list(dict.fromkeys(wordlist))  # remove dublicates
wordlist = [w for w in wordlist if len(w) > 3]  # take words whose length

start_time = time.time()
find_anagrams(phrase, [], wordlist)
elapsed_time = time.time() - start_time
print("Time Elapsed :{0:2f}". format(elapsed_time))
