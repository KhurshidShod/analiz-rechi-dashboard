import { DatePicker, Select, Upload } from "antd";
import styles from "./UploadRecordModal.module.scss";
import { toast } from "react-toastify";
import { useState } from "react";

const UploadRecordModal = ({ isOpen = true, setIsOpen }) => {
  const fileList = [];
  const [uploadError, setUploadError] = useState(false)
  return (
    <div className={`${styles.uploadrecord} ${isOpen ? styles.open : ""}`}>
      <div className={styles.uploadrecord_modal}>
        <div className={styles.uploadrecord_modal_header}>
          <h3>Загрузить отчет </h3>
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsOpen(false);
            toast.success("Отчет успешно добавлен");
          }}
          action=""
        >
          <div className={styles.form_group}>
            <label htmlFor="">Выберите сотрудника</label>
            <Select
              defaultValue="alexander"
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "alexander",
                  label: "Александра Беловская",
                },
                {
                  value: "kristina",
                  label: "Кристина Жук",
                },
                {
                  value: "alyona",
                  label: "Алёна Дэзик",
                },
                {
                  value: "dmitriy",
                  label: "Дмитрий Хуков",
                },
              ]}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="">Введите дату</label>
            <DatePicker style={{ width: "100%" }} />
          </div>
          <span className={`${styles.error_upload} ${uploadError ? styles.error : ""}`}>Аудио не загружено</span>
          <div className={styles.form_buttons}>
            <Upload
              action="https://64b2f06c38e74e386d55bed8.mockapi.io/audio"
              listType="audio"
              style={{
                display: "block",
                width: "100%",
              }}
              defaultFileList={fileList}
            >
              <span className={styles.upload_button}
                style={{
                  width: "100%",
                  backgroundColor: "#213366",
                  color: "white",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13.332 10L9.9987 6.66667L6.66536 10"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.9987 17.5L9.9987 6.66667M15.832 2.5L4.16536 2.5"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Загрузить аудио
              </span>
            </Upload>
            <button type="submit">Добавить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadRecordModal;
