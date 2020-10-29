import React from "react";
import Navbar from "./Navbar";
import Showcase from "./Showcase";
import Testimonials from "./Testimonials";
import Art from "./Art";
import Footer from "./Footer";
import "../App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Testimonials />
      <Art />
      <Footer />
    </div>
  );
};

export default App;
