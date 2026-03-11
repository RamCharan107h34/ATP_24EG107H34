import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {

  const items = getCartItems();
  const subtotal = getCartTotal();

  if (items.length === 0) {
    return {
      status: "failed",
      message: "Cart is empty"
    };
  }

  let discount = 0;
  let total = subtotal;

  if (couponCode) {
    const discountResult = applyDiscount(subtotal, couponCode, items);
    discount = discountResult.discount;
    total = discountResult.finalTotal;
  }

  if (!validatePaymentMethod(paymentMethod)) {
    return {
      status: "failed",
      message: "Invalid payment method"
    };
  }

  items.forEach(item => {
    reduceStock(item.productId, item.quantity);
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount,
    total,
    paymentMethod,
    status: "success",
    message: "Order placed successfully"
  };
}

export function validatePaymentMethod(method) {

  const methods = ["card", "upi", "cod"];

  return methods.includes(method);
}

function generateOrderId() {
  return 'ORD' + Date.now();
}