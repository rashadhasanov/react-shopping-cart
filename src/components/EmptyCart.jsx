import Header from "./Header";
import CartList from "./CartList";

function EmptyCart({ totalAmount, products }) {
  return (
    <>
      <Header totalAmount={totalAmount} />
      <CartList products={products} />
      <div className="empty">is currently empty</div>
    </>
  );
}

export default EmptyCart;
