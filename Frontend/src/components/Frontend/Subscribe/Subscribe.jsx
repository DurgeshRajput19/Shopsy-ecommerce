import React from "react";
import Banner from "../../assets/gradient-4597252_1920.jpg";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export default function Subscribe() {
  return (
    <div
      data-aos="zoom-in"
      className=" mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10 ">
        <div className="space-y-6 max-w-xl mx-auto  ">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold  ">
            Get Notificatied About New Products
          </h1>

          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-3"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
}
