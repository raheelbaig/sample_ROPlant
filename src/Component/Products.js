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
import image9 from "../Assets/industrial.png";

function Products() {
  return (
    <div className={styles.products}>
      <Container maxWidth="xl">
        <div className={styles.product}>
          <ProductCard
            title="Domestic RO Filter Plant"
            img={image1}
          />
          <ProductCard
            title="Commercial RO Plant for bussiness"
            img={image2}
          />
          <ProductCard
            title="Industrial Reverse Osmosis RO Plants"
            img={image3}
          />
          <ProductCard
            title="Container Reverse Osmosis RO Plants"
            img={image4}
          />
          <ProductCard
            title="Mobile Reverse Osmosis RO Plants"
            img={image5}
          />
          <ProductCard
            title="Walfare / Community RO Plants"
            img={image6}
          />
          <ProductCard
            title="Ultra Filteration RO Plants"
            img={image7}
          />
          <ProductCard
            title="Solar System"
            img={image8}
          />
          <ProductCard
            title="Services"
            img={image1}
          />
        </div>
      </Container>
    </div>
  );
}

export default Products;