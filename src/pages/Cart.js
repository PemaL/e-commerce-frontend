import React from "react";

function Cart({ cartItems }) {
  // const [cart, setCart] = useState([]);
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quanity * item.price,
    0
  );

  return (
    <div className="cart-items">
      <div className="cart-items-header">
        <h1>Cart Items</h1>

        {cartItems.length === 0 && (
          <div className="cart-items-empty"> No items are added</div>
        )}

        <div>
          {cartItems.map((item) => (
            <>
              <div key={item.id} className="cart-items-list">
                <img
                  className="cart-items-image"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-function">
                <button className="cart-item-add">+</button>
                <button className="cart-item-remove">-</button>
              </div>
              <div className="cart-items-price">
                {item.quanity} * ${item.price}
              </div>
            </>
          ))}
          <div className="cart-items-total-price-name"> Total Price </div>
          <div className="cart-items-total-price"> ${totalPrice}</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
