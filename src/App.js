import React, { Component } from 'react';
import './App.css';
import YoutubePlay from 'react-icons/lib/fa/youtube-play';

const FoodItem = [
  { name: 'Omelette' },
  { name: 'Pie' },
  { name: 'Soup' },
  { name: 'Taco' }
];

class RecipeDispaly extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      recipes: null
    }
  }

  componentDidMount() {
    const name = this.props.name;
    //sample api query - https://www.themealdb.com/api/json/v1/1/search.php?s=Omelette
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+name;
    fetch(url)
      .then(
        response => response.json())
      .then(data => this.setState({ recipes: data.meals }))
  }

  render() {
    const recipes = this.state.recipes;
    return (
      <div>
        <h1>Display Recipes For {this.props.name}: </h1>

        {
          recipes && recipes.map((recipe, index) => (
            <div key={index}>
              <h3>{recipe.strMeal} <a href={recipe.strYoutube} target='_blank'><YoutubePlay size={32}/></a> </h3>
              <img className="recipe_img" src={recipe.strMealThumb} alt='Food'/>
              
            </div>
          ))
        }
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

        <RecipeDispaly key={this.state.currentFoodRecipes} name={FoodItem[this.state.currentFoodRecipes].name} />
      </div>
    );
  }
}

export default App;
