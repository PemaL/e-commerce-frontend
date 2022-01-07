import React from "react";
import { useEffect, useState } from "react";
import ItemPage from "./ItemPage";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { Drawer } from "@material-ui/core";

function MainPage({ currentUser, items, setCartOpen, cartOpen }) {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/users")
      .then((res) => res.json())
      .then((x) => setUsers(x));
  }, []);

  function handleAddItem(addedItem) {
    const ItemExist = cartItems.find((item) => item.id === addedItem.id);
    if (ItemExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === addedItem.id
            ? { ...ItemExist, quantity: ItemExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...addedItem, quantity: 1 }]);
    }
  }

  function handleRemoveItem(removedItem) {
    const ItemExist = cartItems.find((item) => item.id === removedItem.id);
    if (ItemExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== removedItem.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === removedItem.id
            ? { ...ItemExist, quantity: ItemExist.quantity - 1 }
            : item
        )
      );
    }
  }

  function handleClick() {
    navigate("/ItemForm");
  }
  return (
    <div>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addItem={handleAddItem}
          removeItem={handleRemoveItem}
        />
      </Drawer>
      <button onClick={handleClick}> Sell an item </button>
      <h1>Hello {currentUser.username}</h1>
      <ItemPage users={users} items={items} addItem={handleAddItem} />
    </div>
  );
}

export default MainPage;
