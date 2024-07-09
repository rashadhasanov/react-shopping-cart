function Footer({ products, clearCart }) {
  const total = products
    .reduce((acc, curr) => {
      return acc + +curr.price * curr.amount;
    }, 0)
    .toFixed(2);

  return (
    <div className="footer-container">
      <div className="bottom"></div>
      <div className="total-container">
        <p className="total-text">Total</p>
        <p className="total-price">${total}</p>
      </div>
      <button className="clear-cart-btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}

export default Footer;
