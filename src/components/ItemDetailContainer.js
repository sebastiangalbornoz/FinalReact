// ItemDetailContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import firebase from '../firebase/firebase';

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = firebase.collection('items').doc(id);
      const doc = await docRef.get();
      if (doc.exists) {
        setItem({ id: doc.id, ...doc.data() });
      } else {
        console.log('Item not found');
        // Handle item not found
      }
    };

    fetchItem();
  }, [id]);

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  );
}

export default ItemDetailContainer;
