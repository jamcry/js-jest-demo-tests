function capitalize(text) {
  const words = text.toLowerCase().split(/\s+/);
  const capsWords = words.map(word => word[0].toUpperCase() + word.slice(1));
  const capsText = capsWords.join(" ");
  return capsText;
}

module.exports = capitalize;