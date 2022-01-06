import React from "react";
import { useEffect, useState } from "react";
import ItemPage from "./ItemPage";
import ItemForm from "./ItemForm";
import { useNavigate } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { LinearProgress } from "@material-ui/core/LinearProgress";
import Cart from "./Cart";

function MainPage({ currentUser }) {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/users")
      .then((res) => res.json())
      .then((x) => setUsers(x));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  function handleClick() {
    navigate("/ItemForm");
  }

  //   Cart functions ***

  //   function handleAddItem(addedItem) {
  //     const ItemExist = cartItems.find((item) => item.id === addedItem.id);
  //     if (ItemExist) {
  //       setCartItems(
  //         cartItems.map((item) =>
  //           item === addedItem.id
  //             ? { ...ItemExist, quantity: ItemExist.quantity + 1 }
  //             : item
  //         )
  //       );
  //     } else {
  //       setCartItems([...cartItems, { ...item, quantity: 1 }]);
  //     }
  //   }

  //   function handleRemoveItem(removedItem) {
  //     const ItemExist = cartItems.find((item) => item.id === removedItem.id)
  //     if (ItemExist.quanity === 1) {
  //         setCartItems(cartItems.filter((item) => item.id !== removedItem.id))
  //     } else {
  //         setCartItems(
  //             cartItems.map((item) =>
  //             item.id === removedItem.id
  //             ? {...ItemExist, quanity: ItemExist.quanity - 1}
  //             :item)
  //         )
  //     }
  //   }

  return (
    <div>
      <h1>Hello{currentUser.username}</h1>
      <button onClick={handleClick}> Sell an item </button>
      <ItemPage users={users} items={items} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default MainPage;
