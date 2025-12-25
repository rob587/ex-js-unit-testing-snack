function getInitials(name) {
  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < words.length; i++) {
    initials += words[i][0].toUpperCase();
  }
  return initials;
}

function createSlug(str) {
  if (str === "") {
    throw new Error("Il titolo non può essere vuoto");
  }

  return str.toLowerCase();
}

function average(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const avg = sum / numbers.length;

  return avg;
}

function createSlugh(str) {
  return str.toLowerCase().replaceAll(" ", "-");
}

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

const posts = [
  { id: 1, title: "Primo Post", slug: "primo-post" },
  { id: 2, title: "Secondo Post", slug: "secondo-post" },
  { id: 3, title: "Terzo Post", slug: "terzo-post" },
];

function findPostById(posts, id) {
  return posts.find((post) => id === post.id);
}

module.exports = {
  getInitials,
  createSlug,
  average,
  createSlugh,
  isPalindrome,
  findPostById,
  posts,
};
