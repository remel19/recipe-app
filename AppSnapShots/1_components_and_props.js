import React, { Component } from 'react';
import './App.css';


const FoodItem = [
  { name: 'Omelette' },
  { name: 'Pie' },
  { name: 'Soup' },
  { name: 'Taco' }
];

class RecipeDispaly extends Component {
  render() {
    return (
      <div>
        <h1>Display Recipes For {this.props.name}: </h1>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <RecipeDispaly name="Chicken" />

        {
          FoodItem.map((item, index) => (
            <button
              key={index}
              onClick={() => console.log(index)}
            >
              {item.name}
            </button>
            )
          )
        }
      </div>
    );
  }
}

export default App;
