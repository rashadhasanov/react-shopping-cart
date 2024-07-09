function ProductDetails({product, deleteProduct}) {
  return (
    <div className="products-details-container">
      <img src={product.img} alt="Samsung phone" />
      <div className="product-details">
        <p className="product-name">{product.title}</p>
        <p className="product-price">${product.price}</p>
        <button
          className="product-clear"
          onClick={() => deleteProduct(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
