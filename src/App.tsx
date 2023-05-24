import React from 'react';

import {ShopItemFuncComponent} from "./components/shop-item-func/shop-item-func-component";
import {item} from "./data/data";

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='background-element'></div>
        <div className='highlight-window'>
          <div className='highlight-overlay'></div>
        </div>
        <div className='window'>
          <ShopItemFuncComponent
            brand={item.brand}
            title={item.title}
            description={item.description}
            descriptionFull={item.descriptionFull}
            price={item.price}
            currency={item.currency}
          />
        </div>
      </div>
    </div>
  )
}

export default App
