function getInitials(name) {
  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < words.length; i++) {
    initials += words[i][0].toUpperCase();
  }
  return initials;
}

function createSlug(str) {
  return str.toLowerCase();
}

module.exports = { getInitials, createSlug };
