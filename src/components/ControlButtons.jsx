function ControlButtons({product, decrementProduct, incrementProduct}) {
  return (
    <div className="product-controls">
      <button
        onClick={() => incrementProduct(product.id)}
        className="increase-button control-btn"
      >
        <i className="material-icons">keyboard_arrow_up</i>
      </button>
      <p className="product-amount">{product.amount}</p>
      <button
        onClick={() => decrementProduct(product.id)}
        className="decrease-button control-btn"
      >
        <i className="material-icons">keyboard_arrow_down</i>
      </button>
    </div>
  );
}

export default ControlButtons;
