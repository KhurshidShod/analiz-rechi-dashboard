import { DatePicker, Select } from "antd";
import styles from "./ExportRecordModal.module.scss";
import { toast } from "react-toastify";

const { RangePicker } = DatePicker;

const ExportRecordModal = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${styles.exportrecord} ${isOpen ? styles.open : ""}`}>
      <div className={styles.exportrecord_modal}>
        <div className={styles.exportrecord_modal_header}>
          <h3>Экспортировать отчет </h3>
          <svg
            onClick={() => setIsOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 4L20 21M20 4L3 21"
              stroke="#213366"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            setIsOpen(false)
            toast.success("Экспорт успешно добавлен")
        }}>
          <div className={styles.form_group}>
            <label htmlFor="">Диапазон</label>
            <RangePicker
              style={{
                width: "100%",
              }}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="">Диапазон</label>
            <Select
              defaultValue="excel"
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "excel",
                  label: "Exel",
                },
                {
                  value: "json",
                  label: "Json",
                },
                {
                  value: "xml",
                  label: "Xml",
                },
                {
                  value: "csv",
                  label: "Csv",
                },
              ]}
            />
          </div>
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default ExportRecordModal;
