import React from "react";
import './Recipe.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="recipe">
        <h1>{title}</h1>
        <p><strong>Calories:</strong> {Math.round(calories)/1000}kcal</p>
        <ol><strong>Ingredients:</strong>{ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
        ))}</ol>
        <img className="image" src={image} alt="" />
        </div>
    );
};

export default Recipe;