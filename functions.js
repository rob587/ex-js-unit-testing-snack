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

function average(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const avg = sum / numbers.length;

  return avg;
}

module.exports = {
  getInitials,
  createSlug,
  average,
};
