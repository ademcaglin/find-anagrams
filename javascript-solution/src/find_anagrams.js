import { find_diff, remove } from "./find_diff";
import crypto from "crypto";

function find_anagrams(phrase, candidate, words) {
  let filtered = words.filter(w => !find_diff(w, phrase));
  for (let w of filtered) {
    let new_candidate = [...candidate, w];
    let new_words = [...words];
    remove(new_words, w);
    let new_phrase = find_diff(phrase, w);
    if (new_phrase === "") {
      let new_candidate_str = new_candidate.join(" ");
      let digest = crypto.createHash('md5').update(new_candidate_str).digest("hex");
      if (digest == "e4820b45d2277f3844eac66c903e84be" || digest == "23170acc097c24edb98fc5488ab033fe")
        console.log(new_candidate_str);
    }
    else {
      find_anagrams(new_phrase, new_candidate, new_words);
    }
  }
}

export default find_anagrams;