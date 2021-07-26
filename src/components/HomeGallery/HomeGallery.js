import React from 'react';
import './HomeGallery.css';
import test from '../../images/B1.jpg';
const data = require('../../Recipes.json');
var temp = [];
var header;
function PopRec() {
    var today = new Date();
    var time = today.getHours();

    if (time <= 9) {
        temp = data.Breakfast.slice(0, 6);
        header = "Breakfast";
    } else if (time <= 14) {
        temp = data.Lunch.slice(0, 6);
        header = "Lunch";
    } else if (time <= 19) {
        temp = data.Dinner.slice(0, 6);
        header = "Dinner";
    } else {
        temp = data.Breakfast.slice(0, 6);
        header = "Breakfast";
    }

    console.log(time);
}

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('../../', '')] = r(item); });
    return images;
}

export default function HomeGallery() {
    PopRec();
    const images = importAll(require.context('../../images', false, /\.jpg/));
    console.log(temp);
    // temp[key].picture_link
    return (
        <div>
            <center>
            <h1>
                {header}
            </h1>
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