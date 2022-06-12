import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import food1 from "../../assets/food/food-1.jpeg";
import food2 from "../../assets/food/food-2.jpeg";
import food3 from "../../assets/food/food-3.jpeg";
import food4 from "../../assets/food/food-4.jpeg";
import food5 from "../../assets/food/food-5.jpeg";

function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
      return (
          <div className="mt-20">
              <div className="flex justify-center bg-catracha-blue text-white border-t-4 border-b-4 border-solid border-black h-20 lg:py-16">
                <h1 className="flex items-center text-2xl lg:text-6xl font-medium font-splatch">Welcome to La Casa Catracha</h1>
            </div>
              <Slider {...settings} >
                <div>
                    <img src={food1} alt="food" className="h-96 lg:h-screen w-full" />
                </div>
                <div>
                    <img src={food2} alt="food" className="h-96 lg:h-screen w-full" />
                </div>
                <div>
                    <img src={food3} alt="food" className="h-96 lg:h-screen w-full" />
                </div>
                <div>
                    <img src={food4} alt="food" className="h-96 lg:h-screen w-full" />
                </div>
                <div>
                    <img src={food5} alt="food" className="h-96 lg:h-screen w-full" />
                </div>
              </Slider>
              <div className="flex flex-col-reverse justify-around mt-10 bg-catracha-blue text-white pb-8 lg:flex lg:flex-row lg:items-center lg:h-96">
                  <div className="flex flex-col items-start pl-8 pt-4">
                      <h2 className="text-4xl pb-4">OUR MENU</h2>
                      <a href="/menu" className="text-2xl border-solid border-black border-4 p-4 font-bold bg-red-600 hover:scale-125">VIEW MENU</a>
                  </div>
                  <div className="p-8 lg:h-full lg:w-auto">
                      <img src={food3} alt="food" className="border-solid border-black border-8 lg:h-full lg:w-[60rem]" />
                  </div>
              </div>
              <div className="flex flex-col items-center justify-center mt-10 text-4xl pl-8 lg:pl-0">
                  <p className="lg:w-1/2">"The best, most authentic Honduran food in the city" <br/>- Some random Catracho</p>
                  <p className="mt-10 lg:w-1/2">We are located a half mile south of midtown. Come on in and enjoy the best Honduran food in town.
                  <br/> DANIEL DO YOU WANT SOMETHING HERE? IF SO LET ME KNOW.</p>
              </div>
              <footer className="flex justify-center mt-10 bg-catracha-blue text-white">designed and developed by McMillion Media</footer>
          </div>
        
      );
}

export default HomeSlider;