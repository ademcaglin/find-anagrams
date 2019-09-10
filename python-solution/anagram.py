import hashlib 

def diff(first, last):
  first_arr = list(first)
  last_arr = list(last)
  for c in first:
    if c in last_arr:
      first_arr.remove(c)
      last_arr.remove(c)
  return "".join(first_arr)

def find_anagrams(phrase, candidate, words):
  filtered = [w for w in words if len(diff(w, phrase)) == 0]
  for w in filtered:
    new_candidate = [*candidate, w]
    new_words = [*filtered]
    new_words.remove(w)
    new_phrase = diff(phrase, w)
    if new_phrase == "":
      new_candidate_str = " ".join(new_candidate)
      result = hashlib.md5(new_candidate_str.encode()).hexdigest()
      if result == "e4820b45d2277f3844eac66c903e84be" or result == "23170acc097c24edb98fc5488ab033fe":
        print(new_candidate_str)
    else:
      find_anagrams(new_phrase, new_candidate , new_words)

  
phrase = "poultryoutwitsants"
fo = open("words","r")

wordlist = [line.rstrip('\n') for line in fo] # get words from file
fo.close()
wordlist = [w for w in wordlist if len(diff(w, phrase)) == 0] # remove words include different chars
wordlist = list(dict.fromkeys(wordlist)) # remove dublicates
wordlist = [w for w in wordlist if len(w) > 4] # take words whose length 

find_anagrams(phrase, [], wordlist)
