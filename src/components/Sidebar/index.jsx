import React, { useRef, useState } from "react";
import styles from "./sidebar.module.scss";
import HomeLogo from "../../assets/icons/home.svg";
import TeamLogo from "../../assets/icons/team.svg";
import RecordsLogo from "../../assets/icons/records.svg";
import OtchyotLogo from "../../assets/icons/otchyot.svg";
import IntegrationLogo from "../../assets/icons/integration.svg";
import TabsLogo from "../../assets/icons/tabs.svg";
import SettingsLogo from "../../assets/icons/settings.svg";
import LogoutLogo from "../../assets/icons/logout.svg";
const Sidebar = ({ collapsed }) => {
  const sliderRef = useRef();

  const slideFunction = (e) => {
    console.log(sliderRef.current.offsetTop)
    console.log(e.currentTarget.getBoundingClientRect().top)
    if (
      sliderRef.current.offsetTop > e.currentTarget.getBoundingClientRect().top - 40
    ) {
      const top = e.currentTarget.offsetTop;
      sliderRef.current.style.top = `${top}px`;
      const bottom = e.currentTarget.getBoundingClientRect().top;
      setTimeout(() => {
        sliderRef.current.style.bottom = `${
          window.innerHeight - bottom - 40
        }px`;
      }, 200);
    } else {
      sliderRef.current.style.bottom = `${
        window.innerHeight - e.currentTarget.getBoundingClientRect().top - 40
      }px`;
      const top = e.currentTarget.offsetTop;
      setTimeout(() => {
        sliderRef.current.style.top = `${top}px`;
      }, 200);
    }
  };
  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <ul>
        <div ref={sliderRef} className={styles.slider}></div>
        <li onClick={(e) => slideFunction(e)}>
          <span>
            <img src={HomeLogo} alt="" />
          </span>
          <p>Дашборд</p>
        </li>
        <li onClick={(e) => slideFunction(e)}>
          <span>
            <img src={TeamLogo} alt="" />
          </span>
          <p>Компания</p>
        </li>
        <li onClick={(e) => slideFunction(e)}>
          <span>
            <img src={RecordsLogo} alt="" />
          </span>
          <p>Записи</p>
        </li>
        <li onClick={(e) => slideFunction(e)}>
          <span>
            <img src={OtchyotLogo} alt="" />
          </span>
          <p>Отчёты</p>
        </li>
        <li onClick={(e) => slideFunction(e)}>
          <span>
            <img src={IntegrationLogo} alt="" />
          </span>
          <p>Интеграции</p>
        </li>
        <li onClick={(e) => slideFunction(e)}>
          <span>
            <img src={TabsLogo} alt="" />
          </span>
          <p>Воронки</p>
        </li>
        <hr style={{ backgroundColor: "white", height: "1px", width: "80%" }} />
        <li onClick={(e) => slideFunction(e)}>
          <span>
            <img src={SettingsLogo} alt="" />
          </span>
          <p>Настройки аккаунта</p>
        </li>
        <li onClick={(e) => slideFunction(e)}>
          <p>Tариф</p>
        </li>
        <li onClick={(e) => slideFunction(e)}>
          <span>
            <img src={LogoutLogo} alt="" />
          </span>
          <p>Выйти</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
