import { useState } from "react";
import { products as initialProducts } from "./utils";
import Header from "./components/Header";
import CartList from "./components/CartList";
import Footer from "./components/Footer";
import EmptyCart from "./components/EmptyCart";

function App() {
  const [products, setProducts] = useState(initialProducts);

  const incrementProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, amount: product.amount + 1 } : product
      )
    );
  };

  const decrementProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts
        .map((product) =>
          product.id === id && product.amount > 0
            ? { ...product, amount: product.amount - 1 }
            : product
        )
        .filter((product) => product.amount > 0)
    );
  };

  const totalAmount = products.reduce(
    (acc, product) => acc + product.amount,
    0
  );

  if (products.length === 0) {
    return <EmptyCart totalAmount={totalAmount} products={products} />;
  }

  function deleteProduct(id) {
    const filteredProduct = products.filter((product) => {
      return id !== product.id;
    });

    setProducts(filteredProduct);
  }

  function clearCart() {
    setProducts([]);
  }

  return (
    <>
      <Header totalAmount={totalAmount} />
      <CartList
        products={products}
        incrementProduct={incrementProduct}
        decrementProduct={decrementProduct}
        deleteProduct={deleteProduct}
      />
      <Footer products={products} clearCart={clearCart} />
    </>
  );
}

export default App;
