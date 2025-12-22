const { getInitials, createSlug } = require("./functions");

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
