//import { useEffect, useState } from 'react';
import styles from "./Home.module.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard  from "./ProductCard";
import { products } from "../assets/products"
import SidebarCart from '../components/SidebarCart'


function Home() {


  return (
    <>
      <SidebarCart />
      <NavBar />
      <Hero first="tecnología" second="renovada"/>
      <main>
        <div className={styles.sortPorducts}>
          <div className={styles["products-sort"]}>
            <span>Ordenar por:</span>
            <select name="filter-sort" id="filter-sort" title="Ordernar productos">
              <option value="default">-</option>
              <option value="ascendente">Nombre ascendente</option>
            </select>
          </div>
        </div>
        
        <div className={styles["product-container"]} id="products">
          {
            products.map((product) =>(
              <ProductCard 
                name={product.name} 
                id={product.id} 
                price={product.price} 
                image={product.images[0]}
                color={product.colors[0]}
                url={product.url}
                discount={product.discount}
                offert={product.offert}
              />
            ))
          } 
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
