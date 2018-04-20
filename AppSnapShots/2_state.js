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
  
  constructor(props) {
    super(props);
    this.state = {
      currentFoodRecipes: 0
    }
  }

  render() {
    //Destructuring
    return (
      <div className="App">

        <RecipeDispaly name={FoodItem[this.state.currentFoodRecipes].name} />

        {
          FoodItem.map((item, index) => (
            <button
              key={index}
              onClick={() => this.setState({ currentFoodRecipes: index })}
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
