import React, { Component } from "react";
import Slider from "react-slick";

export default class Banners extends Component {
  render() {
    const settings = {
      arrows: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplayspeed:3000
      
    };
    return (
      <div className="h-[70vh] bg-[#1e2029] text-center ">
        <div className="flex justify-center">
          <Slider {...settings} className=" w-[90%] justify-center">
            
            <div className="relative left-[20%]">
              <img
                src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445"
                alt=""
                style={{ height: "500px", width: "1000px", borderRadius:'35px' }}
              />
            </div>{" "}
            <div className="relative left-[20%]">
              <img
                src="https://images.newscientist.com/wp-content/uploads/2021/07/20164548/gettyimages-171117216_web.jpg"
                alt=""
                style={{ height: "500px", width: "1000px", borderRadius:'35px' }}
              />
            </div>{" "}
            <div className="relative left-[20%]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmL5tCXfVvHmMMihoo7UpfiYDGSYosJZ0gRCE3izhFJtjcHuk7wUGPxgieVATW5vfgtOM&usqp=CAU"
                alt=""
                style={{ height: "500px", width: "1000px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[20%]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTyeIRiDW1h0Vuceuo3Hu64XtFOtPq2Ka_i0IPqE&s"
                alt=""
                style={{ height: "500px", width: "1000px", borderRadius:'35px' }}
              />
            </div>
           
          </Slider>
        </div>
      </div>
    );
  }
}
