const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  const uniqueArray = (ids) => products.filter((p) => ids.includes(p.id));

  const getIds = (items, direction) =>
    sortProductsByPrice(items, direction).map((p) => p.id);

  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(getIds(products, "asc")).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(getIds(products, undefined)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const input = uniqueArray([1, 3, 4]);
    expect(getIds(input, "asc")).toEqual([3, 4, 1]);
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(getIds(products, "desc")).toEqual([1, 2, 4, 5, 6, 3]);
  });
  // test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
  //   expect(getIds()).toEqual();
  // });
  // test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
  //   expect(getIds()).toEqual();
  // });
  // test("'asc' не меняет исходный массив [1, 3, 4]", () => {
  //   expect(getIds()).toEqual();
  // });
  // test("'desc' не меняет исходный массив [1, 3, 4]", () => {
  //   expect(getIds()).toEqual();
  // });
  // test("направление по умолчанию не меняет исходный массив всех товаров", () => {
  //   expect(getIds()).toEqual();
  // });
});
