const { getInitials, createSlug, average } = require("./functions");

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
