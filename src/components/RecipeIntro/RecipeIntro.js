import React from 'react';
import './RecipeIntro.css';
import test from '../../images/B1.jpg';
const data = require('../../Recipes.json');

export default function HomeGallery() {
    var temp = data.Breakfast[0];
    console.log(temp);
    return (
        <div >
            <img src={test} />
                <h1 > {temp.title} </h1>
            <div class="container" >
                

                <div class="column" >
                    <h2> Ingredients </h2>
                    {temp.ingredients.map(item => <p> {item} </p>)}
                </div >
                <div class="column" >
                    <h2> Introduction </h2>
                    <p > {temp.instructions} </p>
                </div >
            </div>
        </div>
    );

}