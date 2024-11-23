import React from "react";
import Image1 from "../../assets/hero/16652.jpg";
import Image2 from "../../assets/hero/beautiful-people-3954533_1280.jpg";
import Slider from "react-slick";
const Imagelist = [
  {
    id: 1,
    img: Image1,
    title: "",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptates enim, illo fuga illum cumque vero magnam officiis beatae, eveniet dolore. Est quaerat quos quod.",
  },
  {
    id: 2,
    img: Image2,
    title: "",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptates enim, illo fuga illum cumque vero magnam officiis beatae, eveniet dolore. Est quaerat quos quod.",
  },
  // {
  //   id: 3,
  //   img: Image3,
  //   title: "",
  //   Description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptates enim, illo fuga illum cumque vero magnam officiis beatae, eveniet dolore. Est quaerat quos quod.",
  // },
];

export default function Hero({handleOrderPopup}) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200  ">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9   "></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {Imagelist.map((item) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 ">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center order-2 sm:order-1 sm:text-left relative z-10   ">
                  <h1
                    data-aos="zoom-in"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold  "
                  >
                    {item.title}
                  </h1>
                  <p
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    className="text-sm"
                  >
                    {item.Description}
                  </p>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="500"
                  >
                    <button onClick={handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 py-2 px-4 text-white rounded-full ">
                      Order now
                    </button>
                  </div>
                </div>
                {/* Images */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10  "
                  >
                    <img
                      src={item.img}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 object-contain mx-auto lg:scale-125 "
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
