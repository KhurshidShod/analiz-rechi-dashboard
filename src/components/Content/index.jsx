import styles from "./Content.module.scss";

const Content = ({ children, collapsed }) => {
  return (
    <div className={styles.content_wrapper}>
      <div className={`${styles.content} ${collapsed ? styles.collapsed : ""}`}>{children}</div>
    </div>
  );
};

export default Content;
