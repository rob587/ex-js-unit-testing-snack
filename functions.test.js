const {
  getInitials,
  createSlug,
  average,
  createSlugh,
  isPalindrome,
  findPostById,
  posts,
} = require("./functions");

describe("getInitials", () => {
  test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Roberto")).toBe("R");
  });
});

describe("createSlug", () => {
  test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("HELLO WORLD")).toBe("hello world");
  });

  test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(() => createSlug("")).toThrow();
  });
});

describe("average", () => {
  test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });
});

describe("createSlugh", () => {
  test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlugh("Questo è un test")).toBe("questo-è-un-test");
  });
});

describe("isPalindrome", () => {
  test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
    expect(isPalindrome("anna")).toBe(true);
  });
});
describe("findPostById", () => {
  test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
    const result = findPostById(posts, 2);
    expect(result).toEqual({
      id: 2,
      title: "Secondo Post",
      slug: "secondo-post",
    });
  });
});
