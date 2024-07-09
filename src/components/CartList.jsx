import CartProduct from "./CartProduct";

function CartList({
  products,
  incrementProduct,
  decrementProduct,
  deleteProduct,
}) {
  return (
    <div className="items-container">
      <h2>Your Bag</h2>
      {products.map((product) => {
        return (
          <CartProduct
            key={product.id}
            product={product}
            incrementProduct={incrementProduct}
            decrementProduct={decrementProduct}
            deleteProduct={deleteProduct}
          />
        );
      })}
    </div>
  );
}

export default CartList;
