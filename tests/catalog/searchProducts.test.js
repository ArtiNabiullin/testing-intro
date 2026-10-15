const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  const getIds = (query) => searchProducts(products, query).map((p) => p.id);
  test("'Наушники' возвращает товар с ID 1", () => {
    expect(getIds("Наушники")).toEqual([1]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    expect(getIds("Чистый код")).toEqual([6]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    expect(getIds("Настольная лампа")).toEqual([4]);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    expect(getIds("javascript")).toEqual([3]);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    expect(getIds("ЧЕХОЛ")).toEqual([5]);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    expect(getIds("наушники")).toEqual([1]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getIds("")).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getIds(" ")).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getIds("\t\n")).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
