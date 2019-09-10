def diff(first, last):
  first_arr = list(first)
  last_arr = list(last)
  for c in first:
    if c in last_arr:
      first_arr.remove(c)
      last_arr.remove(c)
  return "".join(first_arr)