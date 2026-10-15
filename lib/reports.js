export const lowStock = (products, limit = 10) =>
  products.filter(p => p.stock > 0 && p.stock < limit);

export const priceList = products =>
  products.map(p => ({
    name: p.name,
    price: p.price
  }));

export const valueByCategory = products =>
  products.reduce((result, p) => {
    result[p.category] =
      (result[p.category] || 0) + p.price * p.stock;
    return result;
  }, {});

export const cartTotal = (products, cart) =>
  cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);

export const applySale = (products, category, percent) =>
  products.map(p =>
    p.category === category
      ? { ...p, price: p.price * (1 - percent / 100) }
      : p
  );