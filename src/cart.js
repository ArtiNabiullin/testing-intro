function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError("Количество товара должно быть больше 0");
  }

  const existingItem = cart.find((item) => item.id === product.id);

  const currentQuantity = existingItem ? existingItem.quantity : 0;
  const newQuantity = currentQuantity + quantity;

  if (newQuantity > product.stock) {
    throw new RangeError(
      `Нельзя добавить больше товара, чем есть на складе (в наличии: ${product.stock})`,
    );
  }

  if (existingItem) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item,
    );
  }

  return [...cart, { ...product, quantity }];
}

function changeQuantity(cart, productId, quantity) {
  if (quantity <= 0) {
    throw new RangeError("Количество товара должно быть больше 0");
  }

  const existingItem = cart.find((item) => item.id === productId);

  if (!existingItem) {
    return cart;
  }

  if (quantity > existingItem.stock) {
    throw new RangeError(
      `Нельзя добавить больше товара, чем есть на складе (в наличии: ${existingItem.stock})`,
    );
  }

  return cart.map((item) => {
    item.id === productId ? { ...item, quantity: quantity } : item;
  });
}

function removeFromCart() {
  return notImplemented();
}
// function calculateCartSubtotal() {
//   return notImplemented();
// }
// function calculateOrderTotal() {
//   return notImplemented();
// }

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
