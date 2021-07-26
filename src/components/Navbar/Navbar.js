import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar() {

    return (
        <div class="navbar">
            <Link to="/">Home</Link>
            <div class="dropdown">
                <button class="dropbtn">Recipes
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <Link to={{
                        pathname: "/Gallery",
                        galleryProps: { name: "Breakfast" }
                    }}>Breakfast</Link>
                    <Link to={{
                        pathname: "/Gallery",
                        galleryProps: { name: "Lunch" }
                    }}>Lunch</Link>
                    <Link to={{
                        pathname: "/Gallery",
                        galleryProps: { name: "Dinner"}
                    }}>Dinner</Link>
                </div>
            </div>
            <Link to="/popular">Popular</Link>
            <Link to="/about">About</Link>
        </div>

    );
}
