import React, { Component } from "react";
import houses from './Houses'
import House from './House'
import Char from './Char'
import styles from './styles.css'
// let data = houses
class App extends Component {
  render() {
    return (
      <div>
        <h1>Houses</h1>
         {houses.map(item=><House data={item}/>  )}

        <h2>Charechters</h2>
        {houses.map(item=><Char data={item}/>  )}

      </div>
    );
  }
}

export default App;
