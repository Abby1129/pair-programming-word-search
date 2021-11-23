const verticalJoin = function(letters) {
  const verticalLetters = [];
  for (let col = 0; col < letters[0].length; col++) {
    const tempArray = [];
    for (let row = 0; row < letters.length; row++) {
      tempArray.push(letters[row][col]);
      verticalLetters.push(tempArray);
    }

    return verticalLetters.map((ls) => ls.join(''));
  }
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  if (verticalJoin(letters).includes(word)) {
    return true;
  }
  const horizontalJoin = letters.map((ls) => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;

