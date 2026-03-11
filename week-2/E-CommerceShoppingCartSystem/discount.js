// Available coupons
// Available coupons
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

export function validateCoupon(couponCode, cartTotal, cartItems) {

  const coupon = coupons[couponCode];

  if (!coupon) {
    return { valid: false, message: "Invalid coupon" };
  }

  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: "Minimum amount not reached" };
  }

  if (coupon.category) {
    const hasCategory = cartItems.some(item => item.category === coupon.category);

    if (!hasCategory) {
      return { valid: false, message: "Coupon valid only for specific category" };
    }
  }

  return { valid: true, message: "Coupon applied" };
}

export function calculateDiscount(couponCode, cartTotal) {

  const coupon = coupons[couponCode];

  if (!coupon) return 0;

  if (coupon.type === "percentage") {
    return (cartTotal * coupon.value) / 100;
  }

  if (coupon.type === "flat") {
    return coupon.value;
  }

  return 0;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {

  const validation = validateCoupon(couponCode, cartTotal, cartItems);

  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }

  const discount = calculateDiscount(couponCode, cartTotal);

  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: "Discount applied successfully"
  };
}