const reverseText = (text) => {
  return text.split("").reverse().join("");
};

const isPalindrome = (text) => {
  const reverse = reverseText(text).toLowerCase();
  return reverse.replace(/ /g, "") === text.toLowerCase().replace(/ /g, "");
};

module.exports = {
  reverseText,
  isPalindrome,
};
