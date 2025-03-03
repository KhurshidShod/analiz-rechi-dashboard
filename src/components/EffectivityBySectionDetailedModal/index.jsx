import DiapazonComponent from "../Diapazon";
import { Table } from "antd";

import styles from "./EffectivityBySectionDetailedModal.module.scss";
import { render } from "sass";

const EffectivityBySectionDetailedModal = ({ isOpened, setIsOpened }) => {
  const columnsTable = [
    {
      title: "Дата создания",
      dataIndex: "date",
    },
    {
      title: "ФИО",
      dataIndex: "fio",
    },
    {
      title: "Расшифровка разговора/ аудио",
      dataIndex: "audiscript",
      render: (text) => <button>{text}</button>,
    },
    {
      title: "Прерванных разговоров",
      dataIndex: "interruptedConversations",
    },
    {
      title: "Сброшенных звонков",
      dataIndex: "droppedCalls",
    },
    {
      title: "Сделка",
      dataIndex: "deal",
    },
    {
      title: "Оценка по чек-листу",
      dataIndex: "ratingByChecklist",
      render: (text) => (
        <div>
          <span>{text[0]}%</span>
          <button>{text[1]}</button>
        </div>
      ),
    },
  ];

  const dataTable = Array.from({ length: 32 }).map((_, i) => ({
    key: i,
    date: "24.11.2024",
    fio: "Александра Беловская",
    audiscript: "Открыть",
    interruptedConversations: 0,
    droppedCalls: 0,
    deal: 4,
    ratingByChecklist: [35, "Подробнее"],
  }));
  return (
    <div
      className={`${styles.effectivitydetailed} ${
        isOpened ? styles.opened : ""
      }`}
    >
      <div className={styles.effectivitydetailed_modal}>
      <span onClick={() => setIsOpened(false)} className={styles.effectivitydetailed_modal_close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="11"
          viewBox="0 0 19 11"
          fill="none"
        >
          <path
            d="M17.25 5.80885L1.60161 5.80885M1.60161 5.80885L6.07258 10.0669M1.60161 5.80885L6.07258 1.55078"
            stroke="#213366"
            stroke-width="1.65"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
        <h1>Детали эффективности отдела</h1>
        <DiapazonComponent hasBackground={false} />
        <div className={styles.effectivitydetailed_modal_search}>
          <input
            placeholder="Поиск  по имени или фамилии "
            type="text"
            name=""
            id=""
          />
        </div>
        <div className={styles.effectivitydetailed_modal_table}>
          <Table
            scroll={{ x: true }}
            columns={columnsTable}
            dataSource={dataTable}
          />
        </div>
      </div>
    </div>
  );
};

export default EffectivityBySectionDetailedModal;
