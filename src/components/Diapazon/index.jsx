import styles from "./Diapazon.module.scss";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

const DiapazonComponent = ({
  hasBackground = true,
  defaultStyle = {},
  onReports = false,
}) => {
  return (
    <div
      style={{
        backgroundColor: hasBackground ? "#fff" : "transparent",
        border: hasBackground ? "1px solid #E0E0F4" : "none",
        padding:
          defaultStyle === "noPadding"
            ? "0px 20px"
            : onReports
            ? "0"
            : "18px 20px",
      }}
      className={styles.timeframe}
    >
      <p
        style={{
          color: onReports && "#fff",
          width: onReports && "100%",
        }}
      >
        Диапазон
      </p>
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
          backgroundColor: onReports && "transparent",
          color: onReports && "#fff",
        }}
      />
      <button
        style={{
          backgroundColor: onReports && "transparent",
          color: onReports && "#fff",
        }}
      >
        Сегодня
      </button>
      <button
        style={{
          backgroundColor: onReports && "transparent",
          color: onReports && "#fff",
        }}
      >
        Вчера
      </button>
      <button
        style={{
          backgroundColor: onReports && "transparent",
          color: onReports && "#fff",
        }}
      >
        Неделя
      </button>
      <button
        style={{
          backgroundColor: onReports && "transparent",
          color: onReports && "#fff",
        }}
      >
        Месяц
      </button>
      <button
        style={{
          backgroundColor: onReports && "transparent",
          color: onReports && "#fff",
        }}
      >
        Весь период
      </button>
    </div>
  );
};

export default DiapazonComponent;
