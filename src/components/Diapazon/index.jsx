import styles from "./Diapazon.module.scss";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

const DiapazonComponent = ({ hasBackground = true, defaultStyle = {} }) => {
  return (
    <div
      style={{
        backgroundColor: hasBackground ? "#fff" : "transparent",
        border: hasBackground ? "1px solid #E0E0F4" : "none",
        padding: defaultStyle === "noPadding" ? "0px 20px" : "18px 20px"
      }}
      className={styles.timeframe}
    >
      <p>Диапазон</p>
      <RangePicker
        defaultValue={[
          dayjs("2025-02-06", dateFormat),
          dayjs("2025-02-07", dateFormat),
        ]}
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
  );
};

export default DiapazonComponent;
