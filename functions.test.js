const { getInitials } = require("./functions");

describe("getInitials", () => {
  test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Roberto")).toBe("R");
  });
});
