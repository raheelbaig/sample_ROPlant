import React from "react";
import ProductCard from "./ProductCard";
import Container from "@mui/material/Container";
import styles from "./Products.module.css";
import image1 from "../Assets/domestic.png";
import image2 from "../Assets/commercial.png";
import image3 from "../Assets/container reverse.png";
import image4 from "../Assets/commercial RO.png";
import image5 from "../Assets/mobile.png";
import image6 from "../Assets/ultrafilteration plant.png";
import image7 from "../Assets/industrial.png";
import image8 from "../Assets/solar.png";
import image9 from "../Assets/30.png";

function Products() {
  return (
    <div className={styles.products}>
      <Container maxWidth="xl">
        <div className={styles.product}>
          <ProductCard
            title="DOMESTIC RO FILTER PLANT"
            img={image1}
          />
          <ProductCard
            title="COMMERCIAL RO PLANT FOR BUSINESS"
            img={image2}
          />
          <ProductCard
            title="INDUSTRIAL REVERSE OSMOSIS RO PLANT"
            img={image3}
          />
          <ProductCard
            title="CONTAINER REVERSE OSMOSIS RO PLANT"
            img={image4}
          />
          <ProductCard
            title="MOBILE REVERSE OSMOSIS RO PLANT"
            img={image5}
          />
          <ProductCard
            title="WALFARE/COMMUNITY RO PLANT"
            img={image6}
          />
          <ProductCard
            title="ULTRA FILTRATION RO PLANT"
            img={image7}
          />
          <ProductCard
            title="SOLAR SYSTEM"
            img={image8}
          />
          <ProductCard
            title="RO PLANT SERVICES"
            img={image9}
          />
        </div>
      </Container>
    </div>
  );
}

export default Products;