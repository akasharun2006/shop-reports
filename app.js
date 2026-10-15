import products from "./data/products.js";

import {
  lowStock,
  priceList,
  valueByCategory,
  cartTotal,
  applySale
} from "./lib/reports.js";

import { formatPrice, formatDate } from "./lib/format.js";

const cart = [
  { id: 1, qty: 1 },
  { id: 4, qty: 2 },
  { id: 8, qty: 3 },
  { id: 99, qty: 1 }
];

console.log("Report Date:", formatDate());

console.log("Low Stock:");
console.table(lowStock(products));

console.log("Price List:");
console.table(priceList(products));

console.log("Value by Category:", valueByCategory(products));

console.log("Cart Total:", formatPrice(cartTotal(products, cart)));

console.log("Decor Sale:");
console.table(applySale(products, "decor", 10));