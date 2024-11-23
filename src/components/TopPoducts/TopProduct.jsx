import React from "react";
import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/ai-generated-8702726_1280.jpg";
const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates eaque id sint aut, minus impedit dolorem. Doloribus obcaecati in dolores itaque. Provident corrupti delectus ducimus!",
  },
  {
    id: 2,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates eaque id sint aut, minus impedit dolorem. Doloribus obcaecati in dolores itaque. Provident corrupti delectus ducimus!",
  },
  {
    id: 2,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates eaque id sint aut, minus impedit dolorem. Doloribus obcaecati in dolores itaque. Provident corrupti delectus ducimus!",
  },
  
];

export default function TopProduct({handleOrderPopup}) {
  return (
    <div>
      <div className="container">
        <div className="text-left mb-24 ">
          <p data-aos="fade-up" className="text-sm text-primary ">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            asperiores.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center  ">
          {ProductData.map((data) => (
            <div data-aos="zoom-in" className=" cursor-pointer rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration300 group max-w-[300px] ">
              <div className="h-[100px]  " >
                <img src={data.img} alt="" className="max-w-[140px] mx-auto block transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md  " />
              </div>
              <div className="p-4 text-center" >
                  <div className="w-full justify-center gap-1 items-center  flex   " > 
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold " >{data.title}</h1>
                  <p className="text-gray-400 group-hover:text-white duration-300 text-sm line-clamp-2" >{data.description}</p>
                  <button  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary   " onClick={handleOrderPopup}  >Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
