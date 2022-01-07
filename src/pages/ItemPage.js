import React from "react";
import ItemCard from "./ItemCard";

function ItemPage({ items, users, addItem }) {
  return (
    <div>
      {items.map((item) => {
        return (
          <ItemCard
            users={users}
            key={item.id}
            item={item}
            name={item.seller.username}
            addItem={addItem}
          />
        );
      })}
    </div>
  );
}

export default ItemPage;
