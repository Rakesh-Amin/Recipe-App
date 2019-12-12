import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "64901451";
  const APP_KEY = "d4a8021fa4954afa2e663ce91c92d95d"; 
 
  //state will access the information and send it to getRecipe.
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('coconut');
  
  useEffect(() => {
    getRecipes();
  }, [query]); 

   //async wait call 
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
 }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

//Information from state can be taken and we can display the specific element which we want and this can be accessed in Recipe.js.
  return (
    <div className = "App">
      <form onSubmit={getSearch} className = "search-form">
        <input className = "search-bar" type = "text" value={search} onChange={updateSearch} />
        <button className = "Search-button" placeHolder="Search your Recipe....." type = "submit" >
          Search
        </button>
      </form> 
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        key = {recipe.recipe.label}
        title = {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image} 
        ingredients = {recipe.recipe.ingredients}
         />
      ))}
      </div>     
    </div>
  );
};

export default App;