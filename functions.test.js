const {
  getInitials,
  createSlug,
  average,
  createSlugh,
  isPalindrome,
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
