import React from "react";
import team from "../../assets/team.jpeg";

function About() {

    return (
        <div>
            <div className="flex justify-center bg-catracha-blue text-white border-t-4 border-b-4 border-solid border-black">
                <h1 className="text-4xl font-medium">ABOUT</h1>
            </div>
            <div className="flex justify-center">
                <img src={team} alt="team-storefront" className="mt-10 w-1/2 h-screen"/>
            </div>
            <h2 className="flex justify-center text-4xl mt-10 font-bold">OUR STORY</h2>
            <div className="flex justify-center">
                <p className="flex justify-center w-1/2 text-2xl text-center">La Casa Catracha is home to the most authentic and traditional Honduran food in Tampa. We invite everyone to come and try our menu and enjoy the food our families have enjoyed for years. 
                <br/>
                    DANIEL, PLEASE TELL ME WHAT YOU WOULD LIKE HERE!!!
                </p>
            </div>
        </div>
    )
}

export default About;