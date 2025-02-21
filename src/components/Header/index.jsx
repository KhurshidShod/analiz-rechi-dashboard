import React from "react";
import LogoImage from "../../assets/icons/logo.png";
import styles from "./header.module.scss";
const Header = ({toggleSidebar}) => {
  return (
    <header>
      <nav>
        <div onClick={toggleSidebar} className={styles.burger}>
          <span></span>
          <span></span>
        </div>
        <div className={styles.logo}>
          <img src={LogoImage} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
