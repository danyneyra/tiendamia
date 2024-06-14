import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import NavButton from "./NavButton";
import SidebarCart from "./SidebarCart";
import { BASE_URL } from '../assets/baseConfig'
import { useState } from "react";

export default function NavBar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  //const [updateCart, setUpdateCar] = useState(0)
  
  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
    if (isSidebarVisible){
      document.body.style.overflow = 'auto'
    }else{
      document.body.style.overflow = 'hidden'
    }
  };

  return (
    <>
      <header>
        <div className={styles["container"]}>
          <div className={styles["header-title"]}>
            <div id="headerMenuMobile" className={styles["header-menu"]}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className={styles["header-logo"]}>
              <Link to={BASE_URL} className={styles["header-logo"]}>
                <img
                  className={styles["header-logo-img"]}
                  src={BASE_URL+"tiendamia-logo.svg"}
                  alt="Logo store"
                />
              </Link>
            </div>
            <div className={styles["header-search"]}>
              <form>
                <input type="text" placeholder="Search" id="search"/>
              </form>
            </div>
            <div className={styles["header-icons"]}>
              <div className={styles["header-sociales"]}>
                <img className={styles["icon"]} src={BASE_URL + "facebook.png"} alt="" />
                <img className={styles["icon"]} src={BASE_URL + "instagram.png"} alt="" />
              </div>
              <div id="my-account" className={styles["my-account"]}>
                <img className={styles["icon"]} src={BASE_URL + "user.png"} alt="" />
                <div id="login-submenu" className={styles["login-submenu"]}>
                  <span className={styles["arrow"]}></span>
                  <a id="login-submenu_login" className={styles["btn-login"]} href="./login.html">Ingresar</a>
                  <ul id="login-submenu_nav">
                    <li>Mis Favoritos</li>
                    <li id="logout-user">Salir</li>
                  </ul>
                </div>
              </div>
              <a className={styles["header-cart"]} onClick={toggleSidebar}>
                <div className={styles["cart-count"]}>
                  <span className={styles["cart-count-total"]}>0</span>
                  <img className={styles["icon"]} src={BASE_URL + "shopping-cart.png"} alt="" />
                </div>
              </a>
            </div>
          </div>
          <nav id="navbar">
            <ul>
              <NavButton title="Ofertas" link={BASE_URL+'black-friday'} />
              <NavButton title="Cómo comprar" link="#" />
              <NavButton title="Costos y tarifas" link="#" />
              <NavButton title="Mis pedidos" link="#" />
              <NavButton title="Garantía" link="#" />
            </ul>
          </nav>
        </div>
      </header>
      <SidebarCart isVisible={isSidebarVisible} toggleVisibility={toggleSidebar}/>

    </>
    
    
  );
}
