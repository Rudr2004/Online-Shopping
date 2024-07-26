//import React from 'react'
import img1 from "../../assets/women.png";
import img2 from "../../assets/shopping.png";
import img3 from "../../assets/sale.png";
import Slider from "react-slick";
const ImageList = [
    {
        id:1,
        img: img1,
        title: "Upto 50% off on all Men's Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam perferendis doloribus ipsa quisquam labore at unde fuga quibusdam, eius incidunt aliquid eos, possimus maxime non voluptatum. Praesentium, vel consectetur."
    },
    {
        id:2,
        img: img2,
        title: "30% off on all Women's Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam blanditiis repudiandae excepturi odit ipsum alias nam possimus natus facere? Fugiat, atque! Mollitia accusantium, consequatur deleniti quae placeat quisquam est eligendi."
    },
    {
        id:3,
        img: img3,
        title: "70% off on all Products Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam perferendis doloribus ipsa quisquam labore at unde fuga quibusdam, eius incidunt aliquid eos, possimus maxime non voluptatum. Praesentium, vel consectetur."
    },
];
const Hero = ({ handleOrderPopup }) => {
    //Slider
    var settings = {
        dots: false,
        arrow: false,
        infinite: true,
        //speed: 300,
        slidsToScroll: 1,
        autoplay: true,
        //autoplaySpeed: 200,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* Background Pattern */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute right-0 -top-1/2  rounded-3xl rotate-45 - z-9">
        </div>
        {/* Hero Section */}
        <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
                {ImageList.map((data) => {
                    return ( 
                        // eslint-disable-next-line react/jsx-key
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* Text Contain Section */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-10">
                                        {data.title}
                                    </h1>
                                    <p className="text-sm">{data.description}</p>
                                    <div>
                                        <button onClick={ handleOrderPopup } className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">Order Now</button>
                                    </div>
                                </div>
                                {/* Image Section */}
                                <div className="order-1 sm:order-2">
                                    <div className="relative z-10">
                                        <img src={data.img} alt=""  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] lg:scale-120 sm:scale-105 object-contain mx-a"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    </div>
  )
}

export default Hero
