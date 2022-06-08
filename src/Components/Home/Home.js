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
        speed: 5000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
      return (
          <div className="mt-20">
              <Slider {...settings} >
                <div>
                    <img src={food1} alt="food" className="h-full w-full" />
                </div>
                <div>
                    <img src={food2} alt="food" className="h-full w-full" />
                </div>
                <div>
                    <img src={food3} alt="food" className="h-full w-full" />
                </div>
                <div>
                    <img src={food4} alt="food" className="h-full w-full" />
                </div>
                <div>
                    <img src={food5} alt="food" className="h-full w-full" />
                </div>
              </Slider>
          </div>
        
      );
}

export default HomeSlider;