// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import firebase from './firebase/firebase';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <CartWidget />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
