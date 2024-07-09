import ControlButtons from "./ControlButtons";
import ProductDetails from "./ProductDetails";

function CartProduct({
  product,
  incrementProduct,
  decrementProduct,
  deleteProduct,
}) {
  return (
    <div className="products-container">
      <ProductDetails product={product} deleteProduct={deleteProduct} />
      <ControlButtons
        product={product}
        incrementProduct={incrementProduct}
        decrementProduct={decrementProduct}
      />
    </div>
  );
}

export default CartProduct;
