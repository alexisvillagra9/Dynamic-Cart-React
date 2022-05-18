import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import "./styles.css";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header></Header>
      </div>
      <div className="container">
        <Home></Home>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
