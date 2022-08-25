import React from "react";
import ProductCard from "./ProductCard";
import Container from "@mui/material/Container";
import styles from "./Products.module.css";
import image1 from "../Assets/commercial ro.jpg";
import image2 from "../Assets/Containerized ro System.jpg";
import image3 from "../Assets/domestic.png";
import image4 from "../Assets/industrial.png";
import image5 from "../Assets/mobile ro.jpg";
import image6 from "../Assets/RO-Plant-Community-Reverse-Osmosis-Solution.png";
import image7 from "../Assets/ultrafiltration plant.jpg";

function Products() {
  return (
    <div className={styles.products}>
      <Container maxWidth="xl">
        <div className={styles.product }>
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
            img={image1}
          />
          <ProductCard
            title="Solar System"
            img={image1}
          />
        </div>
      </Container>
    </div>
  );
}

export default Products;