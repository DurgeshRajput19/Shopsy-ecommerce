import React from "react";
import Slider from "react-slick";
const testimonalsdata = [
  {
    id: 1,
    name: "Kunal",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facere labore eos omnis dignissimos corporis, a, dolores fugiat totam perspiciatis alias, eum assumenda excepturi quod? Minus vero blanditiis eius esse!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Tarun",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facere labore eos omnis dignissimos corporis, a, dolores fugiat totam perspiciatis alias, eum assumenda excepturi quod? Minus vero blanditiis eius esse!",
    img: "https://picsum.photos/101/102",
  },
  {
    id: 3,
    name: "Anuj",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facere labore eos omnis dignissimos corporis, a, dolores fugiat totam perspiciatis alias, eum assumenda excepturi quod? Minus vero blanditiis eius esse!",
    img: "https://picsum.photos/101/103",
  },
  {
    id: 4,
    name: "jai",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facere labore eos omnis dignissimos corporis, a, dolores fugiat totam perspiciatis alias, eum assumenda excepturi quod? Minus vero blanditiis eius esse!",
    img: "https://picsum.photos/101/104",
  },
  {
    id: 5,
    name: "Irfan",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facere labore eos omnis dignissimos corporis, a, dolores fugiat totam perspiciatis alias, eum assumenda excepturi quod? Minus vero blanditiis eius esse!",
    img: "https://picsum.photos/101/104",
  },
  {
    id: 6,
    name: "Ashish",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facere labore eos omnis dignissimos corporis, a, dolores fugiat totam perspiciatis alias, eum assumenda excepturi quod? Minus vero blanditiis eius esse!",
    img: "https://picsum.photos/101/104",
  },
  {
    id: 7,
    name: "Sachin",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facere labore eos omnis dignissimos corporis, a, dolores fugiat totam perspiciatis alias, eum assumenda excepturi quod? Minus vero blanditiis eius esse!",
    img: "https://picsum.photos/101/104",
  },
];

export default function Testimonals() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-10   py-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-primary ">
            What our Customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonal
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            asperiores.
          </p>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonalsdata.map((data) => (
              <div className="my-6  " key={data.id}>
                <div className="flex flex-col gap-4 dark:bg-gray-800 bg-primary/10 relative  shadow-lg py-8 px-6 mx-4 rounded-xl ">
                  <div className="mb-4 ">
                    <img
                      className="rounded-full w-20 h-20   "
                      src={data.img}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col  items-center gap-4 ">
                    <div className="space-y-3   ">
                      <p className="text-xs text-gray-500  ">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white  ">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0   " >,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
