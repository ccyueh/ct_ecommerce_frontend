import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Products from './views/products';
import Checkout from './views/checkout';
import Inventory from './views/inventory';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => <Products />} />
        <Route exact path='/checkout'
          render={() =>
            <div>
              <h1 className="text-center">Checkout</h1>
              <Checkout change="no" />
              </div>
          }
        />
        <Route exact path='/inventory' render={() => <Inventory />} />
      </Switch>

    </div>
  );
}

export default App;
