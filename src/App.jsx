import "./App.css";
import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";
import AOS from "aos";
import "aos/dist/aos.css"
import TopProduct from "./components/TopPoducts/TopProduct";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonals from "./components/testimonal/Testimonals";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

function App() {
  let [orderPopup,setorderPopup]  = useState(false)
  const handleOrderPopup = () =>{
    setorderPopup(!orderPopup)
  }
  

  React.useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration : 800,
        easing : "ease-in-sine",
        delay: 100,
      }
    );
    AOS.refresh()
  },[]);
  
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200" >
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Product/>
      <TopProduct handleOrderPopup={handleOrderPopup} />
      <Banner/>
      <Subscribe/>
      <Product/>
      <Testimonals/>
      <Footer/>
      <Popup  orderPopup={orderPopup} setorderPopup={setorderPopup} />
    </div>
  );
}

export default App;
