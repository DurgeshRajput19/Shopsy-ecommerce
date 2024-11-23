import React from "react";
import FooterLogo from "../../assets/3541663.jpg";
import Banner from "../../assets/banner-1504653_1920.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blig",
  },
];

export default function Footer() {
  return (
    <div style={BannerImg} className="text-white">
      <div data-aos="zoom-in" className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5 ">
          <div className="py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 ">
              <img src={FooterLogo} className="max-w-[50px]" alt="" />
              Shopsy
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis id dignissimos aspernatur, quae optio nobis deleniti
              ratione.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3  gap-3 ">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer  hover:translate-x-1 duration-300 text-gray-200  hover:text-primary"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3  gap-3 ">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer  hover:translate-x-1 duration-300 text-gray-200  hover:text-primary"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mt-6  ">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6 ">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Ghaziabad, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 1234567890 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
