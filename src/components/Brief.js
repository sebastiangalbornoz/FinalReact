import React from 'react';

function Brief({ items, totalPrice }) {
  return (
    <div>
      <h2>Resumen de la orden:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
    </div>
  );
}

export default Brief;
