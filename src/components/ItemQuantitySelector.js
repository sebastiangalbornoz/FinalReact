import React from 'react';

function ItemQuantitySelector({ quantity, onChange }) {
  return (
    <input type="number" value={quantity} onChange={onChange} />
  );
}

export default ItemQuantitySelector;
