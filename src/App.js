import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
         <h1> My first Burger</h1>
         <p> Made with Love and React </p>
            <BurgerBuilder />
          
      </div>
    );
  }
}

export default App;
