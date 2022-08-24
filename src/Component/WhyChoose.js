import React from "react";
import "./whychoose.css";
import ProductCard from "./ProductCard";
import { display } from "@mui/system";
import image1 from '../Assets/webLogo.png'

function WhyChoose() {
  return (
    <div className="main">
      <div className="whychoose">
      <h1>WHY YOU CHOOSE US?</h1>
      </div>
      <div className="productss">
        <ProductCard
          title="(ICON)
SUPERIOR QUALITY EQUIPEMENT 
& COMPONENT"
img={image1}
        />
        <ProductCard className="productCard"
          title="(ICON)
TOP NO-TECH SERVICES & 
WORKMANSHIP"
img={image1}
        />
        <ProductCard
          title="(ICON)
COUNTLESS SUCCESSFULL 
PROJECTS"
img={image1}
        />
      </div>
    </div>
  );
}

export default WhyChoose;
