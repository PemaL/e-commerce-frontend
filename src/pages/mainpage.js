import React from "react";
import { useEffect, useState } from "react";
import ItemPage from "./ItemPage";
import ItemForm from "./ItemForm";
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

  function handleClick() {
    navigate("/ItemForm");
  }
  console.log(currentUser);

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

  return (
    <div>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addItem={handleAddItem}
          removeItem={handleRemoveItem}
        />
      </Drawer>
      <h1>Hello {currentUser.username}</h1>
      <button onClick={handleClick}> Sell an item </button>
      <ItemPage users={users} items={items} addItem={handleAddItem} />
    </div>
  );
}

export default MainPage;
