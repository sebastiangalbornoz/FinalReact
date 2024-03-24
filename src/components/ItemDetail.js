// ItemDetail.js
import React from 'react';

function ItemDetail({ item }) {
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={`/images/${item.id}`} alt={item.name} />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      {/* Add quantity selector and add to cart button */}
    </div>
  );
}

export default ItemDetail;
