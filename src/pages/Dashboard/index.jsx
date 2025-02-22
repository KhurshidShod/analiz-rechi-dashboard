import { useState } from "react";
import styles from "./Dashboard.module.scss";
import dayjs from "dayjs";

import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const dateFormat = "YYYY-MM-DD"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={styles.dashboard}>
      <h1>Дашборд</h1>
      <ul className={styles.dashboard_tabs}>
        <li className={activeTab === 1 ? styles.active : ""}>
          <button onClick={() => setActiveTab(1)}>Все</button>
        </li>
        <li className={activeTab === 2 ? styles.active : ""}>
          <button onClick={() => setActiveTab(2)}>Менеджеры</button>
        </li>
        <li className={activeTab === 3 ? styles.active : ""}>
          <button onClick={() => setActiveTab(3)}>Возражения</button>
        </li>
        <li className={activeTab === 4 ? styles.active : ""}>
          <button onClick={() => setActiveTab(4)}>Потребности</button>
        </li>
        <li className={activeTab === 5 ? styles.active : ""}>
          <button onClick={() => setActiveTab(5)}>Плюсы</button>
        </li>
        <li className={activeTab === 6 ? styles.active : ""}>
          <button onClick={() => setActiveTab(6)}>Минусы</button>
        </li>
      </ul>
      <div className={styles.dashboard_timeframe}>
        <p>Диапазон</p>
        <RangePicker
          defaultValue={[dayjs('2025-02-06', dateFormat), dayjs('2025-02-07', dateFormat)]}
          style={{
            borderColor: "#E0E0F4",
            fontSize: "18px",
            fontWeight: "500",
            color: "#213366",
          }}
        />
        <button>Сегодня</button>
        <button>Вчера</button>
        <button>Неделя</button>
        <button>Месяц</button>
        <button>Весь период</button>
      </div>
      <div className={styles.dashboard_contents}>
        <div
          className={`${styles.content} ${
            activeTab === 1 ? styles.visible : ""
          }`}
        >
          <h1>Все</h1>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 2 ? styles.visible : ""
          }`}
        >
          <h1>Менеджеры</h1>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 3 ? styles.visible : ""
          }`}
        >
          <h1>Возражения</h1>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 4 ? styles.visible : ""
          }`}
        >
          <h1>Потребности</h1>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 5 ? styles.visible : ""
          }`}
        >
          <h1>Плюсы</h1>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 6 ? styles.visible : ""
          }`}
        >
          <h1>Минусы</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
