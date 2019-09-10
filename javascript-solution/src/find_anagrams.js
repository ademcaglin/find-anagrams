function find_anagrams(phrase, candidate, words) {
  /*
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
  */
}

export default find_anagrams;