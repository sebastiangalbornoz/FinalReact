// ItemList.js
import React from 'react';
import { Link } from 'react-router-dom';

function ItemList({ items }) {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <Link to={`/item/${item.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
