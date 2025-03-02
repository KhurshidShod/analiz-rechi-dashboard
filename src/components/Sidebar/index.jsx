import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./sidebar.module.scss";

import HomeLogo from "../../assets/icons/home.svg";
import TeamLogo from "../../assets/icons/team.svg";
import RecordsLogo from "../../assets/icons/records.svg";
import OtchyotLogo from "../../assets/icons/otchyot.svg";
import IntegrationLogo from "../../assets/icons/integration.svg";
import TabsLogo from "../../assets/icons/tabs.svg";
import SettingsLogo from "../../assets/icons/settings.svg";
import LogoutLogo from "../../assets/icons/logout.svg";
import SalesIcon from "../../assets/icons/sales_icon.svg";
import CallCenterIcon from "../../assets/icons/call_center.svg";
import UpIcon from "../../assets/icons/up_icon.svg";
import DownIcon from "../../assets/icons/down_icon.svg";

const Sidebar = ({ collapsed }) => {
  const sliderRef = useRef();
  const firstLink = useRef();
  const [firstLinkBottom, setFirstLinkBottom] = useState(0);
  const [openedLink, setOpenedLink] = useState(null);

  useEffect(() => {
    setFirstLinkBottom(
      window.innerHeight - firstLink?.current?.getBoundingClientRect().bottom
    );
  }, []);
  const slideFunction = (e) => {
    console.log(sliderRef.current.offsetTop);
    console.log(e.currentTarget.getBoundingClientRect().top);
    if (
      sliderRef.current.offsetTop >
      e.currentTarget.getBoundingClientRect().top - 40
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
        window.innerHeight - e.currentTarget.getBoundingClientRect().top - 60
      }px`;
      const top = e.currentTarget.offsetTop;
      setTimeout(() => {
        sliderRef.current.style.top = `${top}px`;
      }, 200);
    }
  };
  const droppedLinkFunction = (e) => {
    // onClick={(e) => {
    //   slideFunction(e);
    //   droppedLinkFunction("");
    // }}
    if (openedLink === e) {
      setOpenedLink(null);
    } else {
      setOpenedLink(e);
    }
  };
  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <ul>
        <div
          style={{ bottom: `${firstLinkBottom}px` }}
          ref={sliderRef}
          className={styles.slider}
        ></div>
        <li ref={firstLink} onClick={(e) => slideFunction(e)}>
          <Link to="/дашборд">
            <span>
              <img src={HomeLogo} alt="" />
            </span>
            <p>Дашборд</p>
          </Link>
        </li>
        <li onClick={(e) => slideFunction(e)}>
          <Link to="/компания">
            <span>
              <img src={TeamLogo} alt="" />
            </span>
            <p>Компания</p>
          </Link>
        </li>
        <li
          onClick={(e) => slideFunction(e)}
          className={`${openedLink === "records" ? styles.dropped : ""}`}
        >
          <button onClick={(e) => droppedLinkFunction("records")}>
            <span>
              <img src={RecordsLogo} alt="" />
            </span>
            <p>Записи</p>
            <img src={openedLink === "records" ? UpIcon : DownIcon} alt="" />
          </button>
          <Link to="/продажи" className={styles.inner_link}>
            <span>
              <img src={SalesIcon} alt="" />
            </span>
            <p>Продажи</p>
          </Link>
          <Link to="/колл-центр" className={styles.inner_link}>
            <span>
              <img src={CallCenterIcon} alt="" />
            </span>
            <p>Колл-центр</p>
          </Link>
        </li>
        <li
          onClick={(e) => slideFunction(e)}
          className={`${openedLink === "reports" ? styles.dropped : ""}`}
        >
          <button onClick={(e) => droppedLinkFunction("reports")}>
            <span>
              <img src={OtchyotLogo} alt="" />
            </span>
            <p>Отчёты</p>
            <img src={openedLink === "reports" ? UpIcon : DownIcon} alt="" />
          </button>
          <Link to="/возражения" className={styles.inner_link}>
            <span>
              <img src={SalesIcon} alt="" />
            </span>
            <p>Возражения</p>
          </Link>
          <Link to="/потребности" className={styles.inner_link}>
            <span>
              <img src={CallCenterIcon} alt="" />
            </span>
            <p>Потребности</p>
          </Link>
          <Link to="/плюсы" className={styles.inner_link}>
            <span>
              <img src={SalesIcon} alt="" />
            </span>
            <p>Плюсы</p>
          </Link>
          <Link to="/минусы" className={styles.inner_link}>
            <span>
              <img src={CallCenterIcon} alt="" />
            </span>
            <p>Mинусы</p>
          </Link>
        </li>
        <li onClick={(e) => slideFunction(e)}>
          <Link to="/интеграции">
            <span>
              <img src={IntegrationLogo} alt="" />
            </span>
            <p>Интеграции</p>
          </Link>
        </li>
        <li onClick={(e) => slideFunction(e)}>
          <Link to="/воронки">
            <span>
              <img src={TabsLogo} alt="" />
            </span>
            <p>Воронки</p>
          </Link>
        </li>
        <hr style={{ backgroundColor: "white", height: "1px", width: "80%" }} />
        <li onClick={(e) => slideFunction(e)}>
          <Link to="/настройка">
            <span>
              <img src={SettingsLogo} alt="" />
            </span>
            <p>Настройки аккаунта</p>
          </Link>
        </li>
        <li onClick={(e) => slideFunction(e)}>
          <Link to="/тариф">
            <p>Tариф</p>
            <div>Pro</div>
          </Link>
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
