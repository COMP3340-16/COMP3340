import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <div class="topnav">
            <a href="#home">Home</a>
            <div class="dropdown">
                <button class="dropbtn">Recipes
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Breakfast</a>
                    <a href="#">Lunch</a>
                    <a href="#">Dinner</a>
                </div>
            </div>
            <a href="#popular">Popular</a>
            <a href="#about">About</a>
        </div>
    );
}
