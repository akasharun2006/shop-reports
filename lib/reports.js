export const cartTotal = (products, cart) =>
  cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product?.price ?? 0) * item.qty;
  }, 0);