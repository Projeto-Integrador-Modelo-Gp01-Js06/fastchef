import React from "react";
import Hero from "./components/pages/Home..js";
import Navbar from "./components/Navbar/Navbar.js";
import Services from "./components/Services/Services.js";
import Banner from "./components/Banner/Banner.js";
import AppStore from "./components/AppStore/AppStore.js";
import Testimonial from "./components/Avaliacoes/Avaliacoes.js";
import Footer from "./components/Footer/Footer.js";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      {/* <CoverBanner /> */}
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
