import React from "react";
import team from "../../assets/team.jpeg";

function About() {

    return (
        <div>
            <h1>ABOUT</h1>
            <img src={team} alt="team-storefront" />
            <h2>OUR STORY</h2>
            <p>La Casa Catracha is home to the most authentic and traditional Honduran food in Tampa. We invite everyone to come and try our menu and enjoy the food our families have enjoyed for years. 

                DANIEL, PLEASE TELL ME WHAT YOU WOULD LIKE HERE!!!
            </p>
        </div>
    )
}

export default About;