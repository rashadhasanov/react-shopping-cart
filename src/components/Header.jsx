function Header({ totalAmount }) {
  return (
    <header>
      <div className="header-container">
        <h1 className="header-logo">UseReducer</h1>

        <div className="nav-container">
          <div className="cart">
            <i className="fa-solid fa-cart-plus"></i>
          </div>
          <p className="cart-amount">{totalAmount}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
