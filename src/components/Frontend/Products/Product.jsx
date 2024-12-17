import React from "react";
import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/pexels-ekrulila-14297584.jpg";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    author: "white",
    aosdelay: "0",
    description : " Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
  },

  {
    id: 2,
    img: Img1,
    title: "Women western",
    rating: 5.0,
    author: "red",
    aosdelay: "200",
    description : " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    img: Img1,
    title: "Goggles",
    rating: 5.0,
    author: "brown",
    aosdelay: "400",
    description : " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    img: Img1,
    title: "Fashion T-Shirt",
    rating: 5.0,
    author: "white",
    aosdelay: "600",
    description : " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    img: Img1,
    title: "Printed T-Shirt",
    rating: 5.0,
    author: "pink",
    aosdelay: "800",
    description : " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function Product() {
  return (
    <div className="mt-14 mb-12 ">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-primary ">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            asperiores.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center  gap-5">
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up "
                data-aos-delay={data.aosdelay}
                key={data.id}
                className="space-y-3  items-center  flex flex-col  "
              >
                <img
                  src={data.img}
                  className="h-[220px] w-[150px] object-cover rounded-md  "
                  alt=""
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.author}</p>
                  <div className="flex items-center gap-1 ">
                    <FaStar className="text-yellow-400  " />
                    <span>{data.rating}</span>
                  </div>
                  <div  className="text-black dark:text-white font-mono"  >
                    {data.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center" >
            <button  className="text-center mt-10 cursor-pointer text-white py-1 rounded-md px-1  ">View All </button>
          </div>
        </div>
      </div>
    </div>
  );
}
