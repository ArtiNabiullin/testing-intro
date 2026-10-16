const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  const getIds = (category) =>
    filterByCategory(products, category).map((p) => p.id);

  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getIds("all")).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getIds(undefined)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getIds("")).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    expect(getIds("electronics")).toEqual([1, 2]);
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
    expect(getIds("books")).toEqual([3, 6]);
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
    expect(getIds("home")).toEqual([4, 5]);
  });
  test("'clothes' возвращает пустой массив", () => {
    expect(getIds("clothes")).toEqual([]);
  });
  test("'toys' возвращает пустой массив", () => {
    expect(getIds("toys")).toEqual([]);
  });
  test("'sports' возвращает пустой массив", () => {
    expect(getIds("sports")).toEqual([]);
  });
});
