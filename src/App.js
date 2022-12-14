import Header from "./Component/Header";
import Navbar1 from "./Component/Navbar";
import "./App.css";
import Slider from "./Component/Slider";
import Products from "./Component/Products";
import Ourvalue from "./Component/Ourvalue";
import WhyChoose from "./Component/WhyChoose";
import OurClients from "./Component/OurClients";
import { Foooter } from "./Component/Foooter";
import GetDirection from "./Component/GetDirection";

// ICONS

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar1 />
      <Slider />
      <Products />
      <Ourvalue />
      <WhyChoose />
      <OurClients />
      <GetDirection />
      <Foooter />
    </div>
  );
}

export default App;
