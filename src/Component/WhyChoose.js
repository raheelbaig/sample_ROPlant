import React from "react";
import "./whychoose.css";
import ProductCard from "./ProductCard";
import { display } from "@mui/system";

function WhyChoose() {
  return (
    <div className="main">
      <div className="whychoose">
      <h1>WHY YOU CHOOSE US?</h1>
      </div>
      <div className="productss">
        <ProductCard
          title="(ICON)
Superior Quality equipment 
& Component"
        />
        <ProductCard
          title="(ICON)
Top No-tech Services & 
workmanship"
        />
        <ProductCard
          title="(ICON)
Countless Successful 
Projects"
        />
      </div>
    </div>
  );
}

export default WhyChoose;
