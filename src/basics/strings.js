/**ch the tests by typing `npm run test`**, this will launch all tests, and rerun tests at each file change.
> You can also launch test from your IDE.
> You can browse tests, they are located in files ending with `.test.js`.

1. [Basic
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} true if n is bigger than 2
 */

export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (
    typeof needle !== "string" ||
    typeof haystack !== "string" ||
    typeof newWord !== "string"
  ) {
    throw "Unsupported types"
  }
  let regex = new RegExp(needle, "gi")
  return haystack.replaceAll(regex, function (match) {
    return match
      .split("")
      .map(function (char, index) {
        if (index > newWord.length - 1) {
          return ""
        } else if (char === char.toUpperCase()) {
          return newWord[index].toUpperCase()
        } else {
          return newWord[index].toLowerCase()
        }
      })
      .reduce((a, b) => a + b)
  })
}

/*
>>> print(f"A-Z = {ord('A')}-{ord('Z')}")
A-Z = 65-90
>>> print(f"a-z = {ord('a')}-{ord('z')}")
a-z = 97-122
*/
