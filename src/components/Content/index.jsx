import { Outlet } from "react-router-dom";
import styles from "./Content.module.scss";

const Content = ({ children, collapsed, noPadding }) => {
  return (
    <div className={styles.content_wrapper}>
      <div style={{
        padding: noPadding && "0 0 0 1px"
      }} className={`${styles.content} ${collapsed ? styles.collapsed : ""}`}><Outlet /></div>
    </div>
  );
};

export default Content;
