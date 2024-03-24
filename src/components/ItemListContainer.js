// ItemListContainer.js
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import firebase from '../firebase/firebase';

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      // Fetch items from Firebase
      const snapshot = await firebase.collection('items').get();
      const itemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsData);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
