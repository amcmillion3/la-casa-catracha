import React from "react";
import team from "../../assets/team.jpeg";

function About() {

    return (
        <div>
            <div className="flex justify-center bg-catracha-blue text-white border-t-4 border-b-4 border-solid border-black">
                <h1 className="text-4xl font-medium font-splatch py-4">About</h1>
            </div>
            <div className="flex justify-center">
                <img src={team} alt="team-storefront" className="mt-10 w-full h-full lg:w-1/2 lg:h-screen"/>
            </div>
            <h2 className="flex justify-center text-4xl mt-10 font-bold">OUR STORY</h2>
            <div className="flex justify-center">
                <p className="flex justify-center w-1/2 text-xl mt-4 lg:text-2xl text-center">La Casa Catracha is home to the most authentic and traditional Honduran food in Tampa. We invite everyone to come and try our menu and enjoy the food our families have enjoyed for years. 
                <br/>
                    DANIEL, PLEASE TELL ME WHAT YOU WOULD LIKE HERE!!!
                </p>
            </div>
            <footer className="flex justify-center mt-10 bg-catracha-blue text-white">designed and developed by McMillion Media</footer>
        </div>
    )
}

export default About;