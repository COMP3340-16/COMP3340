import React from 'react';
import './Gallery.css';
import data from '../../Recipes.json';
import test from '../../images/B1.jpg';

export default function Gallery(props) {
    var temp = [];
    if (props.location.galleryProps) {
        temp = data[props.location.galleryProps.name];
        console.log(temp);
    }
    return (

        <div>
            <center>
                <div >
                    {Object.keys(temp).map(key => (
                        <div class="container">
                            <div class="text">
                                <h3>{temp[key].title}</h3>
                            </div>

                            <img src={test} key={key} alt={temp[key].title} />
                        </div>
                    ))}
                </div>
            </center>
        </div>

    );

}